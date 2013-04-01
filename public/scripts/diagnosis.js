$(function() {
	$('input.primary').click(function() {
		if ($(this).is(':checked')) {
			$(this).parent().parent().addClass('primary');
			$('#primary-list').append($(this).parent().parent().parent());
			//$(this).parent().parent().remove();
		} else {
			$(this).parent().parent().removeClass('primary');
			$('#secondary-list').append($(this).parent().parent().parent());
		}
	});
});