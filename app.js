const wrapper= document.querySelector(".sliderWrapper");
// wrapper.style.transform= "translateX(-200vw)"
const manuItems= document.querySelectorAll(".menuItem");

const products=[
   {
    id:1,
    title:"AIR FORCE",
    price: 119,
    colors:[
        {
            code: "black",
            img: "./img/air.png"
        },
        {
            code:"darkBlue",
            img: "./img/air2.png"
        },
    ],
   },
   {
    id:2,
    title:"AIR JORDAN",
    price: 149,
    colors:[
        {
            code: "lightgray",
            img: "./img/jordan.png"
        },
        {
            code:"green",
            img: "./img/jordan2.png"
        },
    ],
   },
   {
    id:3,
    title:"BLAZER",
    price: 129,
    colors:[
        {
            code: "lightgray",
            img: "./img/blazer.png"
        },
        {
            code:"green",
            img: "./img/blazer2.png"
        },
    ],
   },
   {
    id:4,
    title:"CRATER",
    price: 109,
    colors:[
        {
            code: "black",
            img: "./img/crater.png"
        },
        {
            code:"lightgray",
            img: "./img/crater2.png"
        },
    ],
   },
   {
    id:5,
    title:"HIPPIE",
    price: 99,
    colors:[
        {
            code: "gray",
            img: "./img/hippie.png"
        },
        {
            code:"black",
            img: "./img/hippie2.png"
        },
    ],
   }, 
]
let choosenproducts = products[0] 
const currentProductImg= document.querySelector(".productImg")
const currentProductTitle= document.querySelector(".productTiTle")
const currentProductPrice= document.querySelector(".productPrice")
const currentProductColors= document.querySelectorAll(".color")
const currentProductSizes= document.querySelectorAll(".size")


manuItems.forEach((item,index)=>{
    item.addEventListener("click",() => {
    wrapper.style.transform= `translateX(${-100 * index}vw)`;
    choosenproducts= products[index]

    // Change texts of currentproduct
    currentProductTitle.textContent=choosenproducts.title
    currentProductPrice.textContent= "$"+choosenproducts.price 
    currentProductImg.src=choosenproducts.colors[0].img

    currentProductColors.forEach((color,index)=>
    color.style.backgroundColor = choosenproducts.colors[index].code
    )
})
})
currentProductColors.forEach((color,index)=>{
color.addEventListener("click", ()=>{
    currentProductImg.src=choosenproducts.colors[index].img
})
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) => {
            size.style.background="white"
            size.style.color="black"
        })
        size.style.background="black"
        size.style.color="white"
    })
});

const productButton=document.querySelector(".productButton")
const payMent= document.querySelector(".payMent")
const close=document.querySelector(".close")


productButton.addEventListener("click",()=>{
payMent.style.display="flex"
});

close.addEventListener("click",()=>{
payMent.style.display="none"
})
