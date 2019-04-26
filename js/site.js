$(document).ready(function() {
  wow = new WOW({
    animateClass: "animated",
    offset: 100
  });
  wow.init();

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    var navOffset = $("#navbar").height();
    console.log(navOffset);
    $("a.page-scroll").bind("click", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - navOffset
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $("body").scrollspy({
      target: ".navbar-fixed-top",
      offset: navOffset + 5
    });
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
  });

  $(".team-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '125px'
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
