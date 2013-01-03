var FormNavigator = function() {
	nextField = function() {
		if(!$('.doing').is(':last-child')) {
			$('.doing').addClass('done').removeClass('doing')
				.next().addClass('doing').removeClass('to-do');
		}
	};

	previousField = function() {
		if(!$('.doing').is(':first-child')) {
			$('.doing').addClass('to-do').removeClass('doing')
				.prev().addClass('doing').removeClass('done');
		}
	};

	/*TAB 9 ENTER 13 ESC 27 UP 40 DOWN  38 */
	 $('body').keydown(function(key) {
	        if(key.which == 9) {
	            key.preventDefault();
	            nextField();
	        }

	        if(key.which == 27) {
	            key.preventDefault();
	            previousField();
	        }
	 });
}

FormNavigator();