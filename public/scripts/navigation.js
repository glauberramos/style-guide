var FormNavigator = function() {
	moveNextSection = function() {
		if(!$('.doing').is(':last-child')) {
			$('.doing').addClass('done').removeClass('doing')
				.next().addClass('doing').removeClass('to-do');
		}

		if(!isLastSection()) {
			$('.active').removeClass('active').next('form').addClass('active');
			$('.active').find('select, input').first().focus();
		}
	};

	movePreviousSection = function() {
		if(!$('.doing').is(':first-child')) {
			$('.doing').addClass('to-do').removeClass('doing')
				.prev().addClass('doing').removeClass('done');
		}

		if(!isFirstSection()) {
			$('.active').removeClass('active').prev('form').addClass('active');
			$('.active').find('select, input').last().focus();
		}	
	};

	moveNextField = function() {
    	if(!isLastField()) {
    		var nextElement = $('.selected').parent().next('p').find('input, select')[0];
    		$(nextElement).focus();
    	} else {
    		moveNextSection();
    	}
	}

	movePreviousField = function() {
		if(!isFirstField()) {
    		var previousElement = $('.selected').parent().prev('p').find('input, select')[0];
    		$(previousElement).focus();
    	} else {
    		movePreviousSection();
    	}
	}

	isFirstSection = function() {
		return !$('.active').prev('form').length > 0;
	}

	isLastSection = function() {
		return !$('.active').next('form').length > 0;
	}

	isFirstField = function() {
		return !$('.selected').parent().prev('p').find('input, select').length > 0;
	}

	isLastField = function() {
		return !$('.selected').parent().next('p').find('input, select').length > 0;
	};

	$('#retro-checkin li').click(function() {
		//change breadcrumb
		if($(this).attr('section') > $('#retro-checkin li.doing').attr('section')) {
			$('#retro-checkin li.doing').removeClass('doing').addClass('done');
			$(this).removeClass('to-do').addClass('doing');
		} else {
			$('#retro-checkin li.doing').removeClass('doing').addClass('to-do');
			$(this).removeClass('done').addClass('doing');
		}

		//change section
		$('.active').removeClass('active');
		$('form[section=' + $(this).attr('section') + ']').addClass('active');
		$('.active').find('select, input').first().focus();
	});

	$('input, select').on('focus', function() {
		$(this).addClass('selected');
	});

	$('input, select').on('blur', function() {
		$(this).removeClass('selected');
	});

	 $('body').keydown(function(key) {
		if(key.shiftKey && key.which == 9) {
			key.preventDefault();
        	movePreviousField();
        	return;
        }

        if(key.which == 9 || key.which == 13) {
        	key.preventDefault();
        	moveNextField();
        }        
	 });

	 //focus the first element
	 $('.location').focus();
}

FormNavigator();
