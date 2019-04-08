(function($)
{
	$("#start-button").on("mouseenter", function()
	{
		$(this).addClass("hover");
	});
	
	$("#start-button").on("mouseleave", function()
	{
		$(this).removeClass("hover");
	});
	
	$("#start-button").on("click", function()
	{
		$(this).toggleClass("pressed");
	});
})(jQuery);