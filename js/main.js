const Scroll1a = () => {
  const navbar = document.querySelector(".c2");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 700 && scrollPosition < 2800) {
    navbar.classList.add("c2" + "-active");
  } else {
    navbar.classList.remove("c2" + "-active");
  }
};

window.addEventListener("scroll", () => Scroll1a());
function submitTwo() {
  const sub3 = document.getElementById("contact-form");
  const sub4 = document.getElementById("submit2");
  if (sub4.style.display == "none") {
    sub3.style.display = "none";
    sub4.style.display = "block";
  }
}

function sub0() {
  const x = document.getElementById("sub0");
  const y = document.getElementById("register-form");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  }
}

function panel1() {
  const tmp1 = document.getElementById("v-pills-home");
  const tmp2 = document.getElementById("v-pills-profile");
  const tmp3 = document.getElementById("v-pills-messages");
  const tmp4 = document.getElementById("v-pills-home-tab");
  const tmp5 = document.getElementById("v-pills-profile-tab");
  const tmp6 = document.getElementById("v-pills-messages-tab");
  if (tmp1.style.display == "none") {
    tmp1.style.display = "block";
    tmp2.style.display = "none";
    tmp3.style.display = "none";
    tmp4.style.backgroundColor = "#fff";
    tmp5.style.backgroundColor = "transparent";
    tmp6.style.backgroundColor = "transparent";
  }
}

function panel2() {
  const tmp1 = document.getElementById("v-pills-home");
  const tmp2 = document.getElementById("v-pills-profile");
  const tmp3 = document.getElementById("v-pills-messages");
  const tmp4 = document.getElementById("v-pills-home-tab");
  const tmp5 = document.getElementById("v-pills-profile-tab");
  const tmp6 = document.getElementById("v-pills-messages-tab");
  if (tmp2.style.display == "none") {
    tmp2.style.display = "block";
    tmp5.style.backgroundColor = "#fff";
    tmp1.style.display = "none";
    tmp3.style.display = "none";
    tmp4.style.backgroundColor = "transparent";
    tmp6.style.backgroundColor = "transparent";
  }
}

function panel3() {
  const tmp1 = document.getElementById("v-pills-home");
  const tmp2 = document.getElementById("v-pills-profile");
  const tmp3 = document.getElementById("v-pills-messages");
  const tmp4 = document.getElementById("v-pills-home-tab");
  const tmp5 = document.getElementById("v-pills-profile-tab");
  const tmp6 = document.getElementById("v-pills-messages-tab");
  if (tmp3.style.display == "none") {
    tmp3.style.display = "block";
    tmp2.style.display = "none";
    tmp1.style.display = "none";
    tmp6.style.backgroundColor = "#fff";
    tmp5.style.backgroundColor = "transparent";
    tmp4.style.backgroundColor = "transparent";
  }
}

function nav() {
  const nav = document.getElementById("navclick");
  const con = document.getElementById("connav");
  if (nav.style.height == "0px") {
    nav.style.transition = " all 0.1s ease-in";
    nav.style.display = "block";
    nav.style.height = "280px";
    con.style.transitionDelay = "0.3s";
    con.style.opacity = "1";
    con.style.display = "block";
    nav.style.transition = " all 0.3s ease-in";
  } else {
    nav.style.height = "0px";
    con.style.transitionDelay = "0s";
    con.style.transitionDuration = "0.1s";
    con.style.opacity = "0";
  }
}

function submmitTwo() {
  const sub2 = document.getElementById("submit2");
  const sub1 = document.getElementById("contact-form");
  sub2.style.display = "block";
  sub1.style.display = "none";
}

function handleClickHeadingOne() {
  const cac1 = document.getElementById("cac1");
  const card0 = document.getElementById("card0");
  const card1 = document.getElementById("cardtwo");
  const card2 = document.getElementById("cardthree");
  const tmp = document.getElementById("collapseOne");
  const tmp1 = document.getElementById("collapseTwo");
  const tmp2 = document.getElementById("collapseThree");
  // tmp.style.display = "block";
  if (tmp.style.display == "none") {
    card0.style.height = "105px";
    tmp.style.display = "block";
    card0.style.display = "block";
    card0.style.transition = " all 0.3s ease-in ";
    tmp1.style.display = "none";
    tmp2.style.display = "none";
    card1.style.height = "0px";
    card2.style.height = "0px";
  } else {
    tmp.style.display = "none";
    card0.style.height = "0px";
  }
}

function handleClickHeadingTwo() {
  const card = document.getElementById("card0");
  const card1 = document.getElementById("cardtwo");
  const card2 = document.getElementById("cardthree");
  const tmp3 = document.getElementById("collapseOne");
  const tmp4 = document.getElementById("collapseTwo");
  const tmp5 = document.getElementById("collapseThree");
  // tmp.style.display = "block";
  if (tmp4.style.display == "none") {
    card1.style.height = "105px";
    card1.style.display = "block";
    card1.style.transition = " all 0.3s ease-in ";
    tmp4.style.display = "block";
    tmp3.style.display = "none";
    tmp5.style.display = "none";
    card.style.height = "0px";
    card2.style.height = "0px";
  } else {
    tmp4.style.display = "none";
    card1.style.height = "0px";
  }
}

