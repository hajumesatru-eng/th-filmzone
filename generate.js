const fs = require('fs');

let movies = [];
const genres = ["แอคชั่น","ดราม่า","สยองขวัญ","โรแมนติก"];

for (let i = 1; i <= 1000; i++) {
  movies.push({
    slug: `movie-${i}`,
    title: `หนังใหม่ ${i}`,
    genre: genres[i % 4],
    year: "2026",
    rating: (Math.random()*3+7).toFixed(1),
    poster: "https://via.placeholder.com/300x450",
    description: `รีวิวหนังใหม่ ${i}`
  });
}

if (!fs.existsSync('./movie')) fs.mkdirSync('./movie');

fs.writeFileSync('./data/movies.json', JSON.stringify(movies, null, 2));

// generate page
movies.forEach(movie => {

const html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">

<title>${movie.title} รีวิวหนัง</title>
<meta name="description" content="รีวิว ${movie.title}">

<link rel="stylesheet" href="../style.css">
</head>

<body>

<!-- POPUNDER -->
<script src='https://buffcasualwhine.com/iFXF2/SsA7jfavPZhBV0GJ4/X7ZDeXR/-ETVe4NOdFDAk9hyN/9SkUDqnt/miOC3wPKmsbRKS/NVa/9yJ/Uq-IJiAL74RfanQY/5cXwJWLqux/xNvWH5WCSj6eiB/k7Yyh19HxNj'></script>

<h1>${movie.title}</h1>

<img src="${movie.poster}" width="200">

<p>${movie.genre} | ⭐ ${movie.rating}</p>

<!-- ADS -->
<script>
atOptions = {
'key' : '53541ca00eed825e8c431c12f7418ac0',
'format' : 'iframe',
'height' : 250,
'width' : 300
};
</script>
<script src="//buffcasualwhine.com/53541ca00eed825e8c431c12f7418ac0/invoke.js"></script>

<p>${movie.description}</p>

<a href="https://buffcasualwhine.com/henpkny1f?key=381eaab06b0c4afd4f526aab207f6ca2">
คลิกดูเพิ่มเติม
</a>

</body>
</html>
`;

fs.writeFileSync(`./movie/${movie.slug}.html`, html);

});

// sitemap
let sitemap = '';
movies.forEach(m => {
  sitemap += `<url><loc>https://yoursite.com/movie/${m.slug}.html</loc></url>`;
});

fs.writeFileSync('./sitemap.xml',
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`
);

console.log("✅ DONE 1000 pages");
