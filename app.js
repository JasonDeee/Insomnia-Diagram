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

//
//
function Report() {
  //
}
