$(function() {
	$('.car-car').CarCar();

	$('.car-car2').CarCar({
		slideToShow : 2,
		slideWidth : 300,
		slideMargin : 10
	});

	$('.car-car3').CarCar({
		slideToShow : 2,
		slideWidth : 200,
		slideMargin : 5,
		slideToMove : 1
	});
});