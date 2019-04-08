(function($)
{
	var wallpaperStyle;
	
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
		
		changeWallpaperStyle();
	});
	
	function changeWallpaperStyle()
	{
		switch(wallpaperStyle)
		{
			case "Center":
				wallpaperStyle = "Tile";
				
				$("#desktop").css("background-size", "auto");
				$("#desktop").css("background-position", "left top");
				$("#desktop").css("background-repeat", "repeat");
				
				break;
			case "Tile":
				wallpaperStyle = "Stretch";
				
				$("#desktop").css("background-size", "100% 100%");
				$("#desktop").css("background-position", "left top");
				$("#desktop").css("background-repeat", "no-repeat");
				
				break;
			case "Stretch":
			default:
				wallpaperStyle = "Center";
				
				$("#desktop").css("background-size", "auto");
				$("#desktop").css("background-position", "center center");
				$("#desktop").css("background-repeat", "no-repeat");
				break;
		}
		
		console.log(wallpaperStyle);
	}
	
	changeWallpaperStyle();
})(jQuery);