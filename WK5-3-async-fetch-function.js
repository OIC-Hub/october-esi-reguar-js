// setTimeout(function(){
//     alert('Yes, here I am. Down on my knees again, speak to me now.')
// }, 5000)

let time = document.querySelector('#time');

setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    time.innerHTML = `${hour}:${minute}:${second}`;
}, 1000);


let time2 = document.querySelector('#time2');

let count = 0;
let myInterval = setInterval(function(){
    if (count === 5) {
        clearInterval(myInterval)
    }

    count++;

    if (count === 5) {
        clearInterval(myInterval)
    }

    count++;
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    time2.innerHTML = `${hour}:${minute}:${second}`;
}, 1000);

// aysnc fetch function
async function getProduct(){
    try{
        const url = "https://dummyjson.com/products";
        const fetchData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }
        let allProducts = document.querySelector('#allProducts');

        let response = await fetch(url, fetchData);
        let data = await response.json();
        console.log(data);

        let products = data.products;
        
        allProducts.innerHTML = products.map(function(value, index, array){
            let newPrice = ((100 - value.discountPercentage) / 100 * value.price)
            return `
                <div class="eachProduct">
                    <img src="${value.thumbnail}" alt="">
                    <span class="discount">-${value.discountPercentage}%</span>
                    <p>${value.title}</p>
                    <p>
                        <span class="oldPrice">$${value.price}</span>
                        <span>$${newPrice.toFixed(2)}</span>
                    </p>
                    <button>Add to Cart</button>
                </div>
            `
        }).join('')

    } catch(error){
        console.log(error);
    } finally{
        console.log("Fetching completed");
        
    }
}

getProduct();
