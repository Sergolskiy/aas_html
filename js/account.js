
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
});
