const API_KEY = "56f5a71177604252af47e1a08245396a";
let newsData;

export const clickHandler = async()=>{
    await getData();
    renderNewsItems();
}

const getData = async()=>{
    let newsDataPromise = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    let parsedData = await newsDataPromise.json();
    newsData = parsedData.articles;
}

const renderNewsItems = ()=>{
    newsData.forEach(element => {
        let heading = document.createElement("p");
        heading.innerText = element.title;
        document.body.appendChild(heading);
    });
}