//  Carousel

$(document).ready(function () {
  $(".team-items__corousel").slick({
    dots: true,
    arrows: false,
  });
  // BURGER
  $(document).ready(function () {
    $(".header-burger").click(function (event) {
      $(".header-burger,.header-menu").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });
});

$(document).ready(function () {
  $(".header-link").click(function (event) {
    $(".header-burger, .header-menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

// SMOTH SCROLL

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
