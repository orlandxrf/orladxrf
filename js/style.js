$(function(){

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 80
			}, 10);
		}
	});

	$('.pdfBtn').on('click', function(){
		$(this).blur();
	});

	$('.showCite').on('click', function(){
		var id_cite = $(this).attr('data-cite')
		if ($('#paper'+id_cite+'').css('display') == 'none') {
			$('#paper'+id_cite+'').slideUp('slow', function(){
				$(this).slideDown('slow');
			});
		} else if ($('#paper'+id_cite+'').css('display') == 'block') {
			$('#paper'+id_cite+'').slideUp('slow');
		}
	});

});
