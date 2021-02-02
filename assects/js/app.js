"use strict"

let header = document.getElementById("header");
let introH = document.getElementById("intro").scrollHeight;
let scrollOffset = 0;
let links = document.querySelectorAll(".menu a");

const anchors = document.querySelectorAll('a[href^="#"]');
const accordions = document.querySelectorAll(".accordion__item");

    /* Fixed Header */
window.onscroll = function() {
    scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    checkScroll(scrollOffset);
}

function checkScroll(scrollOffset) {
    scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    
    if( scrollOffset >= introH ) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    } 
}

    /* Smooth scroll */
for(let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); 

        const goto = anchor.hasAttribute("href") ? anchor.getAttribute("href") : "body";
    
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

    // Active class of menu 
let removeClass = function (){
    let links = document.getElementsByTagName("a");

    for(let i = 0; i < links.length; i++){
        links[i].classList.remove("active");
    }
}

   /* Menu nav toggle */
document.querySelector("#nav_toggle").addEventListener("click", function(event) {
    event.preventDefault();
    // this.classList.toggle("active");
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        document.querySelector("#nav").classList.remove("active");
    } else {
        this.classList.add("active");
        document.querySelector("#nav").classList.add("active");
    }
});

/* Collapse or accordions*/
for(let item of accordions) {
    item.addEventListener("click", function() {
        // this.classList.toggle("active")
        if(this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            for(let el of accordions) {
                el.classList.remove("active");
            }
            this.classList.add("active");
        }
    });
}
