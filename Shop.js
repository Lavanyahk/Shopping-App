let userInfo= [
    name , "lava",
    phone,"1234567890",
    email,"lava@gmail.com",
    dob,"05-07-2003",
    password,"lava123",
    image,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk2CaY-vCkyYTukjho1cjwvNAJi1b2ArsTA&s"
];
function addInfo(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let Phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("date").value;
    let pwd = document.getElementById("pwd").value;
    let image = document.getElementById("img").value;

    let user = {name,Phone,email,dob,pwd,image}
    userInfo.push(user);
    console.log(userInfo);
    
}

function CheckLogin(e) {
    e.preventDefault();
    let email=document.getElementById("uname").value;
    let pwd=document.getElementById("upwd").value;

    let isPresent = userInfo.filter((user)=> {
        return email=== user.email && pwd === user.password
    })
    if(isPresent.length>0){
        alert("Login Successfull");
        window.location.href="./Homepage.html"
       // window.location.href="homepage.html">
    }
    else{
        alert("Login failed")
    }
}

let image = document.querySelectorAll(".pimage");
let brand = document.querySelectorAll(".brand");
let model = document.querySelectorAll(".model");
let price = document.querySelectorAll("#price");
let rating = document.querySelectorAll("#rating");
console.log(image,brand,model,price,rating);

async function fetchData() {
    let res =await fetch("https://dummyjson.com/docs/products");
    let data =await res.json();
    console.log(data.products);
    for(let i=0;i<data.products.length;i++){
        image[i].src = data.products[i].thumbnail;
        model[i].innerText = data.products[i].title;
        brand[i].innerText = data.products[i].brand;
        price[i].innerHTML = `<strike>M.R.P:${data.products[i].price}</strike>
        <br><big>Offer Price:${Math.round(data.products[i].price-.15*data.products[i].price)}</big>`;
        products[i].price=data.products[i].rating;
    }
    
}
fetchData();
