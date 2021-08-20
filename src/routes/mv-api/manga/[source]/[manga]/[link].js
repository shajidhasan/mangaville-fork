import fetch from "node-fetch";
import cheerio from "cheerio";

const parseHtml = (source, manga, html) => {
  const resData = {
    title: '',
    chapters: []
  };
  const $ = cheerio.load(html);
  if (source === 'idkmanga') {
    resData.title = $('.entry-title').text();
    $('#Chapters_List')
      .children('ul')
      .children('li')
      .children('ul')
      .children('li')
      .each((i, chapter) => {
        const arr = $(chapter).children('a').text().split(' ');
        const data = {
          chapterName: $(chapter).children('a').text(),
          chapterLink: $(chapter).children('a').attr('href'),
          chapterId: arr.includes('Chapter')
            ? arr[arr.indexOf('Chapter') + 1]
            : arr.includes('Redraw')
              ? arr[arr.indexOf('Redraw') + 1]
              : arr.includes('Number')
                ? arr[arr.indexOf('Number') + 1]
                : arr[arr.indexOf('CHAPTER') + 1]
        };
        resData.chapters.push(data);
      });
  }
  return resData;
}

export async function get({ params }) {
  const d = decodeURIComponent;
  let { source, manga, link } = params;
  source = d(source); manga = d(manga); link = d(link);
  const response = await fetch(link);
  const html = await response.text();

  let resData = parseHtml(source, manga, html);

  return {
    body: { result: resData, code: response.status, text: response.statusText, html }
  }
}
