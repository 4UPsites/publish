var ball_template = $('#ball_4').html();
var isMobile;

function dateDifferenceDay() {

	var initialDate = Date.UTC(2018, 1, 24);
	
	var data = new Date();

	var day = data.getDate();
	var month = data.getMonth();
	var year = data.getFullYear();
	
	var currentDate = Date.UTC(year, month, day);

	var differenceDate = Math.floor((currentDate - initialDate) / ( 1000 * 60 * 60 * 24));
	
	if ($(".progress-bar-striped").text() != "100%" && differenceDate> 5 ) {
		differenceDate = differenceDate * 2;
		$(".progress-bar-striped").css('width', differenceDate + "%");
		$(".progress-bar-striped").text(differenceDate + "%");
	} else {
		$(".progress-bar-striped").css('width', "10%");
		$(".progress-bar-striped").text("10%");
	}
}

function ballShow() {
	if (isMobile) {
		$(".ball").on('touchstart', function() {
			if ($('#'+$(this)[0].id).hasClass('active')) {
				$('#'+$(this)[0].id).removeClass('active');
				ballMax ($(this));
			}
		});
	} else {
		$(".ball").hover(function() {
			if ($('#'+$(this)[0].id).hasClass('active')) {
				$('#'+$(this)[0].id).removeClass('active');
				ballMax ($(this));
			}
		});
	}
	function ballMax (ball) {
		$('#'+ball[0].id).addClass("max_1");

		setTimeout(function() {
			$('#'+ball[0].id).removeClass("max_1");
			$('#'+ball[0].id).addClass("max_2");
		}, 250);
	  	setTimeout(function() {
			$('#'+ball[0].id).removeClass("max_2");
			$('#'+ball[0].id).addClass("max_3");
		}, 500);
  		setTimeout(function() {
			$('#'+ball[0].id).removeClass("max_3");
			$('#'+ball[0].id).addClass("max_4");
		}, 750);
		setTimeout(function() {
			ballHideAndShow ($('#'+ball[0].id));
			$('#'+ball[0].id).removeClass("max_4");
		}, 1000);
	}
	function ballHideAndShow (ball) {
		if (typeof(isMobile)!==undefined && isMobile!==null && isMobile) {
			$('#'+ball[0].id).fadeOut();
			$('#'+ball[0].id).addClass('active');
			$('#'+ball[0].id).fadeIn();
		} else {
			var math = Math.floor(Math.random()*(4));
			$('#'+ball[0].id).fadeOut();
			$(".balls_ #ball_" + math).html(ball_template);
			$(".balls_ #ball_" + math).addClass('active');
			$(".balls_ #ball_" + math).fadeIn();
		}
	}
}

function mobile () {
	if (screen.width < 640 || screen.height < 480) {
		$("#indentifier").addClass('mobile');
		isMobile = true;
	}
}