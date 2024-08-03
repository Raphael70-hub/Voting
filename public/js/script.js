window.addEventListener("scroll", function(){
    // console.log("working")
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 50);
})

var mobileMenu = document.querySelector(".navbar-toggler");
var navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");

mobileMenu.addEventListener("click", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("white-nav")
})

// POP UPs

var image = document.querySelector(".product-image");


// image.addEventListener("click", function (popImage){
//     console.log("working");
//     image.classList.remove("product-image")
    
//     let popupBackground = document.querySelector(".popup")
//     popupBackground.classList.remove("display-none")

//     let canclePopup = document.querySelector(".cancle-popup")
//     canclePopup.classList.remove("display-none")

//     let popImg = document.querySelector("#" + popImage)
//     popImg.classList.remove("display-none")

// })

var currentImg;

// function popup(image,popImage){
//     // console.log("working");
//     currentImg = image
//     image.classList.remove("product-image")
    
//     let popupBackground = document.querySelector(".popup")
//     popupBackground.classList.remove("display-none")

//     let canclePopup = document.querySelector(".cancle-popup")
//     canclePopup.classList.remove("display-none")

//     let popImg = document.querySelector("#" + popImage)
//     popImg.classList.remove("display-none")
// }

function popup(image){
    currentImg = image
    let parentElement = image.parentElement;
    // console.log(currentImg.getAttribute("src"));
    parentElement.classList.remove("product-image")
    
    let popupBackground = document.querySelector(".popup")
    popupBackground.classList.remove("display-none")

    let canclePopup = document.querySelector(".cancle-popup")
    canclePopup.classList.remove("display-none")

    let popImg = document.querySelector("#popup-img")
    popImg.classList.remove("display-none")
    popImg.setAttribute("src", currentImg.getAttribute("src"))
}

function canclePopup(cancleButton){
    let popupBackground = document.querySelector(".popup")
    popupBackground.classList.add("display-none")

    cancleButton.classList.add("display-none")

    let popImg = document.querySelector("#popup-img")
    popImg.classList.add("display-none")

    let parentElement = currentImg.parentElement;
    parentElement.classList.add("product-image")
}



// let canclePopup = document.querySelector(".cancle-popup")

// function canclePopup(popImage,button){
//     // image.classList.add("product-image")

//     let popupBackground = document.querySelector(".popup")
//     popupBackground.classList.add("display-none")

//     // let canclePopup = document.querySelector(".cancle-popup")
//     button.classList.add("display-none")

//     let popImg = document.querySelector("#" + popImage)
//     popImg.classList.add("display-none")

//     currentImg.classList.add("product-image")
// }

// canclePopup.addEventListener("click", function(){
//     image.classList.add("product-image")

    
//     let popupBackground = document.querySelector(".popup")
//     popupBackground.classList.add("display-none")

//     let canclePopup = document.querySelector(".cancle-popup")
//     canclePopup.classList.add("display-none")

//     let popImg = document.querySelector("#popup-img1")
//     popImg.classList.add("display-none")
// })
