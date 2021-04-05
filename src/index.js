const API = 'https://platzi-avo.vercel.app/api/avo';
const IMAGE_URL = 'https://platzi-avo.vercel.app';
const containerNode = document.querySelector('div#container');

const fetchData = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    console.log(responseJSON);

    const allItems = [];
    responseJSON.data.forEach(element => {
        
        const container = document.createElement('div');
        const img = document.createElement('img');
        img.src = `${IMAGE_URL}${element.image}`;
        const title = document.createElement('h3');
        title.textContent = element.name;
        const price = document.createElement('div');
        price.textContent = element.price;

        container.append(img,title,price);
        allItems.push(container);
    });
    containerNode.append(...allItems);
}

fetchData();