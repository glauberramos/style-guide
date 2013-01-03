var FormNavigator = function() {
	moveNextSection = function() {
		if(!$('.doing').is(':last-child')) {
			$('.doing').addClass('done').removeClass('doing')
				.next().addClass('doing').removeClass('to-do');
		}

		$('.active').removeClass('active').next('form').addClass('active');

		$('.active').find('select, input').first().focus();			
	};

	movePreviousSection = function() {
		if(!$('.doing').is(':first-child')) {
			$('.doing').addClass('to-do').removeClass('doing')
				.prev().addClass('doing').removeClass('done');
		}

		$('.active').removeClass('active').prev('form').addClass('active');

		$('.active').find('select, input').first().focus();		
	};

	isFirstField = function() {
		return !$('.selected').parent().prev('p').find('input, select').length > 0;
	}

	isLastField = function() {
		return !$('.selected').parent().next('p').find('input, select').length > 0;
	};

	$('input, select').on('focus', function() {
		$(this).addClass('selected');
	});

	$('input, select').on('blur', function() {
		$(this).removeClass('selected');
	});

	 $('body').keydown(function(key) {
		if(key.shiftKey && key.which == 9) {
        	key.preventDefault();

			if(!isFirstField()) {
        		var previousElement = $('.selected').parent().prev('p').find('input, select')[0];
        		$(previousElement).focus();

        		return;
        	} else {
        		movePreviousSection();
        	}
        }

        if(key.which == 9 || key.which == 13) {
        	key.preventDefault();

        	if(!isLastField()) {
        		var nextElement = $('.selected').parent().next('p').find('input, select')[0];
        		$(nextElement).focus();
        	} else {
        		moveNextSection();
        	}
        }        
	 });

	 //focus the first element
	 $('.location').focus();
}

FormNavigator();
