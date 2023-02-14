//   all ------------------
function initGrasp() {
    "use strict";
    $(window).on("load", function () {
      firstLoad();
    });
    function firstLoad() {
      TweenMax.to($(".spinner"), 1.0, {
        force3D: true,
        y: "-150px",
        opacity: 0,
        ease: Expo.easeInOut,
        onComplete: function () {
          TweenMax.to($(".loader-wrap"), 0.8, {
            force3D: true,
            bottom: "100%",
            ease: Expo.easeInOut,
            onComplete: function () {},
          });
          initpageloadAnimation();
        },
      });
      var chdpt = $(".ch").data("pagetitle");
      $(".page-subtitle span").text(chdpt);
    }
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
      if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    //   tabs------------------
    $(".tabs-menu").lavaLamp({
      fx: "easeInOutQuint",
      speed: 600,
      returnDelay: 300,
      autoReturn: true,
    });
    $(".tabs-menu a").on("click", function (a) {
      var tbamDat = $(this).data("tabbg");
      TweenMax.to($(".serv-bg-dec"), 0.6, {
        force3D: true,
        right: "0",
        ease: Expo.easeInOut,
        onComplete: function () {
          $(".serv-bg").css("background-image", "url(" + tbamDat + ")");
          TweenMax.to($(".serv-bg-dec"), 0.6, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
            onComplete: function () {
              TweenMax.to($(".serv-bg-dec"), 0.1, {
                force3D: true,
                right: "100%",
                left: 0,
                ease: Power2.easeOut,
              });
            },
          });
        },
      });
      a.preventDefault();
      var b = $(this).attr("href");
      $(".tab-content").not(b).css("display", "none");
      $(b).fadeIn();
    });
    csselem();
    $(".nav-button-wrap").on("click", function () {
      $(".main-menu").toggleClass("vismobmenu");
    });
    $(".search-button").on("click", function () {
      $(".search-input").slideToggle(700);
    });
    function mobMenuInit() {
      var ww = $(window).width();
      if (ww < 1064) {
        $(".menusb").remove();
        $(".main-menu").removeClass("nav-holder");
        $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
        $(".menusb").menu();
      } else {
        $(".menusb").remove();
        $(".main-menu").addClass("nav-holder");
      }
    }
    mobMenuInit();
    //   sliders ------------------
    function setUpCarouselSlider() {
      $(".fw-carousel .swiper-wrapper").addClass("no-horizontal-slider");
      if ($(".fw-carousel").length > 0) {
        if ($(window).width() >= 640 && j2 == undefined) {
          var totalSlides2 = $(".fw-carousel .swiper-slide").length;
          var mouseContr = $(".fw-carousel").data("mousecontrol");
          var j2 = new Swiper(".fw-carousel .swiper-container", {
            preloadImages: false,
            loop: false,
            freeMode: true,
            slidesPerView: "auto",
            spaceBetween: 10,
            grabCursor: true,
            mousewheel: mouseContr,
            speed: 1400,
            direction: "horizontal",
            scrollbar: {
              el: ".hs_init",
              draggable: true,
            },
            effect: "slide",
            pagination: {
              el: ".fw-carousel-counter",
              type: "fraction",
              renderFraction: function (currentClass) {
                return '<span class="' + currentClass + '"></span>' + "" + '<span class="j2total">' + totalSlides2 + "</span>";
              },
            },
            navigation: {
              nextEl: ".fw-carousel-button-next",
              prevEl: ".fw-carousel-button-prev",
            },
            on: {
              resize: function () {
                if ($(window).width() < 640) {
                  j2.update();
                }
              },
            },
          });
          $(".fw-carousel.thumb-contr .swiper-slide img").each(function () {
            var ccasdc = $(this).attr("src");
            $("<div class='thumb-img'><img src='" + ccasdc + "'></div>").appendTo(".thumbnail-wrap");
          });
          $(".thumb-img").on("click", function () {
            j2.slideTo($(this).index(), 500);
            hideThumbnails();
          });
        }
  
        if ($(window).width() < 640 && j2 !== undefined) {
          j2.destroy();
          j2 = undefined;
          $(".fw-carousel .swiper-wrapper").removeAttr("style").addClass("no-horizontal-slider");
          $(".swiper-slide").removeAttr("style");
        }
      }
    }
    setUpCarouselSlider();
  
    if ($(".fs-slider2").length > 0) {
      $(".fs-slider2.thumb-contr .swiper-slide .bg").each(function () {
        var ccasdc3 = $(this).attr("data-bg");
        $("<div class='thumb-img'><img src='" + ccasdc3 + "'></div>").appendTo(".thumbnail-wrap");
      });
      $(".thumb-img").on("click", function () {
        fsSlider2.slideTo($(this).index() + 1, 500);
        hideThumbnails();
      });
      var mouseContr2 = $(".fs-slider2").data("mousecontrol2");
      var totalSlides2 = $(".fs-slider2 .swiper-slide").length;
      var fsSlider2 = new Swiper(".fs-slider2 .swiper-container", {
        preloadImages: false,
        loop: true,
        grabCursor: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "slide",
        mousewheel: mouseContr2,
        pagination: {
          el: ".hero-slider-wrap_pagination",
          clickable: true,
        },
        keyboard: {
          enabled: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".ss-slider-cont-next",
          prevEl: ".ss-slider-cont-prev",
        },
      });
    }
  
    function showfs() {
      $("#wrapper").addClass("fs-mode-active");
  
      TweenMax.to($(".bottom-panel"), 0.3, {
        force3D: true,
        bottom: "-100px",
        ease: Power2.easeOut,
      });
      TweenMax.to($("header.main-header"), 0.3, {
        force3D: true,
        top: "-100px",
        ease: Power2.easeOut,
        onComplete: function () {
          TweenMax.to($(".close-fs"), 0.8, {
            force3D: true,
            bottom: 0,
          });
        },
      });
    }
    function hidefs() {
      $("#wrapper").removeClass("fs-mode-active");
      TweenMax.to($(".bottom-panel"), 0.3, {
        force3D: true,
        bottom: "0",
        ease: Power2.easeOut,
      });
      TweenMax.to($("header.main-header"), 0.3, {
        force3D: true,
        top: "0",
        ease: Power2.easeOut,
      });
  
      TweenMax.to($(".close-fs"), 0.8, {
        force3D: true,
        bottom: "-100px",
      });
    }
    $(".fs-mode").on("click", function () {
      showfs();
      return false;
    });
    $(".close-fs").on("click", function () {
      hidefs();
      return false;
    });
    var thumbcont = $(".thumbnail-container"),
      thumbItrm = $(".thumb-img"),
      stbtn = $(".show_thumbnails");
  
    function showThumbnails() {
      TweenMax.to(thumbcont, 1.0, {
        force3D: true,
        right: 0,
        ease: Expo.easeInOut,
        onComplete: function () {
          thumbItrm.addClass("visthumbnails");
          setTimeout(function () {
            thumbcont.addClass("visthumbnails");
          }, 200);
        },
      });
      stbtn.removeClass("unvisthum");
    }
    function hideThumbnails() {
      thumbcont.removeClass("visthumbnails");
      thumbItrm.removeClass("visthumbnails");
      TweenMax.to(thumbcont, 1.0, {
        force3D: true,
        delay: 0.2,
        left: "100%",
        ease: Expo.easeInOut,
        onComplete: function () {
          TweenMax.to(thumbcont, 0.1, {
            force3D: true,
            left: 0,
            right: "100%",
            ease: Expo.easeInOut,
          });
        },
      });
      stbtn.addClass("unvisthum");
    }
    stbtn.on("click", function () {
      if ($(this).hasClass("unvisthum")) showThumbnails();
      else hideThumbnails();
    });
    function showDetails() {
      $(".det-overlay").fadeIn(400);
      TweenMax.to($(".hid-det-anim"), 0.8, {
        force3D: true,
        left: "150px",
        ease: Power2.easeOut,
        onComplete: function () {
          $(".det-anim").each(function (ab) {
            var bp3 = $(this);
            setTimeout(function () {
              TweenMax.to(bp3, 0.6, {
                force3D: true,
                x: "0",
                opacity: "1",
                ease: Power2.easeOut,
              });
            }, 110 * ab);
          });
        },
      });
      $(".shibtn").removeClass("unvisthum2");
      hideThumbnails();
      $(".fw-carousel-wrap").addClass("viscale");
    }
    function hideDetails() {
      $(".det-overlay").fadeOut(400);
      TweenMax.to($(".hid-det-anim"), 0.8, {
        force3D: true,
        left: "-100%",
        ease: Power2.easeOut,
        onComplete: function () {
          TweenMax.to($(".det-anim"), 0.1, {
            force3D: true,
            x: "-50",
            opacity: "0",
            ease: Power2.easeOut,
          });
        },
      });
      $(".shibtn").addClass("unvisthum2");
      $(".fw-carousel-wrap").removeClass("viscale");
    }
    $(".shibtn").on("click", function () {
      if ($(this).hasClass("unvisthum2")) showDetails();
      else hideDetails();
    });
  
    $(".act-closedet").on("click", function () {
      hideDetails();
    });
    $(".initscroll").niceScroll({
      cursorwidth: "0",
      cursorborder: "none",
      cursorborderradius: "0px",
      scrollspeed: 10,
      mousescrollstep: 40,
      hwacceleration: true,
    });
  
    if ($(".testilider").length > 0) {
      var j2 = new Swiper(".testilider .swiper-container", {
        preloadImages: false,
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        mousewheel: false,
        navigation: {
          nextEl: ".ss-slider-next",
          prevEl: ".ss-slider-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
        },
      });
    }
  
    if ($(".single-slider").length > 0) {
      var j2 = new Swiper(".single-slider .swiper-container", {
        preloadImages: false,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoHeight: true,
        grabCursor: false,
        mousewheel: false,
        pagination: {
          el: ".ss-slider-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".ss-slider-cont-next",
          prevEl: ".ss-slider-cont-prev",
        },
      });
    }
  
    if ($(".fs-slider").length > 0) {
      var mouseContr2 = $(".fs-slider").data("mousecontrol2");
      var j3 = new Swiper(".fs-slider .swiper-container", {
        preloadImages: false,
        loop: true,
        grabCursor: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "slide",
        mousewheel: mouseContr2,
        parallax: true,
        pagination: {
          el: ".hero-slider-wrap_pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".hero-slider-button-next",
          prevEl: ".hero-slider-button-prev",
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      });
      j3.on("slideChange", function () {
        var csli = j3.realIndex + 1,
          curnum = $("#current");
        TweenMax.to(curnum, 0.2, {
          force3D: true,
          y: -10,
          opacity: 0,
          ease: Power2.easeOut,
          onComplete: function () {
            TweenMax.to(curnum, 0.1, {
              force3D: true,
              y: 10,
            });
            curnum.html(csli);
          },
        });
        TweenMax.to(curnum, 0.2, {
          force3D: true,
          y: 0,
          delay: 0.3,
          opacity: 1,
          ease: Power2.easeOut,
        });
      });
      var totalSlides = j3.slides.length - 2;
      $("#total").html(totalSlides);
    }
  
    if ($(".multi-slideshow_fs").length > 0) {
      var mouseContr2 = $(".fs-slider").data("mousecontrol2");
      var ms1 = new Swiper(".multi-slideshow_fs .swiper-container", {
        preloadImages: false,
        loop: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        keyboard: {
          enabled: true,
        },
        // freeMode: true,
        // freeModeSticky: true,
        resizeReInit: true,
        resistanceRatio: 0.5,
        slidesPerView: 1,
        longSwipes: true,
        longSwipesRatio: 0.1,
        touchRatio: 3,
        mousewheel: true,
        followFinger: true,
        parallax: false,
        pagination: {
          el: ".hero-slider-wrap_pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".hero-slider-button-next",
          prevEl: ".hero-slider-button-prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
  
        // init: false,
      });
  
      kpsc();
      ms1.on("slideChangeTransitionStart", function () {
        eqwe();
      });
      ms1.on("slideChangeTransitionEnd", function () {
        kpsc();
      });
      setTimeout(function () {
        ms1.init();
      }, 2000);
    }
    function kpsc() {
      $(".slide-progress").css({
        width: "100%",
        transition: "width 3000ms",
      });
    }
    function eqwe() {
      $(".slide-progress").css({
        width: 0,
        transition: "width 0s",
      });
    }
    //   Isotope------------------
    function inithorizontalPortfolio() {
      if ($("#portfolio_horizontal_container").length) {
        var d = $("#portfolio_horizontal_container");
        d.imagesLoaded(function (a, b, e) {
          var f = {
            itemSelector: ".portfolio_item",
            layoutMode: "packery",
            packery: {
              isHorizontal: true,
              gutter: 0,
            },
            resizable: true,
            transformsEnabled: true,
            transitionDuration: "700ms",
          };
          var g = {
            itemSelector: ".portfolio_item",
            layoutMode: "packery",
            packery: {
              isHorizontal: false,
              gutter: 0,
            },
            resizable: true,
            transformsEnabled: true,
            transitionDuration: "700ms",
          };
          if ($(window).width() < 778) {
            d.isotope(g);
            d.isotope("layout");
            d.removeAttr("style");
            $(".horizontal-grid-wrap").getNiceScroll().remove();
          } else {
            d.isotope(f);
            d.isotope("layout");
            $(".horizontal-grid-wrap").niceScroll({
              cursorwidth: "2px",
              cursorborder: "none",
              cursorborderradius: "0px",
              touchbehavior: true,
              autohidemode: false,
              cursorcolor: "#292929",
              bouncescroll: false,
              scrollspeed: 120,
              mousescrollstep: 90,
              grabcursorenabled: true,
              horizrailenabled: true,
              preservenativescrolling: true,
              cursordragontouch: false,
              railpadding: {
                top: -10,
                right: 0,
                left: 0,
                bottom: 0,
              },
            });
          }
          $(".gallery-filters").on("click", "a", function (a) {
            a.preventDefault();
            var b = $(this).attr("data-filter");
            d.isotope({
              filter: b,
            });
            $(".gallery-filters a").removeClass("gallery-filter-active");
            $(this).addClass("gallery-filter-active");
          });
          d.isotope("on", "layoutComplete", function (a, b) {
            var b = a.length,
              numalb = $(".num-album");
            TweenMax.to(numalb, 0.2, {
              force3D: true,
              y: -10,
              opacity: 0,
              ease: Power2.easeOut,
              onComplete: function () {
                TweenMax.to(numalb, 0.1, {
                  force3D: true,
                  y: 10,
                });
                numalb.html(b);
              },
            });
            TweenMax.to(numalb, 0.2, {
              force3D: true,
              y: 0,
              delay: 0.3,
              opacity: 1,
              ease: Power2.easeOut,
            });
          });
          var j = $(".portfolio_item").length;
          $(".all-album , .num-album").html(j);
        });
      }
    }
    inithorizontalPortfolio();
    $(".filter-title").on("click", function () {
      if ($(window).width() < 1064) {
        $(".gallery-filters").slideToggle(100);
      }
    });
    function n() {
      if ($(".gallery-items").length) {
        var $grid = $(".gallery-items").isotope({
          singleMode: true,
          columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
          itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
          resizable: true,
          transformsEnabled: true,
          transitionDuration: "700ms",
        });
        $grid.imagesLoaded(function () {
          $grid.isotope("layout");
        });
        $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
          b.preventDefault();
          var c = $(this).attr("data-filter");
          $grid.isotope({
            filter: c,
          });
          $(".gallery-filters a").removeClass("gallery-filter-active");
          $(this).addClass("gallery-filter-active");
        });
        $grid.isotope("on", "layoutComplete", function (a, b) {
          var b = a.length,
            numalb2 = $(".num-album");
        });
        var b = $(".gallery-item").length;
        $(".all-album , .num-album").html(b);
      }
    }
    n();
    //   lightGallery------------------
    $(".image-popup").lightGallery({
      selector: "this",
      cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
      download: false,
      counter: false,
    });
    var o = $(".lightgallery"),
      p = o.data("looped");
    o.lightGallery({
      selector: ".lightgallery a.popup-image",
      mode: "lg-fade",
      cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
      download: false,
      loop: false,
      counter: false,
      // zoom: false,
      // controls: false,
      enableDrag: false,
      actualSize: false,
    });
    //   appear------------------
    $(".stats").appear(function () {
      $(".num").countTo();
    });
    $(".skillbar-box").appear(function () {
      $(this)
        .find("div.skillbar-bg")
        .each(function () {
          $(this)
            .find(".custom-skillbar")
            .delay(600)
            .animate(
              {
                width: $(this).attr("data-percent"),
              },
              1500
            );
        });
    });
    // Share   ------------------
    $(".share-container").share({
      networks: ["facebook", "pinterest", "twitter", "linkedin"],
    });
    var shrcn = $(".share-container"),
      swra = $(".share-wrapper"),
      shic = $(".share-icon"),
      ssbtn = $(".showshare");
    function showShare() {
      ssbtn.addClass("uncl-share");
      shrcn.removeClass("isShare");
      TweenMax.to(swra, 0.6, {
        force3D: false,
        right: "0",
        ease: Power2.easeOut,
        onComplete: function () {
          shic.each(function (a) {
            var boi = $(this);
            setTimeout(function () {
              TweenMax.to(boi, 1.0, {
                force3D: false,
                opacity: "1",
              });
            }, 130 * a);
          });
        },
      });
    }
    function hideShare() {
      ssbtn.removeClass("uncl-share");
      shrcn.addClass("isShare");
      TweenMax.to($(".share-icon"), 0.2, {
        force3D: false,
        opacity: "0",
  
        onComplete: function () {
          TweenMax.to(swra, 0.6, {
            force3D: false,
            delay: 0.2,
            right: "-400px",
            ease: Power2.easeOut,
          });
        },
      });
    }
    ssbtn.on("click", function () {
      if ($(".share-container").hasClass("isShare")) showShare();
      else hideShare();
    });
    //   Contact form------------------
    $("#contactform").submit(function () {
      var a = $(this).attr("action");
      $("#message").slideUp(750, function () {
        $("#message").hide();
        $("#submit").attr("disabled", "disabled");
        $.post(
          a,
          {
            name: $("#name").val(),
            email: $("#email").val(),
  
            comments: $("#comments").val(),
          },
          function (a) {
            document.getElementById("message").innerHTML = a;
            $("#message").slideDown("slow");
            $("#submit").removeAttr("disabled");
            if (null != a.match("success")) $("#contactform").slideDown("slow");
          }
        );
      });
      return false;
    });
    $("#contactform input, #contactform textarea").keyup(function () {
      $("#message").slideUp(1500);
    });
  
    //   Video------------------
    var v = $(".background-youtube").data("vid");
    var f = $(".background-youtube").data("mv");
    $(".background-youtube").YTPlayer({
      fitToBackground: true,
      videoId: v,
      pauseOnScroll: true,
      mute: f,
      callback: function () {
        var a = $(".background-video").data("ytPlayer").player;
      },
    });
    var w = $(".background-vimeo").data("vim");
    $(".background-vimeo").append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
    $(".video-holder").height($(".media-container").height());
    if ($(window).width() > 1024) {
      if ($(".video-holder").size() > 0)
        if (($(".media-container").height() / 9) * 16 > $(".media-container").width()) {
          $(".background-vimeo iframe ")
            .height($(".media-container").height())
            .width(($(".media-container").height() / 9) * 16);
          $(".background-vimeo iframe ").css({
            "margin-left": (-1 * $("iframe").width()) / 2 + "px",
            top: "-75px",
            "margin-top": "0px",
          });
        } else {
          $(".background-vimeo iframe ")
            .width($(window).width())
            .height(($(window).width() / 16) * 9);
          $(".background-vimeo iframe ").css({
            "margin-left": (-1 * $("iframe").width()) / 2 + "px",
            "margin-top": (-1 * $("iframe").height()) / 2 + "px",
            top: "50%",
          });
        }
    } else if ($(window).width() < 760) {
      $(".video-holder").height($(".media-container").height());
      $(".background-vimeo iframe ").height($(".media-container").height());
    } else {
      $(".video-holder").height($(".media-container").height());
      $(".background-vimeo iframe ").height($(".media-container").height());
    }
    $(".video-container").css("width", $(window).width() + "px");
    $(".video-container").css("height", (720 / 1280) * $(window).width()) + "px";
    if ($(".video-container").height() < $(window).height()) {
      $(".video-container").css("height", $(window).height() + "px");
      $(".video-container").css("width", (1280 / 720) * $(window).height()) + "px";
    }
    //   scroll to------------------
    $(".custom-scroll-link").on("click", function () {
      var a = $(".main-header").height();
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
        var b = $(this.hash);
        b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
        if (b.length) {
          $("html,body").animate(
            {
              scrollTop: b.offset().top - a,
            },
            {
              queue: false,
              duration: 1200,
              easing: "easeInOutExpo",
            }
          );
          return false;
        }
      }
    });
    $(".to-top").on("click", function (a) {
      a.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
    //  Css------------------
    function csselem() {
      $(".slideshow-container .slideshow-item").css({
        height: $(".slideshow-container").outerHeight(true),
      });
      $(".fs-slider-item").css({
        height: $(".fs-slider").outerHeight(true),
      });
      $(".fw-carousel .swiper-container").css({
        height: $(".fw-carousel").outerHeight(true),
      });
      $(".ms_item").css({
        height: $(".multi-slideshow_1").outerHeight(true),
      });
      $(".ms-item_fs").css({
        height: $(".multi-slideshow_fs").outerHeight(true),
      });
      $(".half-slider-img-item").css({
        height: $(".half-slider-img").outerHeight(true),
      });
      $(".horizontal-grid-wrap").css({
        height: $(".hor-content_padd").outerHeight(true) - 72 + "px",
      });
    }
  
    var $window = $(window);
    $window.on("scroll", function (a) {
      var a = $(document).height();
      var b = $(window).height();
      var c = $(window).scrollTop();
      var d = (c / (a - b)) * 100;
      $(".progress-bar").css({
        width: d + "%",
      });
      if ($(this).scrollTop() > 150) {
        $(".to-top").fadeIn(500);
        TweenMax.to($(".to-top-btn"), 0.5, {
          force3D: true,
          bottom: 0,
          ease: Power2.easeOut,
        });
      } else {
        TweenMax.to($(".to-top-btn"), 0.5, {
          force3D: true,
          bottom: "-90px",
          ease: Power2.easeOut,
        });
      }
    });
    //   css ------------------
    $(window).on("resize", function () {
      csselem();
      inithorizontalPortfolio();
      setUpCarouselSlider();
    });
    //  cursor------------------
    $("a , .btn ,   textarea,   input , .single-carousel-control_list li").on({
      mouseenter: function () {
        TweenMax.to(".element-item ", 0.4, {
          borderColor: "transparent",
          scale: 0.5,
          background: "rgba(0,0,0,0.2)",
          left: 0,
          top: 0,
        });
      },
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          borderColor: "#fff",
          scale: 1.0,
          background: "none",
        });
      },
    });
    $(".sb-button , .share-btn , .fs-mode , .fw_cb , .closedet_style , .single-carousel_arrow").on({
      mouseenter: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "45px 45px",
          borderWidth: "1px",
          scale: 1.8,
          left: 23,
          top: 23,
        });
      },
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "30px 30px",
          borderWidth: "2px",
          scale: 1.0,
          left: 0,
          top: 0,
        });
      },
    });
    $(".swiper-container , .horizontal-grid-wrap").on({
      mouseenter: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "35px 35px",
          borderWidth: "1px",
          borderColor: "#fff",
          scale: 1.8,
          left: 23,
          top: 23,
        });
        $(".element-item").addClass("swipericon");
      },
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "30px 30px",
          borderWidth: "2px",
          borderColor: "#fff",
          scale: 1.0,
          left: 0,
          top: 0,
        });
        $(".element-item").removeClass("swipericon");
      },
    });
    $(".swiper-container a.box-media-zoom , .horizontal-grid-wrap .thumb-info a , .horizontal-grid-wrap a.box-media-zoom , .fs-slider_align_title a , .swiper-link").on({
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "35px 35px",
          borderWidth: "1px",
          borderColor: "#fff",
          scale: 1.8,
          left: 23,
          top: 23,
        });
      },
    });
    $(".sb-overlay , .det-overlay ").on({
      mouseenter: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "35px 35px",
          borderWidth: "1px",
          borderColor: "#fff",
          scale: 1.8,
          left: 23,
          top: 23,
        });
        $(".element-item").addClass("closeicon");
      },
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          transformOrigin: "30px 30px",
          borderWidth: "2px",
          borderColor: "#fff",
          scale: 1.0,
          left: 0,
          top: 0,
        });
        $(".element-item").removeClass("closeicon");
      },
    });
    $(".gallery-item , .column-image").on({
      mouseenter: function () {
        TweenMax.to(".element-item ", 0.4, {
          borderColor: "rgba(255,255,255,0.7)",
        });
      },
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          borderColor: "#000",
        });
      },
    });
    $(".gallery-item   .box-media-zoom , .gallery-item .thumb-info").on({
      mouseleave: function () {
        TweenMax.to(".element-item ", 0.4, {
          borderColor: "rgba(255,255,255,0.7)",
        });
      },
    });
    $(".thumb-info a").on("click", function () {
      var a = $(this).attr("href");
      window.location.href = a;
      return false;
    });
    //  Map------------------
    if ($("#map-single").length > 0) {
      var latlog = $("#map-single").data("latlog"),
        popupTextit = $("#map-single").data("popuptext"),
        map = L.map("map-single").setView(latlog, 15);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',
        format: "png",
      }).addTo(map);
      var greenIcon = L.icon({
        iconUrl: "img/marker.png",
        iconSize: [40, 40],
        popupAnchor: [0, -26],
      });
      L.marker(latlog, {
        icon: greenIcon,
      })
        .addTo(map)
        .bindPopup(popupTextit)
        .openPopup();
    }
    $(".show_contact-form").on("click", function (e) {
      e.preventDefault();
      TweenMax.to($(".hidden-contact_form-wrap"), 0.9, {
        force3D: true,
  
        left: 0,
        ease: Power2.easeOut,
  
        onComplete: function () {
          $(".cnt-anim").each(function (ac2) {
            var bp = $(this);
            setTimeout(function () {
              TweenMax.to(bp, 0.6, {
                force3D: true,
                x: "0",
                opacity: "1",
                ease: Power2.easeOut,
              });
            }, 110 * ac2);
          });
        },
      });
    });
    $(".close-contact_form").on("click", function () {
      TweenMax.to($(".cnt-anim"), 0.2, {
        force3D: true,
        x: "-50px",
        opacity: "0",
        ease: Power2.easeOut,
      });
      TweenMax.to($(".hidden-contact_form-wrap"), 0.9, {
        force3D: true,
  
        left: "-100%",
        ease: Power2.easeOut,
      });
    });
  }
  function removideo() {
    var a = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
      },
    };
    trueMobile = a.any();
  
    if (trueMobile) $(".bgvid , .background-vimeo , .background-youtube-wrapper").remove();
  }
  var mouse = {
    x: 0,
    y: 0,
  };
  var pos = {
    x: 0,
    y: 0,
  };
  var ratio = 0.15;
  var active = false;
  var ball = document.querySelector(".element-item");
  TweenLite.set(ball, {
    xPercent: -50,
    yPercent: -50,
  });
  document.addEventListener("mousemove", mouseMove);
  function mouseMove(e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    mouse.x = e.pageX;
    mouse.y = e.pageY - scrollTop;
  }
  TweenMax.ticker.addEventListener("tick", updatePosition);
  function updatePosition() {
    if (!active) {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      TweenMax.set(ball, {
        x: pos.x,
        y: pos.y,
      });
    }
  }
  
  //  menu------------------
  $(".nav-holder-wrap").niceScroll({
    cursorwidth: "0px",
    cursorborder: "none",
    cursorborderradius: "0px",
    scrollspeed: 10,
    mousescrollstep: 40,
    hwacceleration: true,
  });
  // $(".nav-button-wrap").on("click", function () {
  //     $(".main-menu").toggleClass("vismobmenu");
  // });
  $("#menu").menu();
  $(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
  var nbw = $(".nav-button"),
    nhw = $(".nav-holder-wrap"),
    nho = $(".nav-overlay");
  function showMenu() {
    nho.fadeIn(500);
    TweenMax.to(nhw, 1.2, {
      force3D: false,
      left: "0",
      delay: 0.2,
      ease: Expo.easeInOut,
    });
    nhw.removeClass("but-hol");
    nbw.addClass("cmenu");
  }
  function hideMenu() {
    TweenMax.to(nhw, 1.2, {
      force3D: false,
      left: "-100%",
      ease: Expo.easeInOut,
    });
    nhw.addClass("but-hol");
    nbw.removeClass("cmenu");
    nho.fadeOut(500);
  }
  nbw.on("click", function () {
    if (nhw.hasClass("but-hol")) showMenu();
    else hideMenu();
  });
  nho.on("click", function () {
    hideMenu();
  });
  //  page animation------------------
  function initpageloadAnimation() {
    setTimeout(function () {
      TweenMax.to($(".bot-element , .sec-dec"), 1.2, {
        force3D: true,
        delay: 0.2,
        y: 0,
        opacity: "1",
        ease: Expo.easeInOut,
      });
      TweenMax.to($(".vi_anim"), 1.2, {
        force3D: true,
        delay: 0.1,
        x: 0,
        opacity: "1",
        ease: Expo.easeInOut,
      });
      TweenMax.to($(".main-footer"), 1.2, {
        force3D: true,
        delay: 0.3,
        y: 0,
        opacity: "1",
        ease: Expo.easeInOut,
      });
      TweenMax.to($(".nicescroll-rails"), 1.2, {
        force3D: true,
        delay: 0.5,
        scale: 1,
        opacity: "1",
        ease: Power2.easeOut,
      });
  
      TweenMax.to($(".snw-anim"), 0.8, {
        force3D: true,
        delay: 0.4,
        bottom: "0",
        ease: Expo.easeInOut,
      });
      TweenMax.to($(".first-tile_load"), 1.2, {
        force3D: true,
        delay: 0.3,
        y: 0,
        opacity: "1",
        ease: Power2.easeOut,
      });
      TweenMax.to($(".fixed-column-anim"), 0.9, {
        force3D: true,
        bottom: "100%",
        // delay: 0.3,
        ease: Expo.easeInOut,
      });
      $(".column-image").addClass("add_scale");
  
      setTimeout(function () {
        $(".serv-bg").addClass("no-trans");
      }, 400);
      $(".hiddec-anim").each(function (ac) {
        var bp = $(this);
        setTimeout(function () {
          TweenMax.to(bp, 0.9, {
            force3D: true,
            bottom: "100%",
            delay: 0,
            ease: Expo.easeInOut,
          });
        }, 150 * ac);
      });
      $(".bot-element2").each(function (ac2) {
        var bp2 = $(this);
        setTimeout(function () {
          TweenMax.to(bp2, 1.2, {
            force3D: true,
            delay: 0.3,
            y: 0,
            opacity: "1",
            ease: Expo.easeInOut,
          });
        }, 230 * ac2);
      });
    }, 400);
  }
  //   load animation------------------
  function contentAnimShow() {
    TweenMax.to($(".page-subtitle span"), 0.4, {
      force3D: true,
      y: -10,
      opacity: 0,
      delay: 0.4,
      ease: Power2.easeOut,
      onComplete: function () {
        TweenMax.to($(".page-subtitle span"), 0.1, {
          force3D: true,
          y: 10,
        });
        var chdpt = $(".ch").data("pagetitle");
        $(".page-subtitle span").text(chdpt);
      },
    });
    $(".lg-backdrop , .lg-outer").remove();
    $(".nav-button").removeClass("cmenu");
    $(".showshare").removeClass("uncl-share");
    hideMenu();
    $(".page-load").fadeIn(1);
    TweenMax.to($(".page-load_bg2"), 1.1, {
      force3D: true,
      right: "0",
      ease: Expo.easeInOut,
    });
    TweenMax.to($(".page-load_bg"), 1.2, {
      force3D: true,
      right: "0",
      // delay: 0,
      ease: Expo.easeInOut,
    });
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        {
          queue: true,
          duration: 10,
        }
      );
    }, 1000);
  }
  function contentAnimHide() {
    TweenMax.to($(".page-subtitle span"), 0.4, {
      force3D: true,
      y: 0,
      opacity: 1,
      delay: 0.4,
      ease: Power2.easeOut,
    });
    setTimeout(function () {
      initpageloadAnimation();
    }, 400);
  
    // TweenMax.to($(".page-load_bg"), 0.6, {
    //     force3D: true,
    //     left: "100%",
    //     ease: Power2.easeOut
    // });
    TweenMax.to($(".page-load_bg2"), 1.2, {
      force3D: true,
      left: "100%",
      delay: 0.2,
      ease: Expo.easeInOut,
      onComplete: function () {
        setTimeout(function () {
          $(".page-load").fadeOut(1);
          TweenMax.to($(".page-load_bg2 , .page-load_bg"), 0.0, {
            force3D: true,
            left: "0",
            right: "100%",
          });
        }, 10);
      },
    });
  }
  
  var scroll_amount = "";
  function scroll() {
    $(".gallery-thumbs").animate(
      {
        scrollLeft: scroll_amount,
      },
      100,
      "linear",
      function () {
        if (scroll_amount != "") {
          scroll();
        }
      }
    );
  }
  $(".thumb-nav-next").hover(
    function () {
      scroll_amount = "+=100px";
      scroll();
    },
    function () {
      scroll_amount = "";
    }
  );
  $(".thumb-nav-prev").hover(
    function () {
      scroll_amount = "-=100px";
      scroll();
    },
    function () {
      scroll_amount = "";
    }
  );
  
  // $(".thumb-nav-next").click(function () {
  //   $(".gallery-thumbs").animate({
  //     scrollLeft: "+=500px",
  //   });
  // });
  // $(".thumb-nav-prev").click(function () {
  //   $(".gallery-thumbs").animate({
  //     scrollLeft: "-=500px",
  //   });
  // });
  $("<div class='page-load'><div class='page-load_bg'><div class='spinner2'><span class='cssload-speeding-wheel'></span></div></div><div class=''></div></div>").appendTo("#main");
  //   Init Ajax------------------
  $(function () {
    $.coretemp({
      reloadbox: "#wrapper",
      outDuration: 700,
      inDuration: 200,
    });
    readyFunctions();
    $(document).on({
      ksctbCallback: function () {
        readyFunctions();
      },
    });
  });
  //   Init All Functions------------------
  function readyFunctions() {
    initGrasp();
    removideo();
  }
  
  // const slider = document.querySelector(".gallery-thumbs");
  // let isDown = false;
  // let startX;
  // let scrollLeft;
  
  // slider.addEventListener("mousedown", (e) => {
  //   isDown = true;
  //   slider.classList.add("active");
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // });
  // slider.addEventListener("mouseleave", () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // });
  // slider.addEventListener("mouseup", () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // });
  // slider.addEventListener("mousemove", (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 2; //scroll-fast
  //   slider.scrollLeft = scrollLeft - walk;
  // });
  
  // var img = new Image;
  // img.src = $('.bg').attr("data-bg").replace(/url\(\"|\"\)$/ig, "");
  // var bgImgWidth = img.width;
  // var bgImgHeight = img.height;
  
  //  -----------------
  
  // var url = $('.bg').attr("data-bg").replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
  // var bgImg = $('<img />');
  // bgImg.hide();
  // bgImg.bind('load', function()
  // {
  //     var height = $(this).height();
  //     alert(height);
  // });
  // $('#myDiv').append(bgImg);
  // bgImg.attr('src', url);
  
  //  -----------------
  
  // var getBackgroundImageSize = function(el) {
  //     var imageUrl = $(el).css('background-image').match(/^url\(["']?(.+?)["']?\)$/);
  //     var dfd = new $.Deferred();
  
  //     if (imageUrl) {
  //         var image = new Image();
  //         image.onload = dfd.resolve;
  //         image.onerror = dfd.reject;
  //         image.src = imageUrl[1];
  //     } else {
  //         dfd.reject();
  //     }
  
  //     return dfd.then(function() {
  //         return { width: this.width, height: this.height };
  //     });
  // };
  // getBackgroundImageSize(jQuery('.bg'))
  //     .then(function(size) {
  //         console.log('Image size is', size.width, size.height);
  //     })
  //     .fail(function() {
  //         console.log('Could not get size because could not load image');
  //     });
  
  // function createModal(el) {
  //   var fullsize = $(el).data('fullsizeImg');
  //   console.log($(el).attr('data-fullsizeImg'));
  
  //   $('#modal').css({
  //     'display': 'block'
  //   });
  
  // }
  
  // $(".galleryThumbnail").click(function() {
  //   createModal(this);
  // });
  
  // $(".fs-slider_align_title").hover(function() {
  //     $(this).siblings(".overlay").addClass("darker");
  // }, function() {
  //     $(this).siblings(".overlay").removeClass("darker");
  // });
  