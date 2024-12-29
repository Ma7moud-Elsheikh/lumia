

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counts");
let started = false;


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 3000 / goal);
}



let spans = document.querySelectorAll(".proggres-bar1 span");
let section1 = document.querySelector(".skills");

window.onscroll = function () {
    // number
    if (window.scrollY >= section.offsetTop - 550) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }

    // skills
    if (window.scrollY >= section1.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};



window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheigh = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheigh - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

