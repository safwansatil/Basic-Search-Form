const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const searchTerm = searchForm.elements.movieQuery.value;
    const config = {params: {q : searchTerm}} ;//this allows for multiple key value in query string
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    searchForm.elements.movieQuery.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        document.body.append(img);
        }
    }
}