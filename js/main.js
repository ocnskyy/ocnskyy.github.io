$('.nav-tabs li').click(function() {
	$('.nav-tabs li').removeClass('active');
	$(this).addClass('active');
	var name = $(this).attr('data-tab');
	$('.info > div').removeClass('current');
	$('#'+name).addClass('current');
});