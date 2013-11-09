$(document).ready(function() {

  // Focus on sign up 
  $("input:text:visible:first").focus();
  
  // Remove "Start your free trial" tooltip on delay or input focus or error 
  $("#btn-open-store").click(function(){
    $('.tooltip.start-now').addClass('hidden');
    $('.field-signup.store-name').removeClass('load-focus');
  })
  
  /* Fancybox Video */
	$(".video").fancybox({
    maxWidth  : 853,
    maxHeight : 480,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'fade',
    closeEffect : 'none',
    padding   : 10,
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.85)'
            }
        }
    }
  });
  
  // Inview animations
  $('ul.setup-steps').bind('inview', function(event, visible) {
    if (visible) {
      $('ul.setup-screen #tab1 img').addClass("animate-settings");
    }
  });
  
  $('span.iphone-dashboard').bind('inview', function(event, visible) {
     if (visible) {
       $('span.animate-box1, span.animate-box2, span.animate-box3').addClass("animate");
     }
  });
  	 
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
    
  // Cycle through screenshouts
  $('#ca-container').contentcarousel({
    sliderSpeed: 500,
    sliderEasing: 'easeOutExpo',
    itemSpeed: 500,
    itemEasing: 'easeOutExpo',
    scroll: 3
  });
  
  // Tabs for Experience
  var tabs = $('#experience-rotate ul.tabs');
    tabs.each(function(i) {
    	var tab = $(this).find('> li > a');
    	tab.click(function(e) {
    		$('#experience-rotate ul.tabs > li > a.active > span').removeClass('active');
    		var contentLocation = $(this).attr('href');
    		if(contentLocation.charAt(0)=="#") {
    			e.preventDefault();
    			tab.removeClass('active');
    			$(this).addClass('active');
    			$('#experience-rotate ul.tabs > li > a.active > span').addClass('active');
    			$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
    		}
    	});
    });

 
 });