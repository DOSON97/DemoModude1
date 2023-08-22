const openShopping = document.querySelector(".shopping");
const body =document.querySelector("body");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click",function(){
    body.classList.add("active");
});

closeShopping.addEventListener("click",function(){
    body.classList.remove("active");
});

// backup data
let products = [
    {id:1,name:"SICILIA<br>Cafe đắng hơn cuộc đời",image:"new3.webp",price: 12000},
    {id:2,name:"COFFEE TREE<br>Cafe Buôn Ma Thuật",image:"2.webp",price: 120000},
    {id:3,name:"LÀ VIỆT ARABICA <br>Đậm Đà Như Tình Anh",image:"3.png",price: 13000},
    {id:4,name:"CHOCOLATE..<br/>Fall in love",image:"new4.webp",price: 14000},
    {id:5,name:"LÀ VIỆT <br>ARABICA",image:"5.png",price: 15000},
    {id:6,name:"Phin Vàng Cao Cấp",image:"phin2.webp",price: 50000},
    {id:7,name:"HEMERA ESPRESSO",image:"8.webp",price: 50000},
    {id:8,name:"BRAZIL Coffe Bean",image:"new.jpeg",price: 50000},
    {id:9,name:"Espresso",image:"new5.webp",price: 50000},
    {id:10,name:"Chai tea<br>Ngon Như Trà",image:"new6.webp",price: 50000},
    {id:11,name:"ITALIAN COFFEE<br>Siêu Mạnh",image:"new7.jpeg",price: 50000},
    {id:11,name:"ROAST WORK COFFEE<br>THE TRUTH",image:"new8.jpeg",price: 50000},
   
];
const listCards = JSON.parse(localStorage.getItem("listCarts")) || [];

// hien thi du lieu product ra man hinh
function initApp (){
    for (let i = 0; i < products.length; i++) {
       let value = products[i];
       let newDiv = document.createElement("div")
       newDiv.classList.add("item")
       newDiv.innerHTML= `
       <img src="image/${value.image}" />
       <div class="title">${value.name}</div>
       <div class="price">${value.price}</div>
       <button onclick="addToCart(${i})">Add to cart</button>
       `;
        list.appendChild(newDiv);
    }
}

initApp();

// them san pham vaof gio hang
function addToCart (key){
    //console.log(key);
    if(listCards[key] == null){
        listCards[key] = {...products[key], quantity: 1};
    }else{
        listCards[key].quantity +=1;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCards))
    reloadcart();
}

// hien thi du lieu  o trong gio hang
function reloadcart (){
    listCart.innerHTML=" ";
    let count = 0;
    let totalPrice = 0;
    for (let i = 0; i< listCards.length; i++) {
     let value = listCards[i];
     if (value != null) {
        let newLi = document.createElement("li");
        newLi.innerHTML=`
        <div> <img src="./image/${value.image}"/> </div>
        <div>${value.name}</div>
        <div>${value.price}</div>
        <div>
        <button onclick="changeQuantity(${i},${value.quantity - 1})">-</button>
        <div>${value.quantity}</div>
        <button onclick="changeQuantity(${i},${value.quantity + 1})">+</button>
        </div>
        `;
        listCart.appendChild(newLi);
        totalPrice += value.price * value.quantity;
        count += value.quantity
     }
       
    }
total.innerText = totalPrice;
quantity.innerText = count;
}
reloadcart();

function changeQuantity(index,newQuantity){
    if (newQuantity<=0) {
        delete listCards[index]
    }else {
        listCards[index].quantity = newQuantity;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCards))
    reloadcart();
}
changeQuantity();