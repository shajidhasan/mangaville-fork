<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	onMount(() => {
		loadStuff();
	});

	let loaded = false;
	let data = {};

	const e = encodeURIComponent;

	const loadStuff = async () => {
		let source = 'idkmanga';
		let manga = 'Dr-Stone';
		let link = 'https://dr-stone-online.com';
		const res = await axios.get(`mv-api/manga/${e(source)}/${e(manga)}/${e(link)}`);
		data = res.data;
		loaded = true;
	};
</script>

<div class="h-96 px-10 bg-white text-2xl flex items-center justify-center">
	{#if loaded}
		{JSON.stringify(data)}
	{:else}
		loading bro
	{/if}
</div>
