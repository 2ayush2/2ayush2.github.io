(function ($) {
  "use strict";
  $(window).on("load", function () {
    $(".loader").fadeOut(1000);
    var wow = new WOW({ offset: 150, mobile: false });
    wow.init();
  });
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1000,
    outDuration: 700,
    linkElement: "a.project-box",
    loading: true,
    loadingParentElement: "body",
    loadingClass: "spinner",
    loadingInner:
      '<div class="double-bounce1"></div><div class="double-bounce2"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    },
  });
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-with-zoom",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".navbar-toggle").on("click", function () {
    $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
  });
  $(".close-menu, .click-capture, .menu-list li a").on("click", function () {
    $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
    $(".menu-list ul").slideUp(300);
  });
  $(".menu-list li a").on("click", function () {
    $(".menu-list li").removeClass("active");
    $(this).closest("li").addClass("active");
  });
  if ($(".owl-carousel").length > 0) {
    $(".review-carousel").owlCarousel({
      responsive: { 0: { items: 1 }, 720: { items: 1 }, 1280: { items: 1 } },
      responsiveRefreshRate: 0,
      nav: false,
      navText: [],
      animateIn: "fadeIn",
      dots: true,
    });
  }
  if ($(".pagepiling").length > 0) {
    $(".pagepiling").pagepiling({
      scrollingSpeed: 280,
      loopBottom: true,
      anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7"],
      afterLoad: function (anchorLink, index) {
        if ($(".pp-section.active").scrollTop() > 0) {
          $(".navbar").removeClass("navbar-white");
        } else {
          $(".navbar").addClass("navbar-white");
        }
      },
    });
  }
  $("#pp-nav")
    .remove()
    .appendTo(".animsition")
    .addClass("white right-boxed d-none d-sm-block");
  $(".pp-nav-up").on("click", function () {
    $.fn.pagepiling.moveSectionUp();
  });
  $(".pp-nav-down").on("click", function () {
    $.fn.pagepiling.moveSectionDown();
  });
  $(".project-box").on("mouseover", function () {
    var index = $(".project-box").index(this);
    $(".bg-changer .section-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });
  if ($(".js-form").length) {
    $(".js-form").each(function () {
      $(this).validate({
        errorClass: "error",
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(form).serialize(),
            success: function () {
              $(".form-group-message").show();
              $("#error").hide();
              $("#success").show();
            },
            error: function () {
              $(".form-group-message").show();
              $("#success").hide();
              $("#error").show();
            },
          });
        },
      });
    });
  }
})(jQuery);
var mixir = mixitup(".portfolio");
var typed = new Typed(".auto-type", {
  strings: ["WEB DEVELOPER", "UI UX DESIGNER", "GRAPHIC DESIGNER"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq("#slick1").slick({
    rows: 1,
    dots: false,

    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,

    autoplay: true,
    autoplaySpeed: 100000,
    dots: true,
    prevArrow:
      '<button class="	fa fa-arrow-left slider-arrow arrow-left"></button>',
    nextArrow:
      '<button class="	fa fa-arrow-right slider-arrow arrow-right"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

jQuery(document).ready(function ($) {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#29d882",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
      },
      "tags"
    )
  ) {
    // something went wrong, hide the canvas container
    $("#myCanvasContainer").hide();
  }
  // your other jQuery stuff here...
});

var bounceElement = document.querySelectorAll(".big");
bounceElement.forEach((span) => {
  span.addEventListener("mouseover", function () {
    this.classList.add("bounce");
    setTimeout(
      function () {
        this.classList.remove("bounce");
      }.bind(this),
      1000
    );
  });
});
