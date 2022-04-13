$(".image-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: `<button type='button' class='slick-prev pull-left slick-arow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right slick-arow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 2,
      },
    },

    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(document).ready(function () {
  $("#icon").click(function () {
    $(".main-menu").toggleClass("show");
    $("body").toggleClass("no-strol");
  });
});
