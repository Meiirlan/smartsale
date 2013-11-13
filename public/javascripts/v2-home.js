$(document).ready(function() {
  // Tabs for Screenshots 
  var tabs = $('ul.tabs');
    tabs.each(function(i) {
    	var tab = $(this).find('> li > a');
    	tab.click(function(e) {
    		$('ul.tabs > li > a.active > span').removeClass('active');
    		var contentLocation = $(this).attr('href');
    		if(contentLocation.charAt(0)=="#") {
    			e.preventDefault();
    			tab.removeClass('active');
    			$(this).addClass('active');
    			$('ul.tabs > li > a.active > span').addClass('active');
    			$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
    		}
    	});
    });
});