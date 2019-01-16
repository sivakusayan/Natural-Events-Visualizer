const CREDITS = [{
  name: 'Alexander Skowalsky',
  icons: [{ title: 'Radioactive', link: 'https://thenounproject.com/term/radioactive/573656/' }],
}, {
  name: 'Chunk Icons',
  icons: [{ title: 'Filter', link: 'https://thenounproject.com/term/filter/787739/' }],
}, {
  name: 'Claudia Revalina',
  icons: [{ title: 'Natural Disasters', link: 'https://thenounproject.com/term/natural-disasters/1674927/' }],
}, {
  name: 'emilegraphics',
  icons: [{ title: 'Hot Temperature', link: 'https://thenounproject.com/term/hot-temperature/560079/' }],
}, {
  title: 'Typhoon',
  name: 'Hayashi Fumihiro',
  icons: [{
    title: 'Earthquake',
    link: 'https://thenounproject.com/term/earthquake/77272/',
  }, {
    title: 'Typhoon',
    link: 'https://thenounproject.com/term/typhoon/76249/',
  }, {
    title: 'Drought',
    link: 'https://thenounproject.com/term/drought/85692/',
  }, {
    title: 'Landslide',
    link: 'https://thenounproject.com/term/landslide/85695/',
  }],
}, {
  name: 'Jory Raphael',
  icons: [{ title: 'Dust', link: 'https://thenounproject.com/term/dust/13546/' }],
}, {
  name: 'Juan Pablo Bravo',
  icons: [{ title: 'Iceberg', link: 'https://thenounproject.com/term/iceberg/374046/' }],
}, {
  name: 'kareemovic',
  icons: [{ title: 'Volcano', link: 'https://thenounproject.com/term/volcano/1837025/' }],
}, {
  name: 'Kirsh',
  icons: [{ title: 'Arrow', link: 'https://thenounproject.com/term/arrow/1256499/' }],
}, {
  name: 'Manuela Ribas',
  icons: [{ title: 'Snow', link: 'https://thenounproject.com/term/snow/24499/' }],
}, {
  name: 'Marek Polakovic',
  icons: [{ title: 'Change Appearance Drop', link: 'https://thenounproject.com/term/change-apperance-drop/384182/' }],
}, {
  name: 'Three Six Five',
  icons: [{
    title: 'Find',
    link: 'https://thenounproject.com/term/find/1769540/',
  }, {
    title: 'Menu',
    link: 'https://thenounproject.com/term/menu/1807546/',
  }],
}, {
  name: 'Yang LIU',
  icons: [{ title: 'Flood', link: 'https://thenounproject.com/term/flood/1034482/' }],
}];

const alphabeticalCompare = (string1, string2) => {
  if (string1.name.toLowerCase() < string2.name.toLowerCase()) {
    return -1;
  }
  if (string1.name.toLowerCase() > string2.name.toLowerCase()) {
    return 1;
  }
  return 0;
}

// Sort Credits object by author name
CREDITS.sort((author1, author2) => alphabeticalCompare(author1.name, author2.name));

// For each author, sort icons by title
CREDITS.forEach((author) => {
  author.icons.sort((icon1, icon2) => alphabeticalCompare(icon1.name, icon2.name));
});

export default CREDITS;
