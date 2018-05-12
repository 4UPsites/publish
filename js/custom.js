$(document).ready(function() {
    if (screen.width < 1024 || screen.height < 768) {
    	$("body").addClass('mobile');
	} else {
		$("body").addClass('desktop');
	}
	$("body").removeClass('opacity');
	$(".desktop .icon-whatsapp").mouseenter(function() {
		console.log('tesss');
		$(".desktop .social strong").show();
	}).mouseleave(function() {
		$(".desktop .social strong").hide();
	});
	$(".mobile .icon-whatsapp").click(function() {
	    $(".mobile .social strong").show();
	});
});

function popupShow() {
	$('body').addClass('overflow_hidden');
	$('#popup').show();
}
function popupHidden() {
	$('body').removeClass('overflow_hidden');
	$('#popup').hide();
}

