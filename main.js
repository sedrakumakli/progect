let products = [
    {
    category : "camera",
    images:["./images/camera1 (1).jpg", "./images/camera2.jpg"  , "./images/camera3.jpg"],
    },
    {
    category : "bag",
    images:["./images/bag1.jpg" , "./images/bag2.jpg" , "./images/bag3.jpg"],
    },
    {
    category : "watch",
    images:[ "./images/clock1.jpg","./images/clock2.jpg"  ,"./images/clock3.jpg" ],
    },
    {
    category : "laptop",
    images:["./images/laptop1.jpg" , "./images/laptop2.jpg" , "./images/laptop3.jpg"],
    },
    {
    category : "tablet",
    images:["./images/tab1.jpg","./images/tab3.jpg"],
    },
    {
    category : "mobail",
    images:["./images/mo1.jpg" , "./images/mo2.jpg"],
    },
];
const con = document.getElementById("container");
products.forEach( element => {
con.innerHTML += `<img src="${element.images[0]}" id="${element.category}">`;
});

const images = document.querySelectorAll(".container img");
const popup = document.querySelector(".popup");
const clos = document.getElementById("clos");
// const slider = document.querySelector(".slider");
const img = document.querySelector(".slider img");
const total = document.querySelector(".total");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const num = document.querySelector(".num");
let selectProduct;
let count=0 ;
images.forEach( element => {
    element.addEventListener("click" , () => {
        num.innerHTML=1;
        count=0;
        popup.style.display = "block";
        let category = element.id;
        selectProduct = products.find(element => {return element.category == category })
    //أحد الطرق لجلب الصورة و وضعها حيث أريد
    // slider.innerHTML = "";
    // selectProduct.images.forEach( (element) => {
    // slider.innerHTML += `<img src="${element}">`;})
    img.src = selectProduct.images[0];
    total.innerHTML = selectProduct.images.length;
    })
})
clos.addEventListener("click" , () => {
    popup.style.display = "none";
})
prev.addEventListener("click" , () => {
    if(count>0){
        next.style.visibility="visible";
        count--;
        num.innerHTML = count+1;
        img.src =selectProduct.images[count];
        if(count == 0){
            prev.style.visibility="hidden";
        }
    }
})
next.addEventListener("click" , () => {
    if(count < selectProduct.images.length-1){
        prev.style.visibility="visible";
        count++;
        num.innerHTML = count+1;
        img.src =selectProduct.images[count];
        if(count == selectProduct.images.length-1){
            next.style.visibility="hidden";
            
        }
    }
})
