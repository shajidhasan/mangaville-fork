<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { store } from '../../database/db';
	import axios from 'axios';

	const e = encodeURIComponent,
		d = decodeURIComponent;

	const { mangaId } = $page.params;
	const manga = d(mangaId);

	const { title, genre, duration, description, cover, link, source } = $store.mangas.filter(
		(el) => el.title === manga
	)[0];

	let chunkState = 0;
	let chapter = [];

	onMount(() => {
		loadStuff();
	});

	function slicer(arr = []) {
		let newArr = [],
			i = 0;
		while (arr.length > 0) {
			const obj = {};
			const chunk = arr.splice(0, 100);
			if (chapter) {
				obj.chunk = chunk;
				obj.index = i;
				newArr.push(obj);
				i++;
			}
		}
		return newArr;
	}

	const loadStuff = async () => {
		const res = await axios.get(`mv-api/manga/${e(source)}/${e(mangaId)}/${e(link)}`);
		console.log(res);
		store.update((currentData) => {
			return { [mangaId]: res.data.result.chapters.reverse(), ...currentData };
		});
		const arr = [...$store[mangaId]];
		chapter = slicer(arr);
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div
	class="flex justify-center mx-auto w-full h-auto bg-center bg-cover bg-no-repeat px-2 "
	style="background-image: url({cover}); "
>
	<h1
		class="my-72 text-3xl lg:text-6xl border-2 px-6 lg:py-4 py-3 font-medium text-white uppercase"
		style="background-color: rgba(0, 0, 0, 0.6);"
	>
		{title}
	</h1>
</div>

<div class="px-4 lg:px-20 text-white text-lg font-medium mt-6">
	<div>
		<h2 class="text-2xl uppercase">{title}</h2>
		<div class="text-sm text-primary font-medium uppercase">{duration}</div>
		<div class="text-base font-light uppercase">{genre}</div>
		<div class="text-lg text-left font-light mt-5">
			{description}
		</div>
	</div>
</div>
<div class="px-4 lg:px-20 text-white text-lg font-medium mt-6">
	<div class="w-20 h-1 bg-primary mx-auto mt-10" />
	{#if chapter.length !== 0}
		<div class="flex flex-wrap justify-center gap-3 mt-10">
			{#each chapter as chunkBtn}
				<button
					class="{chunkState == chunkBtn.index
						? 'bg-primary border-primary'
						: 'bg-gray-800 border-gray-800'} px-4 py-2  text-white rounded-md border-2 transition duration-300 ease-in-out  hover:border-primary"
					on:click={() => (chunkState = chunkBtn.index)}
				>
					{chunkBtn.chunk[0].chapterId} - {chunkBtn.chunk[chunkBtn.chunk.length - 1].chapterId}
				</button>
			{/each}
			<div class="w-full h-0.5 bg-primary mx-auto mt-2" />
			<div class="flex flex-wrap justify-center gap-2 mt-5">
				{#each chapter[chunkState].chunk as chap, i}
					<a href="/{mangaId}/{chunkState * 100 + i + 1}"
						><button
							class="w-16 lg:w-20 h-11 bg-gray-800 text-white rounded-md border-2 transition duration-300 ease-in-out border-gray-800 hover:border-primary"
						>
							{chap.chapterId}
						</button></a
					>
				{/each}
			</div>
		</div>
	{:else}
		<div
			class="w-full h-40 animate-bounce mt-5 flex justify-center items-center text-white text-2xl font-light"
		>
			{title}
		</div>
	{/if}
</div>
