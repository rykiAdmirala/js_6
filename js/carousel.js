(function($) {

  $.fn.CarCar = function() {

    $car = this;
    $slides = $car.children();
    $wrapper = $car.wrap('<div class="carcar-wrapper"></div>').parent();


  }

})(jQuery);