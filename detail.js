const API_KEY="d5a549dec10563dc56696d42f581a771";
const BASE_URL="https://api.themoviedb.org/3";
const IMG_URL="https://image.tmdb.org/t/p/w500";

const id=new URLSearchParams(window.location.search).get("id");

fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
.then(res=>res.json())
.then(d=>{
    document.getElementById("title").innerText=d.title;
    document.getElementById("poster").src=IMG_URL+d.poster_path;
    document.getElementById("overview").innerText=d.overview;
    document.getElementById("rating").innerText=d.vote_average;
});

fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
.then(res=>res.json())
.then(v=>{
    const t=v.results.find(x=>x.type==="Trailer");
    if(t){
        document.getElementById("video").innerHTML=`<iframe width="100%" height="400" src="https://www.youtube.com/embed/${t.key}" allowfullscreen></iframe>`;
    }
});
