document.addEventListener('DOMContentLoaded', function() {
	$("#accordion").accordion({
		header: "h3",
		collapsible: true,
		active: false,
		autoHeight: false,
		animate: {
			duration: 500,
			easing:'swing'
		}
	});
});