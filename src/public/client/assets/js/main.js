$(document).ready(function () {
  $(".autoplay").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".section-row").slick({
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });


  $(".section-row-handbook").slick({
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });



  $(".review-row").slick({
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  function quay_lai_trang_truoc() {
      history.back();
    }

  $(document).ready(function () {
    $(".text-show").click(function (e) {
      $(".main-section-detail-container").addClass("show-more");
      $(".text-show").hide();
      $(".text-hide").show();
    });
  });
  $(".text-hide").click(function (e) {
      $(".main-section-detail-container").removeClass("show-more");
      $(".text-show").show();
      $(".text-hide").hide();
    });

    $("#icon-back").on('click', function () {
      quay_lai_trang_truoc();
    });
    
    $("#icon-back1").on("click", function () {
      quay_lai_trang_truoc();
    });
     $("#icon-back2").on("click", function () {
       quay_lai_trang_truoc();
     });
     $("#icon-back3").on("click", function () {
       quay_lai_trang_truoc();
     });


     $("#extra-info").click(function (e) {
       $(".open-extra-info").toggle();
     });

       $(".header-expand").click(function (e) {
         $("#expaind-navbar").show();
         $(".blurred").show();
       });

       $(".blurred").click(function (e) {
         $("#expaind-navbar").hide();
         $(".blurred").hide();
       });

        $(".hsd-expand").click(function (e) {
          $("#expaind-navbar").show();
          $(".blurred").show();
        });

        $(".blurred").click(function (e) {
          $("#expaind-navbar").hide();
          $(".blurred").hide();
        });

        $("html").click(function (e) {
          if (e.target.id === "input-search") {
            //pass
          } else {
            //click outside inputSearch
            $("#banner-search-input-title").css("display", "none");
          }
        });

        $('.en-link.gohome').click(function (e) { 
                window.location.href = `${window.location.origin}/`;
          
        }) ;
  
        
});
