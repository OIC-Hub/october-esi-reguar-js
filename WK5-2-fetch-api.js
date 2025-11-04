const url = "https://dummyjson.com/products";
const fetchData = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    // only use body when you are sending data to the server, e.g POST, PUT
    // body: JSON.stringify({

    // })
}

let allProducts = document.querySelector('#allProducts');

fetch(url, fetchData)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let products = data.products;
    console.log(products);

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
    
})
.catch(function(error){
    alert("Error fetching product")
    console.log(error);
    
})
