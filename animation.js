// Boo Ya!
//
//

// section 1 "nightMare"

const sec1 = document.querySelector("#section1");

const cv_bubble = document.querySelector("#cv_bubble");
const bubble2 = document.querySelector("#bubble2");
const bubble1 = document.querySelector("#bubble1");

const BG = document.querySelector("#BG");

sec1.addEventListener("mousemove", sec1_react);

function sec1_react(e) {
  // Play It!

  BG.style.transform = `translateX(${
    (e.pageX - window.innerWidth / 2) / 15
  }px)`;
  cv_bubble.style.transform = `translateX(${
    -(e.pageX - window.innerWidth / 2) / 15
  }px)`;
  bubble2.style.transform = `translateX(${
    -(e.pageX - window.innerWidth / 2) / 80
  }px)`;
  bubble1.style.transform = `translateX(${
    (e.pageX - window.innerWidth / 2) / 80
  }px)`;
}

// section2 - First Line

const sec2 = document.querySelector("#section2");

const back = document.querySelector("#back");
const mid = document.querySelector("#mid");
const front = document.querySelector("#front");

sec2.addEventListener("mousemove", sec2_react);
function sec2_react(e) {
  // Play It!

  back.style.transform = `translateX(${e.pageX / 15}px)
  translateY(${e.pageY / 10}px) `;
  mid.style.transform = `translateX(${e.pageX / 45}px)
  translateY(${e.pageY / 35}px) `;
  front.style.transform = `translateX(${-e.pageX / 35}px)
  translateY(${-e.pageY / 20}px) `;
}
