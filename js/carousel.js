(function($) {

  $.fn.CarCar = function(options) {

    var defaults = {
      slideToShow : 3,
      slideWidth : 400,
      slideMargin : 15,
      slideToMove : 2
    };

    var sets = $.extend(defaults, options);

    var
      $carousel = this,
      $slides = $carousel.children(),
      $hider = $carousel.wrap('<div class="cc-hider"></div>').parent(),
      $wrapper = $hider.wrap('<div class="cc-wrapper"></div>').parent(),
      slidesCount = $slides.length,
      hiderWidth = (sets.slideWidth + sets.slideMargin) * sets.slideToShow - sets.slideMargin,
      animating = false;
    
    // Making slider not bigger than parent
    if (hiderWidth > $wrapper.width()) {
      hiderWidth = $wrapper.width();
      sets.slideWidth = ((hiderWidth - sets.slideMargin * (sets.slideToShow-1)) / sets.slideToShow);
    };

    // Applying css to each slide
    $slides.addClass('cc-element').css({
      'width' : sets.slideWidth,
      'margin-right' : sets.slideMargin
    });

    // css to initial container
    $carousel.addClass('cc-carousel').css({
      'width' : (sets.slideWidth + sets.slideMargin) * slidesCount
    });

    // css to outer wrapper
    $wrapper.css('max-width', hiderWidth);

    // Making controls
    var $controlLeft = $('<div class="cc-control left">&#8678;</div>').appendTo($wrapper);
    var $controlRight = $('<div class="cc-control right">&#8680;</div>').appendTo($wrapper);;

    // Calculating offset for one step of sliding
    var moveDistance = (sets.slideWidth + sets.slideMargin) * sets.slideToMove;

    $controlLeft.on('click', moveToRight);
    $controlRight.on('click', moveToLeft);


    function moveToLeft() {
      var maxOffset = $carousel.width() - $wrapper.width();
      var currentOffset = Math.abs(parseInt($carousel.css('left')));

      if (currentOffset == $carousel.width() || animating) {

        return

      } else if ((moveDistance + currentOffset) < maxOffset) {

        animating = true;

        $carousel.animate({
            'left' : '-='+ moveDistance +'px'
          },
          500,
          function() {animating = false;}
        );

      } else {
        animating = true;

        $carousel.animate({
            'left' : '-'+ (maxOffset-sets.slideMargin) +'px'
          },
          500,
          function() {animating = false;}
        );

      }

    }

    function moveToRight() {
      var currentOffset = Math.abs(parseInt($carousel.css('left')));

      if (currentOffset == 0 || animating) {

        return

      } else if (currentOffset > moveDistance) {

        animating = true;

        $carousel.animate({
            'left' : '+='+ moveDistance +'px'
          },
          500,
          function() {animating = false;}
        );

      } else {
        animating = true;

        $carousel.animate({
            'left' : '0px'
          },
          500,
          function() {animating = false;}
        );

      }

    }
    





  }

})(jQuery);