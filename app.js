// Hello Again,
// Have A Good Day!

//  Full Section on Scroll
const container = document.querySelector(".container");

const section = document.querySelectorAll(".section");

const NAVdots = document.querySelector("#NAV-dots");
var NAVdotBox = null;
var NAVdot = null;

var ScrollAnimationValidate = true;
// True val Means Animation is DONE!
// False Val Means During the Animation!

// Constructing Scroll Behaviour
var Scroll = {
  Duration: 800, // Milisecond Unit. ~ THIS VAL EQUAL TO TIME PER SCROLL
  Delay: 0, // Dont think S'one Need This. But it's Available
  Wait: 0, // Wait For a momment after the sroll animation complete
  Method: "cubic-bezier(0.25, 0, 0, 1)", // Scroll Behaviour - Smooth For Basic
};

var Scroll_transition =
  "transform" +
  " " +
  (Scroll.Duration / 1000).toString() +
  "s" +
  " " +
  (Scroll.Delay / 1000).toString() +
  "s" +
  " " +
  Scroll.Method;

container.style.transition = `${Scroll_transition}`;

//  container.addEventListener("transitionstart", (e) => {
//    ScrollAnimationValidate = false;
//  });
//  container.addEventListener("transitionend", (e) => {
//    ScrollAnimationValidate = true;
//  });
//

document.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    scrollUp();
  }
  if (e.deltaY > 0) {
    scrollDown();
  }

  Report();
});

// 'Magic' Function
var scrollCount = 0;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

for (let index = 0; index < section.length; index++) {
  const element = section[index];

  NAVdots.innerHTML += `<span class="dot"> <div></div></span>`;

  if (index == section.length - 1) {
    NAVdot = document.querySelectorAll(".dot div");
    NAVdotBox = document.querySelectorAll(".dot");

    break;
  }
}

// // Scroll Up "magic"
function scrollUp() {
  if (ScrollAnimationValidate == true) {
    ScrollAnimationValidate = false; // Animation Has To Be Busy Now!!!

    var Scroll_Animation_Timeout = setTimeout(() => {
      ScrollAnimationValidate = true;
      clearTimeout(Scroll_Animation_Timeout);
    }, Scroll.Duration + Scroll.Delay + Scroll.Wait);

    if (scrollCount == 0) {
      scrollCount = 0;
    }
    if (scrollCount > 0) {
      scrollCount--;
    }
    container.style.transform = `translateY(-${scrollCount * 100}vh)`;

    for (let index = 0; index < NAVdot.length; index++) {
      const element = NAVdot[index];

      if (index == scrollCount) {
        element.style.width = `3vw`;
      } else {
        element.style.width = `10px`;
      }
      if (index == NAVdot.length - 1) {
        break;
      }
    }
  }

  console.log(scrollCount);
}

// // Scroll DW "magic"

function scrollDown() {
  if (ScrollAnimationValidate == true) {
    ScrollAnimationValidate = false; // Animation Has To Be Busy Now!!!

    var Scroll_Animation_Timeout = setTimeout(() => {
      ScrollAnimationValidate = true;
      clearTimeout(Scroll_Animation_Timeout);
    }, Scroll.Duration + Scroll.Delay + Scroll.Wait);

    if (scrollCount == section.length - 1) {
      scrollCount = section.length - 1;
    }
    if (scrollCount < section.length - 1) {
      scrollCount++;
    }
    container.style.transform = `translateY(-${scrollCount * 100}vh)`;

    for (let index = 0; index < NAVdot.length; index++) {
      const element = NAVdot[index];

      if (index == scrollCount) {
        element.style.width = `3vw`;
      } else {
        element.style.width = `10px`;
      }

      if (index == NAVdot.length - 1) {
        break;
      }
    }
  }
  console.log(scrollCount);
}

//  Navigate On Click Be like. :)))
for (let index = 0; index < NAVdot.length; index++) {
  const element = NAVdot[index];
  const ElementSensor = NAVdotBox[index];

  ElementSensor.addEventListener("click", (e) => {
    scrollCount = index;
    container.style.transform = `translateY(-${scrollCount * 100}vh)`;

    for (let index2 = 0; index2 < NAVdot.length; index2++) {
      const element2 = NAVdot[index2];
      if (index2 == index) {
        element2.style.width = `3vw`;
      } else {
        element2.style.width = `10px`;
      }
    }

    Report();
    console.log(scrollCount);
  });

  if (index == NAVdot.length - 1) {
    break;
  }
}

// Animation On Section's Elements

// Section1 - Carousel Auto Scrolling
const Carousel_Slider = document.querySelector(".Carrousel_Slider");
const Carousel_Items = document.querySelectorAll(".Carousel_Items");

var Slide_Count = 1;

//  Prerun
var Carousel_Prerun = setTimeout(() => {
  Carousel_Items[Slide_Count].style.backgroundSize = `108%`;
  sec1_Carrosel();

  clearTimeout(Carousel_Prerun);
}, 10);

function sec1_Carrosel() {
  if (scrollCount == 0) {
    var Carousel_Interval = setInterval(() => {
      if (Slide_Count == 1) {
        Carousel_Slider.style.transition = `transform 1.3s cubic-bezier(0.25, 0, 0, 1)`;
        Carousel_Items[Carousel_Items.length - 1].style.backgroundSize = `101%`;
      }

      Slide_Count += 1;

      Carousel_Slider.style.transform = ` translateX(${-Slide_Count * 100}vh)`;

      Carousel_Items[Slide_Count].style.backgroundSize = `108%`;
      Carousel_Items[Slide_Count - 1].style.backgroundSize = `101%`;

      if (Slide_Count == Carousel_Items.length - 1) {
        Carousel_Items[1].style.backgroundSize = `108%`;
        Slide_Count = 1;
        var Carousel_Refresh = setTimeout(() => {
          Carousel_Slider.style.transition = `none`;
          Carousel_Slider.style.transform = `translateX(-100vh)`;
          clearTimeout(Carousel_Refresh);
        }, 1300);
      }
    }, 5000);
  }
}

// sec3 - Turburlence Displacement And text

const KV_Tag = document.querySelectorAll("#clip_hover span"); // **Key Visual

const KV_Des = document.querySelectorAll("#Sec3_des_box p");
const KV_Tag_Pointer = document.querySelector("#clip_hover #pointer");
const KV_Tag_Circle = document.querySelector("#Overlay_side #Active_Circle");

for (let index = 0; index < KV_Tag.length; index++) {
  const KV_Tag_Index = KV_Tag[index];
  const KV_Des_Index = KV_Des[index];

  KV_Tag_Index.addEventListener("mouseenter", (e) => {
    //
    KV_Tag_Pointer.style.marginBottom = `${7.5 - 1.5 * index}rem`;
    KV_Tag_Circle.style.marginBottom = `${7.5 - 1.5 * index}rem`;

    KV_Des_Index.style.transform = `translateY(0)`;
    KV_Des_Index.style.opacity = `100%`;

    if (index !== 1) {
      KV_Des[1].style.transform = `translateY(5rem)`;
      KV_Des[1].style.opacity = `0%`;
    }
  });

  KV_Tag_Index.addEventListener("mouseleave", (e) => {
    //
    KV_Tag_Pointer.style = ``;
    KV_Tag_Circle.style = ``;

    KV_Des_Index.style.transform = ``;
    KV_Des_Index.style.opacity = ``;

    KV_Des[1].style = ``;
  });
  //
  if (index == KV_Tag.length - 1) {
    break;
  }
}

//
//
function Report() {
  //
}
