let button = document.querySelector(".button");
let navbar = document.querySelector(".navbar")
button.addEventListener("click", function () {
    button.classList.toggle("open");
    navbar.classList.toggle("show")

})



// landing
let landing = document.querySelector(".landing");
let landingPage = document.querySelector(".landing-page");

let images = ["banner-01.jpg", "banner-02.jpg", "banner-03.jpg"];
let currentIndex = 0;
let moveRight = document.querySelector(".move-right");
let moveLeft = document.querySelector(".move-left");

function changeRight(newIndex) {
    landingPage.style.opactiy = 0;
    setTimeout(() => {
        currentIndex = (newIndex + images.length) % images.length;
        landingPage.style.backgroundImage = 'url("../images/' + images[currentIndex] + '")';
        landingPage.style.opactiy = 1;

    }, 500)
}





let tabs = document.querySelectorAll(".question h4");
let paragraph = document.querySelectorAll(".question p");

tabs.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        e.currentTarget.classList.toggle("active");
        paragraph.forEach((el) => {
            el.style.display = "none";
        })
        if (e.currentTarget.classList.contains("active")) {
            document.querySelector(e.currentTarget.dataset.cont).style.display = "block";

        }

    })
})

let spans = document.querySelectorAll(".part-two span");

let secton = document.querySelectorAll(".specifications > div")

spans.forEach((ele) => {
    ele.addEventListener("click", function (el) {
        spans.forEach((ele) => {
            ele.classList.remove("active")
        })
        el.currentTarget.classList.add("active")
        secton.forEach((sec) => {
            sec.style.display = "none";
            if (el.currentTarget.classList.contains("active")) {
                document.querySelector(el.currentTarget.dataset.to).style.display = "flex";
            }
        })
    })
})


let image = document.querySelectorAll(".buy .image img");

image.forEach((img) => {
    img.addEventListener("click", function () {
        let popup = document.createElement("div");
        popup.className = "overlay";

        document.body.appendChild(popup);
        let popupBox = document.createElement("div")
        popupBox.className = "popup-image";
        let tiltleBox = document.createElement("h3");
        tiltleBox.className = "title-box";
        tiltleBox.textContent = img.alt;

        popupBox.appendChild(tiltleBox);

        let popupImage = document.createElement("img");
        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        let close = document.createElement("span");
        close.className = "close";
        close.textContent = "X";
        popupBox.appendChild(close);

        popup.appendChild(popupBox)



    })
})

document.addEventListener("click", function (e) {
    if (e.target.className === "close") {
        e.target.parentNode.remove();

        document.querySelector(".overlay").remove()
    }
})


//properties.html

let choose = document.querySelectorAll(".choose span");
let buys = document.querySelectorAll(".offers > div");

choose.forEach((ele) => {
    ele.addEventListener("click", function (el) {
        choose.forEach((ele) => {
            ele.classList.remove("active")
        })
        el.currentTarget.classList.add("active")
        buys.forEach((buy) => {
            buy.style.display = "none";
            if (el.currentTarget.classList.contains("active")) {
                document.querySelectorAll(el.currentTarget.dataset.top).forEach((e) => {
                    e.style.display = "block";
                })
            }
        })
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelectorAll(".navbar li a");

    nav.forEach(a => a.classList.remove("active"))

    const currentURL = new URL(window.location.href)

    nav.forEach((a) => {
        const linkURL = new URL(a.getAttribute("href"), currentURL)

        if (linkURL.pathname.replace(/\/index\.html?$/, '/') === currentURL.pathname.replace(/\/index\.html?$/, '/')) {
            a.classList.add('active')
        }
    })
})

moveLeft.addEventListener("click", () => { changeRight(currentIndex - 1) });
moveRight.addEventListener("click", () => { changeRight(currentIndex + 1) });




