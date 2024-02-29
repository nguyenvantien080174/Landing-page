//code transition scroll
const navbar = document.querySelector(".navbar");

function handleScroll(type, offset) {
  const scrollPosition = window.pageYOffset;
  alert("Hello world!");

  if (scrollPosition > offset) {
    navbar.classList.add(type + "-active");
  }
}

function handleClick() {
  navbar.classList.add("click-active");
}

window.addEventListener("scroll", handleScroll("nav", 600));

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 450) {
    $(".navbar-fixed-top").addClass("opaque");
  } else {
    $(".navbar-fixed-top").removeClass("opaque");
  }
});