function handleClickHeadingThree() {
  const card = document.getElementById("card0");
  const card1 = document.getElementById("cardtwo");
  const card2 = document.getElementById("cardthree");
  const tmp = document.getElementById("collapseOne");
  const tmp1 = document.getElementById("collapseTwo");
  const tmp2 = document.getElementById("collapseThree");
  // tmp.style.display = "block";
  if (tmp2.style.display == "none") {
    card2.style.height = "105px";
    card.style.display = "block";
    card2.style.transition = " all 0.3s ease-in ";
    tmp2.style.display = "block";
    tmp.style.display = "none";
    tmp1.style.display = "none";
    card.style.height = "0px";
    card1.style.height = "0px";
  } else {
    tmp2.style.display = "none";
    card2.style.height = "0px";
  }
}
// home scroll


const Scroll2a = () => {
  const navbar = document.querySelector(".c3");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 2800 && scrollPosition < 3600) {
    navbar.classList.add("c3" + "-active");
  } else {
    navbar.classList.remove("c3" + "-active");
  }
};

window.addEventListener("scroll", () => Scroll2a());


const Scroll3a = () => {
  const navbar = document.querySelector(".c4");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 3600 && scrollPosition < 4600) {
    navbar.classList.add("c4" + "-active");
  } else {
    navbar.classList.remove("c4" + "-active");
  }
};

window.addEventListener("scroll", () => Scroll3a());



const Scroll4a = () => {
  const navbar = document.querySelector(".c5");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 4600 && scrollPosition < 5700) {
    navbar.classList.add("c5" + "-active");
  } else {
    navbar.classList.remove("c5" + "-active");
  }
};

window.addEventListener("scroll", () => Scroll4a());


const Scroll5a = () => {
  const navbar = document.querySelector(".c6");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 5700 && scrollPosition < 7300) {
    navbar.classList.add("c6" + "-active");
  } else {
    navbar.classList.remove("c6" + "-active");
  }
};

window.addEventListener("scroll", () => Scroll5a());


const Scroll6a = () => {
  const navbar = document.querySelector(".c7");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 7300 && scrollPosition < 8300) {
    navbar.classList.add("c7" + "-active");
  } else {
    navbar.classList.remove("c7" + "-active");
  }
};

window.addEventListener("scroll", () => Scroll6a());


// HANDLESCROLL FOR NAVBAR//`
const handleScroll1 = (type, offset) => {
  const navbar = document.querySelector(".navbar");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > offset) {
    navbar.classList.add(type + "-active");
  } else {
    navbar.classList.remove(type + "-active");
  }
};

let offsetNav = 0;
window.innerWidth >= 1024 ? (offsetNav = 500) : 800;
window.addEventListener("scroll", () => handleScroll1("nav", offsetNav));

const Scroll1 = () => {
  const c1 = document.querySelector(".c1");
  const c2 = document.querySelector(".c2");
  const c3 = document.querySelector(".c3");
  const c4 = document.querySelector(".c4");
  const c5 = document.querySelector(".c5");
  const c6 = document.querySelector(".c6");
  const c7 = document.querySelector(".c7");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 700 && scrollPosition < 2800) {
    c2.classList.add("c2"+ "-active");
    c3.classList.remove("c3"+ "-active");
    c4.classList.remove("c4"+ "-active");
    c5.classList.remove("c5"+ "-active");
    c6.classList.remove("c6"+ "-active");
    c7.classList.remove("c7"+ "-active");
  } else if (scrollPosition > 2800 && scrollPosition < 3600) {
    c3.classList.add("c2"+ "-active");
    c2.classList.remove("c3"+ "-active");
    c4.classList.remove("c4"+ "-active");
    c5.classList.remove("c5"+ "-active");
    c6.classList.remove("c6"+ "-active");
    c7.classList.remove("c7"+ "-active");
  } else if (scrollPosition > 3600 && scrollPosition < 4600) {
    c4.classList.add("c2"+ "-active");
    c3.classList.remove("c3"+ "-active");
    c2.classList.remove("c4"+ "-active");
    c5.classList.remove("c5"+ "-active");
    c6.classList.remove("c6"+ "-active");
    c7.classList.remove("c7"+ "-active");
  } else if (scrollPosition > 4600 && scrollPosition < 5700) {
    c5.classList.add("c2"+ "-active");
    c3.classList.remove("c3"+ "-active");
    c4.classList.remove("c4"+ "-active");
    c2.classList.remove("c5"+ "-active");
    c6.classList.remove("c6"+ "-active");
    c7.classList.remove("c7"+ "-active");
  } else if (scrollPosition > 5700 && scrollPosition < 7300) {
    c6.classList.add("c2"+ "-active");
    c3.classList.remove("c3"+ "-active");
    c4.classList.remove("c4"+ "-active");
    c5.classList.remove("c5"+ "-active");
    c2.classList.remove("c6"+ "-active");
    c7.classList.remove("c7"+ "-active");
  } else if (scrollPosition > 7300 && scrollPosition < 8300) {
    c7.classList.add("c2"+ "-active");
    c3.classList.remove("c3"+ "-active");
    c4.classList.remove("c4"+ "-active");
    c5.classList.remove("c5"+ "-active");
    c6.classList.remove("c6"+ "-active");
    c2.classList.remove("c7"+ "-active");
  }
};
window.addEventListener("scroll", () => Scroll1());
// //HANDLESCROLL FOR FORM
// BUG neu ko scroll thi ko chay


