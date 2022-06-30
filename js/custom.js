/* 	Theme Name : Host Cube
	Author : Redcheap Theme
	Author URL : http://www.rctheme.com
    Version : 1.0.0
    Created: 02 November 2018
*/


function theonoffswitch() {
  // Get the checkbox
  var checkBox = document.getElementById("myonoffswitch");
  var checkBox1 = document.getElementById("myonoffswitch1");
  // Get the Prices box
  var PriceMensual = document.getElementById("PriceMensual");
  var PriceAnual = document.getElementById("PriceAnual");
  var PriceMensual1 = document.getElementById("PriceMensual1");
  var PriceAnual1 = document.getElementById("PriceAnual1");

  // If the checkbox is checked, display the Prices box
  if (checkBox.checked == true) {
    PriceMensual.style.display = "block";
    PriceAnual.style.display = "none";
  } else {
    PriceMensual.style.display = "none";
    PriceAnual.style.display = "block";
  }
  // If the checkbox is checked, display the Prices box
  if (checkBox1.checked == true) {
    PriceMensual1.style.display = "block";
    PriceAnual1.style.display = "none";
  } else {
    PriceMensual1.style.display = "none";
    PriceAnual1.style.display = "block";
  }
}

function scrollToTop() {
  verticalOffset = "undefined" != typeof verticalOffset ? verticalOffset : 0, horizontalOffset = "undefined" != typeof horizontalOffset ? horizontalOffset : -1e3, element = $("body"), offset = element.offset(), offsetTop = offset.top, $("html, body").animate({
    scrollTop: offsetTop
  }, 500, "linear")
}
$(document).ready(function () {
  $("#carousel").carousel({
    interval: 11e3
  })
}), $(function () {
  $(document).on("scroll", function () {
    $(window).scrollTop() > 100 ? $(".scroll-top-wrapper").addClass("show") : $(".scroll-top-wrapper").removeClass("show")
  }), $(".scroll-top-wrapper").on("click", scrollToTop)
});


(function ($) {
  $(function () {
    var jcarousel = $('.jcarousel');
    jcarousel.on('jcarousel:reload jcarousel:create', function () {
      var width = jcarousel.innerWidth();
      if (width >= 600) {
        width = width / 3
      } else if (width >= 350) {
        width = width / 2
      }
      jcarousel.jcarousel('items').css('width', width + 'px')
    }).jcarousel({
      wrap: 'circular'
    });
    $('.jcarousel-control-prev').jcarouselControl({
      target: '-=1'
    });
    $('.jcarousel-control-next').jcarouselControl({
      target: '+=1'
    });
    $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
      $(this).addClass('active')
    }).on('jcarouselpagination:inactive', 'a', function () {
      $(this).removeClass('active')
    }).on('click', function (e) {
      e.preventDefault()
    }).jcarouselPagination({
      perPage: 1,
      item: function (page) {
        return '<a href="#' + page + '">' + page + '</a>'
      }
    })
  })
})(jQuery)

$(document).ready(function () {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function (a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function (a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});


(function ($) {
  function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  var $myCarousel = $('#homepage-slider'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
  $myCarousel.carousel();
  doAnimations($firstAnimatingElems);
  $myCarousel.carousel('pause');
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });
  $('#homepage-slider').carousel({
    pause: "true"
  });
})(jQuery);


$('.jcarousel').jcarouselAutoscroll({
  autostart: true
});

$('#languageselectionmodal').on('shown.bs.modal', function (e) {
  $('#languageselectionmodalbutton').one('focus', function (e) {
    $(this).blur();
  });
});
$('#clientnotificationsmodal').on('shown.bs.modal', function (e) {
  $('#clientnotificationsmodalbutton').one('focus', function (e) {
    $(this).blur();
  });
});
$('#clientloginmodal').on('shown.bs.modal', function (e) {
  $('#clientloginmodalbutton').one('focus', function (e) {
    $(this).blur();
  });
});
