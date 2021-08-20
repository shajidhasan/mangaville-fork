import fetch from "node-fetch";
import cheerio from "cheerio";

const parseHtml = (source, manga, html) => {
  const resData = {
    title: '',
    images: []
  }
  const $ = cheerio.load(html);
  if (source === 'idkmanga') {
    resData.title = $('.entry-title').text();
    if (manga === 'One Punch Man' || manga === 'Boruto' || manga === 'Jujutsu Kaisen') {
      $('.entry-content')
        .children('p')
        .each((i, image) => {
          if ($(image).children('img').attr('src') !== undefined) {
            if ($(image).children('noscript').text() !== '') {
              const url = $(image).children('noscript').text().split('"')[1];
              resData.images.push(url);
            } else {
              const url = $(image).children('img').attr('src');
              resData.images.push(url);
            }
          }
        });
    } else if (manga === 'One Piece' || manga === 'Dr. Stone' || manga === 'Tokyo Ghoul') {
      $('.lazy').each((i, image) => {
        const url = $(image).attr('src');
        resData.images.push(url);
      });
    }
  }
  else if (source === 'mangabat') {
    resData.title = $('.panel-chapter-info-top').children('h1').text();
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
    body: { result: resData, code: response.status, text: response.statusText }
  }
}
