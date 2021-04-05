const API = 'https://platzi-avo.vercel.app/api/avo';
const IMAGE_URL = 'https://platzi-avo.vercel.app';
const containerNode = document.querySelector('div#container');
const formatPrice = (price) => {
    
    const newPrice = window.Intl.NumberFormat("en-EN", {
        style: 'currency',
        currency: 'USD'
    }).format(price);

    return newPrice;
}

const fetchData = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    console.log(responseJSON);

    const allItems = [];
    responseJSON.data.forEach(element => {
        
        const img = document.createElement('img');
            img.src = `${IMAGE_URL}${element.image}`;
            img.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        
        const title = document.createElement('h3');
            title.textContent = element.name;
            title.className = "text-lg"
        
        const price = document.createElement('div');
            price.textContent = formatPrice(element.price);
            price.className = "text-gray-600"

        const priceAndTitle = document.createElement("div")
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

        const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(img, priceAndTitle);

        const container = document.createElement('div');
        container.className = "container";
        container.append(card);
        
        allItems.push(container);
    });
    
    containerNode.className = "mt-10 grid grid-cols-2 gap2";
    containerNode.append(...allItems);
}

fetchData();