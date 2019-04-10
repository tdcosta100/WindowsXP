/*
Made by Tiago Costa
https://github.com/tdcosta100
*/

(function($)
{
	$(document).on("mouseenter", ".caption-button", function()
	{
		$(this).addClass("hover");
	});
	
	$(document).on("mouseleave", ".caption-button", function()
	{
		$(this).removeClass("hover pressed");
	});
	
	$(document).on("mousedown", ".caption-button", function()
	{
		$(this).addClass("pressed");
	});
	
	$(document).on("mouseup", ".caption-button", function()
	{
		$(this).removeClass("pressed");
	});
	
	$(document).on("click", ".max-button", function()
	{
		var button = $(this);
		var currentWindow = button.parents(".window");
		
		var animatedWindow = $("#templates .window").clone();
		animatedWindow.addClass("animation");
		animatedWindow.css(
			currentWindow.css([ "left", "top", "right" ])
		);
		
		$(".caption .background", animatedWindow).empty().removeClass("sliced");
		$(".caption .container", animatedWindow).empty();
		
		$(".frame", animatedWindow).remove();

		var content = $(".caption .container > .content", currentWindow).clone();
		content.appendTo($(".caption .container", animatedWindow));
		animatedWindow.appendTo("#desktop");
		
		animatedWindow.animate(
			{
				"left": 0,
				"top": 0,
				"right": 0
			},
			{
				duration: 300,
				complete: function()
				{
					animatedWindow.remove();
					
					currentWindow.addClass("maximized");
					
					button.removeClass("max-button").addClass("restore-button");
					$(".overlay", button).attr("title", "Restaurar")
				}
			}
		);
	});
	
	$(document).on("click", ".restore-button", function()
	{
		var button = $(this);
		var currentWindow = button.parents(".window");
		
		var measuringObject = $("<div/>");
		measuringObject.attr("style", currentWindow.attr("style"));
		
		var targetValues = measuringObject.css([ "left", "top", "width" ]);
		measuringObject.remove();
		
		var animatedWindow = $("#templates .window").clone();
		animatedWindow.addClass("animation");
		
		animatedWindow.css({
			"left": 0,
			"top": 0,
			"right": 0
		});
		
		$(".caption .background", animatedWindow).empty().removeClass("sliced");
		$(".caption .container", animatedWindow).empty();
		
		$(".frame", animatedWindow).remove();

		var content = $(".caption .container > .content", currentWindow).clone();
		content.appendTo($(".caption .container", animatedWindow));
		animatedWindow.appendTo("#desktop");
		
		animatedWindow.animate(
			targetValues,
			{
				duration: 300,
				complete: function()
				{
					animatedWindow.remove();
					
					button.parents(".window").removeClass("maximized");
					
					button.removeClass("restore-button").addClass("max-button");
					$(".overlay", button).attr("title", "Maximizar")
				}
			}
		);
	});
})(jQuery);