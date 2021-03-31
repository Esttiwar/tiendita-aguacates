/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");


//INTL 
const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency", 
        currency: "USD"
    }).format(price)


    return newPrice;
};




//Fetch es una Web API

//Conectarnos al server
window
    .fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //JSON -> Data -> Renderizar infor pal browser
    .then(responseJson => {

        const todosLosItems = [];

        responseJson.data.forEach(item => {
            //Crear imagen
            let img = document.createElement("img");
            img.src = `${baseUrl}${item.image}`;
            img.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            //Crear titulo
            let titulo = document.createElement("h2");
            titulo.textContent = item.name;
            //estilos
            titulo.style = "font-size: 2rem";
            


            //Crear precio
            let precio = document.createElement("div");
            precio.textContent = formatPrice(item.price);



            //contenedor
            let contenedor = document.createElement("div");
            //Agregar clases
            contenedor.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            contenedor.append(img, titulo, precio);
            todosLosItems.push(contenedor)
      
        });

        appNode.append(...todosLosItems);
    });

