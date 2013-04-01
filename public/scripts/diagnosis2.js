$(function() {
	$('.move-up').click(function() {
		$(this).parent().parent().addClass('primary');
		$('#primary-list').append($(this).parent().parent().parent());
	});
	$('.move-down').click(function() {
		$(this).parent().parent().removeClass('primary');
		$('#secondary-list').append($(this).parent().parent().parent());
	});
});