
$(document).ready(function () {
	$('.bidding__count-minus').click(function () {
		var input = $(this).next('.bidding__count-input');
		var val = input.val().replace(",", "");
		val = val - 1;
		input.val(new Intl.NumberFormat('en-EN').format(val))
	});
	$('.bidding__count-plus').click(function () {
		var input = $(this).prev('.bidding__count-input');
		var val = input.val().replace(",", "");
		val = parseInt(val) + 1;
		input.val(new Intl.NumberFormat('en-EN').format(val))
	});

	$('.a-contact__phone-country').click(function () {
		$(this).find('.a-contact__phone-list').toggleClass('open');
	});

	$('.a-contact__phone-item').click(function () {
		var html =  $(this).html();
		$('.a-contact__phone-current').html(html);
	});

	$('.a-contact__input-checkbox-wrap input').change(function () {
		if($(this).prop('checked') !== true){
			$('.a-contact__physical-address').addClass('a-contact__physical-address--open');
		} else {
			$('.a-contact__physical-address').removeClass('a-contact__physical-address--open');
		}
	});
});
