fetch('data/movies.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('movieList');

  data.forEach(movie => {
    container.innerHTML += `
      <a href="movie/${movie.slug}.html">
        <div class="card">
          <img src="${movie.poster}">
          <div class="info">
            <h3>${movie.title}</h3>
            <div>${movie.genre}</div>
            <div>⭐ ${movie.rating}</div>
          </div>
        </div>
      </a>
    `;
  });
});
