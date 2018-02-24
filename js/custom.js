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
	$( ".ball" ).hover(function() {

		if (!$(".ball").hasClass('active')) {
			ballMax ();
		}
	});
	function ballMax () {
		$(".ball").addClass("active");
		$(".ball").addClass("max_1");

		setTimeout(function() {
			$(".ball").removeClass("max_1");
	 		$(".ball").addClass("max_2");
		}, 250);
	  	setTimeout(function() {
	  		$(".ball").removeClass("max_2");
	 		$(".ball").addClass("max_3");
		}, 500);
  		setTimeout(function() {
	  		$(".ball").removeClass("max_3");
	 		$(".ball").addClass("max_4");
		}, 750);
		setTimeout(function() {
	  		ballHideAndShow ();
	  		if ($("#indentifier").hasClass('mobile')) {
			   	$(".ball").fadeIn(); 
	 			$(".ball").removeClass("max_4");
			}
		}, 1000);
	}
	function ballHideAndShow () {
		var math = Math.floor(Math.random()*(4));
		$(".ball").fadeOut();
		$(".balls_ .ball_" + math).html($(".ball").html());
		$(".balls_ .ball_" + math).fadeIn();
	}
}

function mobile () {
	if (screen.width < 640 || screen.height < 480) {
	    $("#indentifier").addClass('mobile');
	    $("#indentifier span div").removeClass('ball_0');
	    $("#indentifier span div").removeClass('ball_1');
	    $("#indentifier span div").removeClass('ball_2');
	    $("#indentifier span div").removeClass('ball_3');
	}
}