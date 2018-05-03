$(function () {
	var bodyHeight = $(window).height()
	$('body').height(bodyHeight)
	$('.about-box').height(bodyHeight-110)
	$("body").find("#top6").attr('href', '../xf_pc_about.html')
})