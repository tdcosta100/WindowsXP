/*
Made by Tiago Costa
https://github.com/tdcosta100
*/

(function($)
{
	$(document).on("mouseenter", ".close-button", function()
	{
		$(this).addClass("hover");
	});
	
	$(document).on("mouseleave", ".close-button", function()
	{
		$(this).removeClass("hover pressed");
	});
	
	$(document).on("mousedown", ".close-button", function()
	{
		$(this).addClass("pressed");
	});
	
	$(document).on("mouseup", ".close-button", function()
	{
		$(this).removeClass("pressed");
	});
})(jQuery);