const auto = () => {
  const form = document.querySelector(".wow");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition == 0) {
    form.classList.add("form" + "-active");
  }
};
window.addEventListener("load", () => auto());

const handleScroll2 = (type, offset) => {
  const form = document.querySelector(".wow");
  const scrollPosition = window.pageYOffset;
  if (
    (scrollPosition >= 0 && scrollPosition <= offset + 200) ||
    scrollPosition == 0
  ) {
    form.classList.add(type + "-active");
  }
  //  else {
  // //  form.classList.remove(type + "-active");
  // form.classList.remove(type + "-active");
  // }
};
let x1 = 0;
window.innerWidth >= 1024 ? (x1 = 500) : 700;
window.addEventListener("scroll", () => handleScroll2("form", x1));

// IMG SCROLL
const handleScroll3 = (type, offset) => {
  const img = document.querySelector(".imgscroll");
  const scrollPosition = window.pageYOffset;
  console.log("check", scrollPosition);
  if (scrollPosition >= offset - 300 && scrollPosition <= offset + 200) {
    img.classList.add(type + "-active");
  }
};

window.addEventListener("scroll", () => handleScroll3("img", 1480));

// 2
const handleScroll4 = (type, offset) => {
  const img1 = document.querySelector(".fadeIn1");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 400 && scrollPosition <= offset + 300) {
    img1.classList.add(type + "-active");
  }
};

window.addEventListener("scroll", () => handleScroll4("fadeIn", 3900));

// featurebox
const handleScroll51 = (type, offset) => {
  const box1 = document.querySelector(".featurebox1");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 300) {
    box1.classList.add(type + "-active");
  }
};

window.addEventListener("scroll", () => handleScroll51("fadeIn", 6100));

const handleScroll52 = (type, offset) => {
  const box2 = document.querySelector(".featurebox2");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 300) {
    box2.classList.add(type + "-active");
  }
};
window.addEventListener("scroll", () => handleScroll52("fadeIn", 6100));

const handleScroll53 = (type, offset) => {
  const box3 = document.querySelector(".featurebox3");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 300) {
    box3.classList.add(type + "-active");
  }
};
window.addEventListener("scroll", () => handleScroll53("fadeIn", 6100));

const handleScroll54 = (type, offset) => {
  const box4 = document.querySelector(".featurebox4");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 300) {
    box4.classList.add(type + "-active");
  }
};
window.addEventListener("scroll", () => handleScroll54("fadeIn", 6100));

const handleScroll55 = (type, offset) => {
  const box5 = document.querySelector(".featurebox5");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 300) {
    box5.classList.add(type + "-active");
  }
};
window.addEventListener("scroll", () => handleScroll55("fadeIn", 6100));

const handleScroll56 = (type, offset) => {
  const box6 = document.querySelector(".featurebox6");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 300) {
    box6.classList.add(type + "-active");
  }
};
window.addEventListener("scroll", () => handleScroll56("fadeIn", 6100));

//
const handleScroll61 = (type, offset) => {
  const white = document.querySelector(".whitebox");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 200) {
    white.classList.add(type + "-active");
  }
};

window.addEventListener("scroll", () => handleScroll61("form", 6900));

const handleScroll62 = (type, offset) => {
  const red = document.querySelector(".redbox");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 200 && scrollPosition <= offset + 200) {
    red.classList.add(type + "-active");
  }
};

window.addEventListener("scroll", () => handleScroll62("form", 6900));

const handleScroll7 = (type, offset) => {
  const endform = document.querySelector(".endform");
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= offset - 400 && scrollPosition <= offset + 200) {
    endform.classList.add(type + "-active");
  }
};

window.addEventListener("scroll", () => handleScroll7("form", 8300));

// img click
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const counter = document.getElementById("counter");

function openLightbox(index) {
  currentSlide = index;
  showSlide(currentSlide);
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  updateCounter();
}

function changeSlide(n) {
  currentSlide += n;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  showSlide(currentSlide);
}

function updateCounter() {
  counter.textContent = `${currentSlide + 1} of ${totalSlides}`;
}

document.getElementById("close").addEventListener("click", closeLightbox);
