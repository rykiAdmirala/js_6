$(function() {

	// Initialising carousels
	
	$('.car-car').CarCar();

	$('.car-car2').CarCar({
		slideToShow : 3,
		slideWidth : 280,
		slideMargin : 10
	});

	$('.car-car3').CarCar({
		slideToShow : 2,
		slideWidth : 200,
		slideMargin : 5,
		slideToMove : 1
	});


	// Templating

	var html = $('#about').html();

	var profile = [
		{
			'headline' : 'Маликов Денис Александрович',
			'photo' : 'profile-photo.jpg',
			'text' : 'Выпускник Красноармейского индустриального института'
		},{
			'headline' : 'Хочу выучить JavaScript, потому что',
			'text' : 'ну это реально круто. Ты такой жмакаешь сюда, а оно полетело. Жмакаешь туда, а оно там такое ух прям ваще. Каеф, одним словом.'
		},{
			'headline' : 'Мой контактный номер',
			'text' : '+380508435032'
		},{
			'headline' : 'Мой фидбек',
			'text' : 'И я, кстати, тоже могу забор построить, в принципе.'
		}
	];

	/** JOHN RESIG Templating **/

	var contentRes = tmpl(html, {
		data : profile
	});

	$('.wrapper').append('<h3>With Resig</h3>' + contentRes);




	/** LODASH Templating **/

	var tmplLod = _.template(html);

	var contentLod = tmplLod({
		data : profile
	});

	$('.wrapper').append('<hr><h3>With LoDash</h3>' + contentLod);

});