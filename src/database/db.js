import { writable } from 'svelte/store';

export const store = writable({});

let data = {
	mangas: [
		{
			title: 'One Punch Man',
			duration: '2012 - On Going',
			genre: 'Action, Comedy, Supernatural, Sci-Fi, Parody, Super Power',
			description:
				'(Japanese: ワンパンマン Hepburn: Wanpanman) is a Japanese superhero webcomic created by the artist One in early 2009. It has a manga adaptation illustrated by Yusuke Murata, as well as an anime adaptation. Following its publication, the webcomic quickly went viral, surpassing 7.9 million hits in June 2012. One-Punch Man tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.',
			cover: 'One-Punch-Man.jpg',
			link: 'https://ldkmanga.com/',
			source: 'idkmanga'
		},
		{
			title: 'Boruto',
			duration: '2016 - On Going',
			genre: 'Action, Adventure, Martial Arts, Shounen, Super Power',
			description:
				'(Japanese: BORUTOボルト -NARUTO NEXT GENERATIONS-) is a Japanese manga series written by Ukyō Kodachi and Masashi Kishimoto, and illustrated by Mikio Ikemoto. It began monthly serialization with Kodachi as writer and Kishimoto as editorial supervisor in Shueisha’s shōnen manga magazineBoruto Uzumaki, and his ninja team. Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story… A new generation of ninja are ready to take the stage, led by Naruto’s own son, Boruto!.',
			cover: 'Boruto.jpg',
			link: 'https://bormanga.com/',
			source: 'idkmanga'
		},
		{
			title: 'Jujutsu Kaisen',
			duration: '2018 - On Going',
			genre: 'Action, Supernatural, Horror, School, Shounen, Demons',
			description:
				'Jujutsu Kaisen (Japanese: 呪術廻戦, lit. “Sorcery Fight”) is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha’s Weekly Shōnen Jump since March 2018. The individual chapters are collected and published by Shueisha, with thirteen tankōbon volumes released as of October 2020. In North America, the manga is licensed by Viz Media which publishes the series in print since December 2019. Yuji, a student at Sugisawa Town #3 High School, happens to be ultra-talented at track and field… But since he has no interest in running around in circles, he’s happy as a clam being a member of the Occult Research Club! Although he only joined up for kicks, things start to get serious when an actual spirit shows up at the school.',
			cover: 'Jujutsu-Kaisen.jpg',
			link: 'https://jujmanga.com/',
			source: 'idkmanga'
		},
		{
			title: 'One Piece',
			duration: '1997 - On Going',
			genre: 'Action, Adventure, Comedy, Drama, Fantasy, Shounen, Super Power',
			description: `One Piece is a Japanese manga series written and illustrated by Elichiro Oda. It has been serialized in Shueisha’s Weekly Shonen Jump magazine since July 22, 1997, and has been collected into 94 tankObon volumes.

			Enter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of apirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.
			
			The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world’s ultimate treasure known as “One Piece” in order to become the next King of the Pirates.`,
			cover: 'One-Piece.jpg',
			link: 'https://onepiece-manga-online.net/',
			source: 'idkmanga'
		},
		{
			title: 'Tokyo Ghoul',
			duration: '2011 - 2014',
			genre: 'Action, Drama, Supernatural, Horror, Mystery, Psychological, Seinen',
			description: `Tokyo Ghoul (Japanese: 東京喰種トーキョーグール, Hepburn: Tōkyō Gūru) is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha’s seinen manga magazine Weekly Young Jump between September 2011 and September 2014, and it has been collected in fourteen tankōbon volumes as of August 2014. A sequel titled Tokyo Ghoul:re was serialized in the same magazine between October 2014 and July 2018, and was later collected into sixteen tankōbon volumes. A prequel titled Tokyo Ghoul [Jack] ran online on Jump Live.

			A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.
			
			Tokyo Ghoul (東京喰種トーキョーグール, Tōkyō Gūru) is a TV anime produced by Studio Pierrot based on the manga of the same name.
			
			The second season, titled Tokyo Ghoul √A (東京喰種トーキョーグール√A, Tōkyō Gūru √A), began airing on January 9, 2015. Unlike the first season, which followed the original manga, the second season was advertised as an alternate story spun by Sui Ishida for the anime.
			
			A third season, titled Tokyo Ghoul:re (東京喰種トーキョーグール:re, Tōkyō Gūru:re) and based on the manga of the same name, began airing on April 3, 2018. It takes place two years after the events of Tokyo Ghoul √A. It was followed by a fourth season on October 9, 2018, which concludes the series as a whole.`,
			cover: 'Tokyo-Ghoul.jpg',
			link: 'https://tokyo-ghoul-new.com/',
			source: 'idkmanga'
		},
		{
			title: 'Dr. Stone',
			duration: '2017 - On Going',
			genre: 'Action , Adventure , Comedy , Drama , Sci-Fi',
			description: `Dr. Stone (Japanese: ドクターストーン Hepburn: Dokutā Sutōn) is a Japanese manga series written by Riichiro Inagaki and illustrated by Boichi, serialized in Weekly Shōnen Jump since March 6, 2017 with the individual chapters collected and published by Shueisha into ten tankōbon volumes as of April 2019. Viz Media licensed the manga in North America. Shueisha began to simulpublish the series in English on the website and app Manga Plus since January 2019. An anime television series adaptation by TMS Entertainment premiered on July 5, 2019. After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world— turning every single human into stone. Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju’s brawn and Senkuu’s brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified.`,
			cover: 'Dr.-Stone.jpg',
			link: 'https://dr-stone-online.com/',
			source: 'idkmanga'
		}
	]
};

store.set(data);
