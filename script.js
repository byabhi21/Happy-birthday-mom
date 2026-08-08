// Hide loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .photo-box, .photo-text, .letter, footer")
.forEach(el => observer.observe(el));


// Floating hearts
function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },9000);

}

setInterval(createHeart,700);


// Confetti at footer
const footer = document.querySelector("footer");

const footerObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            for(let i=0;i<120;i++){

                createConfetti();

            }

        }

    });

});

footerObserver.observe(footer);

function createConfetti(){

    const confetti=document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left=Math.random()*100+"vw";

    confetti.style.background=
    `hsl(${Math.random()*360},90%,65%)`;

    confetti.style.animationDuration=
    (3+Math.random()*3)+"s";

    document.body.appendChild(confetti);

    setTimeout(()=>{
        confetti.remove();
    },6000);

}