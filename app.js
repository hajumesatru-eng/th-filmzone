const API_KEY="YOUR_API_KEY";
const BASE_URL="https://api.themoviedb.org/3";
const IMG_URL="https://image.tmdb.org/t/p/w500";
const grid=document.getElementById("movieGrid");

fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{
    data.results.forEach(m=>{
        const div=document.createElement("div");
        div.innerHTML=`<a href="detail.html?id=${m.id}"><img src="${IMG_URL+m.poster_path}"></a>`;
        grid.appendChild(div);
    });
});
