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
