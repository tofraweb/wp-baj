jQuery(document).ready(function($) {		
	"use strict";		
	
	
	
	//TOGGLES		
		$(document).off().on('click','.toggle',function(){
			$(this).next('.toggle_box').slideToggle('slow');
			return false;
		});
		
			
		
		
	//SHORTCODE - POSTS/PORTFOLIO
		
		$(document).off('click.tp-sc-posts'); 
		$(document).on('click.tp-sc-posts','.tp-sc-posts .nav #right',function(e){
			e.preventDefault();
			
			//find out column width in PX for moving
			var colw = parseInt($(this).closest('.tp-sc-posts').find('.col').css('width'));
			colw = colw + parseInt($(this).closest('.tp-sc-posts').find('.col').css('marginRight'));
			
			//find out max limit
			var maxClicks = $(this).closest('.tp-sc-posts').find('.col:not(.info)').length - $(this).closest('.tp-sc-posts').attr('data-cols');
			var currClicks = parseInt($(this).closest('.tp-sc-posts').attr('data-clicks'));
			
			//move thumbs forward if allowed
			if(currClicks < maxClicks){
				$(this).closest('.tp-sc-posts').find('.mover').animate({
					marginLeft: '-='+colw+'px'
				},500);
				
				var nuClicks = currClicks + 1;
				$(this).closest('.tp-sc-posts').attr('data-clicks',nuClicks);
			}
			
			
		});
		$(document).on('click.tp-sc-posts','.tp-sc-posts .nav #left',function(e){
			e.preventDefault();
			
			//find out column width in PX for moving
			var colw = parseInt($(this).closest('.tp-sc-posts').find('.col').css('width'));
			colw = colw + parseInt($(this).closest('.tp-sc-posts').find('.col').css('marginRight'));
			
			var currClicks = parseInt($(this).closest('.tp-sc-posts').attr('data-clicks'));
			
			
			//move thumbs forward if allowed
			if(currClicks > 0){
				$(this).closest('.tp-sc-posts').find('.mover').animate({
					marginLeft: '+='+colw+'px'
				},500);
				
				var nuClicks = currClicks - 1;
				$(this).closest('.tp-sc-posts').attr('data-clicks',nuClicks);
			}
			
		});
		
				
		$(document).on('mouseenter','.tp-sc-posts .thumb,.tp-sc-pfolio .thumb,.tp-portfolio .thumb',
			function(){
				if(parseInt(jQuery(window).width()) >= 1024){
					var thumbw = parseInt($(this).closest('.tp-sc-posts,.tp-sc-pfolio,.tp-portfolio').find('.col img').outerWidth());
					var thumbh = parseInt($(this).closest('.tp-sc-posts,.tp-portfolio').find('.col img').outerHeight());			
					$(this).css('width',thumbw+'px');
					$(this).css('height',thumbh+'px');
					$('.hover',this).fadeIn(300);
					$('.tpicon-visit,.tpicon-play,.tpicon-pop',this).stop().animate({
						top: '50%'
					},300);
				}
			}
		);
		
		$(document).on('mouseleave','.tp-sc-posts .thumb,.tp-sc-pfolio .thumb,.tp-portfolio .thumb',
			function(){
				if(parseInt(jQuery(window).width()) >= 1024){
					$('.tpicon-visit,.tpicon-play,.tpicon-pop',this).stop().animate({
						top: '110%'
					},300);
					$('.hover',this).stop().fadeOut(300);
				}
			}
		);
		
		
		
	//SHORTCODE - TESTEMONIALS
		$(document).off('.tp-testemonials'); 
		$(document).on('click.tp-testemonials','.tp-testemonials .nav #right',function(e){
			e.preventDefault();
			
			//find out column width in PX for moving
			var colw = parseInt($(this).closest('.tp-testemonials').css('width'));
			colw = colw + parseInt($(this).closest('.tp-testemonials').find('.tp-testemonial').css('marginRight'));
						
			//find out max limit			
			var maxClicks = $(this).parent().parent().find('.tp-testemonial').length - 1;			
			var currClicks = parseInt($(this).closest('.tp-testemonials').attr('data-clicks'));
			
			//move thumbs forward if allowed
			if(currClicks < maxClicks){
				$(this).closest('.tp-testemonials').find('.mover').animate({
					marginLeft: '-='+colw+'px'
				},500);
				
				var nuClicks = currClicks + 1;
				$(this).closest('.tp-testemonials').attr('data-clicks',nuClicks);
			}			
			
		});
		$(document).on('click.tp-testemonials','.tp-testemonials .nav #left',function(e){
			e.preventDefault();
			
			//find out column width in PX for moving
			var colw = parseInt($(this).closest('.tp-testemonials').css('width'));
			colw = colw + parseInt($(this).closest('.tp-testemonials').find('.tp-testemonial').css('marginRight'));
			
			
			var currClicks = parseInt($(this).closest('.tp-testemonials').attr('data-clicks'));
			
			//move thumbs forward if allowed
			if(currClicks > 0){
				$(this).closest('.tp-testemonials').find('.mover').animate({
					marginLeft: '+='+colw+'px'
				},500);
				
				var nuClicks = currClicks - 1;
				$(this).closest('.tp-testemonials').attr('data-clicks',nuClicks);
			}			
			
		});
	
	
	
	
	//TABS
		jQuery('.tabs').tabs({
			fx: [{opacity:'toggle', duration:'normal'},
			{opacity:'toggle', duration:'normal'}]
		});
});



	//LITE UP COLUMNS OR LISTS		
		jQuery(window).load(function(){
			if(typeof ajax_is_on === 'undefined' || !ajax_is_on ){
				var t = setTimeout(function(){
					liteUp();
				},2000);
			}
		});
		
					
		function liteUp(){		
			jQuery('.liteup').each(function(){				
			
				//check .class to see if function runs already or not
				if(!jQuery(this).hasClass('running')){
					jQuery(this).addClass('running');
					
					//look for columns			
						var lup = jQuery(this);
						var cols = jQuery('.col',this);
						var len = jQuery('.col',this).length - 1;
	
						if(lup.attr('data-repeat') == 'forever'){						
							//animation runs continously		
							var looper = function(){							
								cols.each(function(index){									
									if(index === len){
										jQuery(this).delay(1500*index).animate({
											opacity: 1
										},400,function(){
											cols.delay(1500).animate({
												opacity: 0.4
											},500);	
											var x = setTimeout(function(){									
												looper();									
											},3500);
										});	
									}else{
										jQuery(this).delay(1500*index).animate({
											opacity: 1
										},400);	
									}
								});								
							}
							looper();
						}else{
							//animation runs only 1x						
							cols.each(function(index){
								jQuery(this).delay(1500*index).animate({
									opacity: 1
								},400);							
							});
						}
				}				
			});
		}		