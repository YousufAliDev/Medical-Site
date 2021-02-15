$(document).ready(function(){
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 6000);
				   
		// STICKY MENU
		$(".js-sticky-menu-show").waypoint(function(direction){
			if (direction == "down"){
					$("nav").addClass("sticky-menu");
				} else {
					$("nav").removeClass("sticky-menu");
				}
		});
						   
		// HEADER-SECTION
		$(".search-icon").click(function(){
			$(".search-box").fadeToggle();
		})
				   
		// TOGGLE MENU
		$("span.nav-icon").click(function(){
			$(".menu").addClass("show-menu");
			$(".menu").removeClass("hide-menu");
		});	
		$("span.cros-icon").click(function(){
			$(".menu").addClass("hide-menu");
			$(".menu").removeClass("show-menu");
		});
		
		// SCROLL UP BTN 
		$(window).scroll(function(){
			if($(this).scrollTop() > 200) {
				$("a.scroll-up-btn").fadeIn();
			} else {
				$("a.scroll-up-btn").fadeOut();
			}
		});
	
		// POPUP VIDEO
			$('.popup-video').magnificPopup({
				type:'iframe',
				iframe: {
				  markup: '<div class="mfp-iframe-scaler">'+
							'<div class="mfp-close"></div>'+
							'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						  '</div>', 
				  patterns: {
					youtube: {
					  index: 'youtube.com/',
					  id: 'v=',
					  src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				},
				vimeo: {
					  index: 'vimeo.com/',
					  id: '/',
					  src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					  index: '//maps.google.',
					  src: '%id%&output=embed'
				}

			  },

				  srcAction: 'iframe_src', 
						}
			});

		// COUNT UP
		 $(".counter").counterUp({
				delay: 10,
				time: 2500
		});
	
});
