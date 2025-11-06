localStorage.setItem('firstName', 'Niyi');
localStorage.setItem('email', 'aa@gmail.com');

console.log(localStorage.getItem('firstName'));

console.log(localStorage.length);
localStorage.removeItem('email');
// localStorage.clear();

localStorage.setItem('phone', 123456789);
localStorage.setItem('foods', JSON.stringify(['Attieke', 'Tuwo', 'Rice']));

console.log(JSON.parse(localStorage.getItem('foods')));

const url = "https://jsonplaceholder.typicode.com/users";
const fetchData = {
    method: "GET",
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

let users = [];
async function getPosts() {
    let response = await fetch(url, fetchData);
    let data = await response.json();
    console.log(data);
    users = data;

    let myUsers = document.querySelector('#allUsers');
    myUsers.innerHTML = users.map(function(value, index, array){
        return `
        <div class="eachPerson">
            <p>Name: ${value.name}</p>
            <p>Email: ${value.email}</p>
            <p>Phone: ${value.phone}</p>
            <p>Username: ${value.username}</p>
            <p>Company: ${value.company.name}</p>
            <button onclick="followUser(${value.id})">Follow</button>
        </div>
        `
    }).join('')
}

getPosts();

function followUser(id){
    console.log(id);
    // console.log(users);

    // arrow function
    let followee = users.find(value => value.id === id);

    // the above arrow function is the same as below
    // let followee = users.find(function(value, index, array){
    //     return value.id === id;
    // });
    console.log(followee);
    if(!followee){
        alert("This user does not exist");
        return;
    }
    // let newFollowers = JSON.parse(localStorage.getItem('followers')) || [];
    let previousFollowers = [];
    if(localStorage.getItem('followers')){
        previousFollowers = JSON.parse(localStorage.getItem('followers'));
    }

    previousFollowers.push({
        id: followee.id,
        name: followee.name,
        company: followee.company.name,
        email: followee.email
    })

    localStorage.setItem('followers', JSON.stringify(previousFollowers))
    
    
}





// display all followers
let allMyFollowers = document.querySelector('#allMyFollowers');
let followersStorage = JSON.parse(localStorage.getItem('followers'));
allMyFollowers.innerHTML = followersStorage.map(function(value, index, array){
        return `
        <div class="eachPerson">
            <p>Name: ${value.name}</p>
            <p>Email: ${value.email}</p>
            <p>Company: ${value.company.name}</p>
            <button>Remove Follower</button>
        </div>
        `
    }).join('')