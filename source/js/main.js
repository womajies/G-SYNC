// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function(){
	$('.js-burger').on('click', () => {
		$('.js-burger').toggleClass('burger--active');
		$('.js-header__menu').toggleClass('header__menu--active');
	}); 
});
