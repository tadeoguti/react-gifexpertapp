


export const getGifs =  async(category) =>  {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=lpxvamNNeSc75OS6YsKGlQI0Y02uPcMC`;
    //const url = 'https://api.giphy.com/v1/gifs/search?q=Hentai&limit=10&api_key=lpxvamNNeSc75OS6YsKGlQI0Y02uPcMC';
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;

}