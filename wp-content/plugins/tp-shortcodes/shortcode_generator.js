jQuery(document).ready(function() {
	
	//SHORTCODE GENERATOR	
	jQuery('#ub_scg_select').change(function(){
		jQuery('.ub_nu_input_field').remove();
		jQuery('.ub_nu_input_field2').remove();
		
		
		
		
		//AUDIO
			if(jQuery('#ub_scg_select').val() == 'audio'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Audio File URL:</label><input name="ub_scg_audio_url" id="ub_scg_audio_url" type="text" style="width: 200px;" /></div>'+							
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-audio" href="#" onclick="return false">Generate Code</a></div>');			
				
				
				jQuery('#sc-audio').click(function(){
					var addthissc = '[audio';
			
					if(jQuery('#ub_scg_audio_url').val() != ''){
						addthissc = addthissc + ' url="'+jQuery('#ub_scg_audio_url').val()+'"';
					}
				
					
				
					addthissc = addthissc + ']';
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}			
				});
			}
		
		
		
		
		//BUTTONS
			if(jQuery('#ub_scg_select').val() == 'buttons'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Target Link:</label><input name="ub_scg_buttons_target" id="ub_scg_buttons_target" type="text" style="width: 200px;" /></div>'+
				'<div class="ub_nu_input_field"><label>Icon Image URL:</label><input name="ub_scg_buttons_icon" id="ub_scg_buttons_icon" type="text" style="width: 200px;" /></div>'+
				'<div class="ub_nu_input_field"><label>Button Color:</label><input name="ub_scg_buttons_color" id="ub_scg_buttons_color" type="text" style="width: 200px;" /> <span class="description">HTML code or color name</span></div>'+
				'<div class="ub_nu_input_field"><label>Button Align:</label><select name="ub_scg_buttons_align" id="ub_scg_buttons_align"><option value="">Left</option><option value="right">Right</option></select></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
			
					if(jQuery('#ub_scg_buttons_color').val() != ''){
						addthissc = addthissc + ' color="'+jQuery('#ub_scg_buttons_color').val()+'"';
					}				
				
					if(jQuery('#ub_scg_buttons_target').val() != ''){
						addthissc = addthissc + ' link="'+jQuery('#ub_scg_buttons_target').val()+'"';
					}
					
					if(jQuery('#ub_scg_buttons_icon').val() != ''){
						addthissc = addthissc + ' image="'+jQuery('#ub_scg_buttons_icon').val()+'"';
					}
					
					if(jQuery('#ub_scg_buttons_align').val() != ''){
						addthissc = addthissc + ' align="'+jQuery('#ub_scg_buttons_align').val()+'"';
					}
								
					addthissc = '[button'+addthissc+']Button[/button]';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		
		//CTA
			if(jQuery('#ub_scg_select').val() == 'cta'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-cta" href="#" onclick="return false">Generate Code</a></div>');			
				
				
				jQuery('#sc-cta').click(function(){
					var addthissc = '[two_third]<p>Your call to action text goes here!</p>[/two_third]\n'+
					'[one_third last="yes"][button link="#" align="right"]CALL TO ACTION BUTTON![/button][/one_third]';
			
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}			
				});
			}
			
		
		
		//COLUMNS
			if(jQuery('#ub_scg_select').val() == 'columns'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Type:</label><select name="ub_scg_columns" id="ub_scg_columns" style="width: 200px;">'+
				'<option value="">-</option><option value="one half">One Half</option><option value="one third">One Third</option><option value="two third">Two Third</option>'+
				'<option value="one fourth">One Fourth</option><option value="three fourth">Three Fourth</option></select></div>'+		
				'<div class="ub_nu_input_field"><label>Is this the last box in the row?</label><input name="ub_scg_columns_last" id="ub_scg_columns_last" type="checkbox" value="yes" /> Yes</div>'+						
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '';
					var lastchild = '';
					
					if(jQuery('#ub_scg_columns_last').is(':checked')){
						var lastchild = ' last="yes"';
					}
					
					if(jQuery('#ub_scg_columns').val() == 'one half'){
						addthissc = '[one_half'+lastchild+']Your content goes here.[/one_half]';
					}
					
					if(jQuery('#ub_scg_columns').val() == 'one third'){
						addthissc = '[one_third'+lastchild+']Your content goes here.[/one_third]';
					}
					
					if(jQuery('#ub_scg_columns').val() == 'two third'){
						addthissc = '[two_third'+lastchild+']Your content goes here.[/two_third]';
					}
					
					if(jQuery('#ub_scg_columns').val() == 'one fourth'){
						addthissc = '[one_fourth'+lastchild+']Your content goes here.[/one_fourth]';
					}
					
					if(jQuery('#ub_scg_columns').val() == 'three fourth'){
						addthissc = '[three_fourth'+lastchild+']Your content goes here.[/three_fourth]';
					}
					
				
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
					
				});
			}
		
		
		
		//GOOGLE FONTS
			if(jQuery('#ub_scg_select').val() == 'gfonts'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Font Name:</label><input name="ub_scg_gfonts_name" id="ub_scg_gfonts_name" type="text" style="width: 200px;"></div>'+						
				'<div class="ub_nu_input_field"><label>Size:</label><input name="ub_scg_gfonts_size" id="ub_scg_gfonts_size" type="text" style="width: 60px;"> <span class="description">px</span></div>'+										
				'<div class="ub_nu_input_field"><label>CSS Stylings:</label><input name="ub_scg_gfonts_css" id="ub_scg_gfonts_css" type="text" style="width: 200px;"></div>'+						
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
								

					if(jQuery('#ub_scg_gfonts_name').val() != ''){
						addthissc = addthissc + ' name="'+jQuery('#ub_scg_gfonts_name').val()+'"';
					}								
								
					if(jQuery('#ub_scg_gfonts_size').val() != ''){
						addthissc = addthissc + ' size="'+jQuery('#ub_scg_gfonts_size').val()+'"';
					}
					
					if(jQuery('#ub_scg_gfonts_css').val() != ''){
						addthissc = addthissc + ' style="'+jQuery('#ub_scg_gfonts_css').val()+'"';
					}
								
					addthissc = '[font '+addthissc+']Your text goes here...[/font]';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		
		//GOOGLE MAPS
			if(jQuery('#ub_scg_select').val() == 'gmaps'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Valid Address:</label><input name="ub_scg_gmaps_addr" id="ub_scg_gmaps_addr" type="text" style="width: 200px;" /></div>'+														
				'<div class="ub_nu_input_field"><label>Window Height:</label><input name="ub_scg_gmaps_h" id="ub_scg_gmaps_h" type="text" style="width: 60px;" /> <span class="description">px or %</span></div>'+
				'<div class="ub_nu_input_field"><label>Zoom:</label><input name="ub_scg_gmaps_z" id="ub_scg_gmaps_z" type="text" style="width: 60px;" /> <span class="description">0-20</span></div>'+
				'<div class="ub_nu_input_field">&nbsp;</div>'+
				'<div class="ub_nu_input_field"><label>Info Window Content:</label><input name="ub_scg_gmaps_window" id="ub_scg_gmaps_window" type="text" style="width: 200px;" /> <span class="description">HTML is allowed</span></div>'+				
				'<div class="ub_nu_input_field"><label>Map type:</label><select name="ub_scg_gmaps_type" id="ub_scg_gmaps_type"><option value="">Default</option><option value="SATELLITE">Satellite</option><option value="HYBRID">Hybrid</option><option value="TERRAIN">Terrain</option></select></div>'+
				'<div class="ub_nu_input_field"><label>Hide Controls:</label><input name="ub_scg_gmaps_controls" id="ub_scg_gmaps_controls" type="checkbox" value="true" /> Yes</div>'+
				'<div class="ub_nu_input_field"><label>Show Marker:</label><input name="ub_scg_gmaps_marker" id="ub_scg_gmaps_marker" type="checkbox" value="true" /> Yes</div>'+
				'<div class="ub_nu_input_field"><label>Custom Marker Image:</label><input name="ub_scg_gmaps_markeri" id="ub_scg_gmaps_markeri" type="text" style="width: 200px;" /> <span class="description">URL to image</span></div>'+
								
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
			
					if(jQuery('#ub_scg_gmaps_addr').val() != ''){
						addthissc = addthissc + ' address="'+jQuery('#ub_scg_gmaps_addr').val()+'"';
					}				
				
					if(jQuery('#ub_scg_gmaps_h').val() != ''){
						addthissc = addthissc + ' height="'+jQuery('#ub_scg_gmaps_h').val()+';"';
					}
					
					if(jQuery('#ub_scg_gmaps_z').val() != ''){
						addthissc = addthissc + ' zoom="'+jQuery('#ub_scg_gmaps_z').val()+'"';
					}									
					
					if(jQuery('#ub_scg_gmaps_window').val() != ''){
						addthissc = addthissc + ' infowindow="'+jQuery('#ub_scg_gmaps_window').val()+'"';
					}				
					
					if(jQuery('#ub_scg_gmaps_type option:selected').val() != ''){
						addthissc = addthissc + ' maptype="'+jQuery('#ub_scg_gmaps_type').val()+'"';
					}			
					
					if(jQuery('#ub_scg_gmaps_controls').is(':checked') != ''){
						addthissc = addthissc + ' hidecontrols="true"';
					}
					
					if(jQuery('#ub_scg_gmaps_marker').is(':checked') != ''){
						addthissc = addthissc + ' marker="true"';
					}
					
					if(jQuery('#ub_scg_gmaps_markeri').val() != ''){
						addthissc = addthissc + ' markerimage="'+jQuery('#ub_scg_gmaps_markeri').val()+'"';
					}		
					
					
					addthissc = '[map'+addthissc+']';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		//HEADINGS
			if(jQuery('#ub_scg_select').val() == 'headings'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Title:</label><input name="ub_scg_headings_title" id="ub_scg_headings_title" type="text" style="width: 200px;" /> </div>'+
				'<div class="ub_nu_input_field"><label>Subtitle:</label><input name="ub_scg_headings_stitle" id="ub_scg_headings_stitle" type="text" style="width: 200px;" /></div>'+
				'<div class="ub_nu_input_field"><label>Style:</label><select name="ub_scg_headings_style" id="ub_scg_headings_style"><option value="1">Style #1</option><option value="2">Style #2</option><option value="3">Style #3</option></select></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
						
											
				jQuery('#sc-generate').click(function(){
					var addthissc = '[title';
				
					if(jQuery('#ub_scg_headings_title').val() != ''){
						addthissc = addthissc + ' title="'+jQuery('#ub_scg_headings_title').val()+'"';
					}	
					
					if(jQuery('#ub_scg_headings_stitle').val() != ''){
						addthissc = addthissc + ' subtitle="'+jQuery('#ub_scg_headings_stitle').val()+'"';
					}	
					
					if(jQuery('#ub_scg_headings_style option:selected').val() == '2'){
						addthissc = addthissc + ' style="2"';
					}	
					if(jQuery('#ub_scg_headings_style option:selected').val() == '3'){
						addthissc = addthissc + ' style="3"';
					}	
					
					addthissc = addthissc + ']';
		
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		
		//ICONS
			if(jQuery('#ub_scg_select').val() == 'icons'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Social Icon:</label><select name="ub_scg_icons_social" id="ub_scg_icons_social"><option value="blogger">Blogger</option><option value="deviantart">Deviantart</option><option value="digg">Digg</option><option value="Dribbble">Dribbble</option>'+
				'<option value="email">Email</option><option value="facebook">Facebook</option><option value="flickr">Flickr</option><option value="forrst">Forrst</option>'+
				'<option value="github">Github</option><option value="google+">Google +</option><option value="instagram">Instagram</option><option value="linkedin">LinkedIn</option><option value="picasa">Picasa</option>'+
				'<option value="pinterest">Pinterest</option><option value="rss">RSS</option><option value="skype">Skype</option><option value="soundcloud">SoundCloud</option><option value="tumblr">Tumblr</option>'+
				'<option value="twitter">Twitter</option><option value="vimeo">Vimeo</option><option value="wordpress">WordPress</option><option value="youtube">YouTube</option> </select></div>'+						
				'<div class="ub_nu_input_field"><label>or FontAwesome Icon Name:</label><input name="ub_scg_icons_fa" id="ub_scg_icons_fa" type="text" style="width: 200px;" /> <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Cheatsheet is here</a></div>'+						
				'<div class="ub_nu_input_field"><label>or Custom Icon Image URL:</label><input name="ub_scg_icons_custom" id="ub_scg_icons_custom" type="text" style="width: 200px;" /></div>'+						
				'<div class="ub_nu_input_field"><label>Icon Links to:</label><input name="ub_scg_icons_link" id="ub_scg_icons_link" type="text" style="width: 200px;" /></div>'+						
				'<div class="ub_nu_input_field"><label>Link target:</label><input name="ub_scg_icons_target" id="ub_scg_icons_target" type="text" style="width: 200px;" /></div>'+						
				'<div class="ub_nu_input_field"><label>Color:</label><input name="ub_scg_icons_color" id="ub_scg_icons_color" type="text" style="width: 200px;" /> <span class="description">for FontAwesome only, e.g.: #444444</span></div>'+						
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
								
					
					if(jQuery('#ub_scg_icons_custom').val() != ''){
						addthissc = addthissc + 'image="'+jQuery('#ub_scg_icons_custom').val()+'"';
					}			
					else if(jQuery('#ub_scg_icons_social option:selected').val() != ''){
						addthissc = addthissc + 'type="'+jQuery('#ub_scg_icons_social').val()+'"';
					}
					else if(jQuery('#ub_scg_icons_fa').val() != ''){
						addthissc = addthissc + 'name="'+jQuery('#ub_scg_icons_fa').val()+'"';
					}

					if(jQuery('#ub_scg_icons_link').val() != ''){
						addthissc = addthissc + ' link="'+jQuery('#ub_scg_icons_link').val()+'"';
					}				

					if(jQuery('#ub_scg_icons_target').val() != ''){
						addthissc = addthissc + ' target="'+jQuery('#ub_scg_icons_target').val()+'"';
					}						
					
					if(jQuery('#ub_scg_icons_color').val() != ''){
						addthissc = addthissc + ' color="'+jQuery('#ub_scg_icons_color').val()+'"';
					}						
								
					addthissc = '[icon '+addthissc+']';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
				
		
		
		//LITEUP
			if(jQuery('#ub_scg_select').val() == 'liteup'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Repeat forever:</label><input type="checkbox" id="ub_scg_liteup_repeat" name="ub_scg_liteup_repeat" value="forever" /> Yes</div>'+								
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
								
					
					if(jQuery('#ub_scg_liteup_repeat').is(':checked')){
						addthissc = addthissc + ' repeat="forever"';
					}			
								
					addthissc = '[liteup'+addthissc+']\n'+
					'[one_third]Column one[/one_third]\n'+
					'[one_third]Column two[/one_third]\n'+
					'[one_third last="yes"]Column three[/one_third]\n'+
					'[/liteup]';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		//NAVIGATION LINE
			if(jQuery('#ub_scg_select').val() == 'navi'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
								
						
					addthissc = '[navi]'+
						'<ul>\n'+
						'	<li><a href="#/empireii/homepage-layout-3/">LAYOUT STYLE 3</a></li>\n'+
						'	<li><a href="#/empireii/blog-masonry">MASONRY BLOG</a></li>\n'+
						'	<li><a href="#/empireii/portfolio">PORTFOLIO</a></li>\n'+
						'	<li><a href="#/empireii/typography">TYPOGRAPHY</a></li>\n'+
						'</ul>'+
						'[/navi]';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		//NEWS
		if(jQuery('#ub_scg_select').val() == 'news'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Posts Category to Display:</label><input name="ub_scg_news_category" id="ub_scg_news_category" type="text" style="width: 200px;" /> <span class="description">Slug name of Category</span></div>'+														
				'<div class="ub_nu_input_field"><label>Limit of posts</label><input type="text" id="ub_scg_news_limit" name="ub_scg_news_limit" style="width:40px;" /></div>'+								
				'<div class="ub_nu_input_field"><label>Show author</label><input type="checkbox" id="ub_scg_news_showauthor" name="ub_scg_news_showauthor" value="yes" /> Yes</div>'+								
				'<div class="ub_nu_input_field"><label>Show comments</label><input type="checkbox" id="ub_scg_news_showcomments" name="ub_scg_news_showcomments" value="yes" /> Yes</div>'+								
				'<div class="ub_nu_input_field"><label>Show category</label><input type="checkbox" id="ub_scg_news_showcategory" name="ub_scg_news_showcategory" value="yes" /> Yes</div>'+								
				'<div class="ub_nu_input_field"><label>Show excerpt</label><input type="checkbox" id="ub_scg_news_showexcerpt" name="ub_scg_news_showexcerpt" value="yes" /> Yes</div>'+								
				'<div class="ub_nu_input_field"><label>Show thumbnail</label><input type="checkbox" id="ub_scg_news_showthumb" name="ub_scg_news_showthumb" value="yes" /> Yes</div>'+								
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
						
					
					if(jQuery('#ub_scg_news_showauthor').is(':checked')){
						addthissc = addthissc + ' showauthor="yes"';
					}			
					if(jQuery('#ub_scg_news_showcomments').is(':checked')){
						addthissc = addthissc + ' showcomments="yes"';
					}			
					if(jQuery('#ub_scg_news_showcategory').is(':checked')){
						addthissc = addthissc + ' showcategory="yes"';
					}			
					if(jQuery('#ub_scg_news_showexcerpt').is(':checked')){
						addthissc = addthissc + ' showexcerpt="yes"';
					}			
					if(jQuery('#ub_scg_news_showthumb').is(':checked')){
						addthissc = addthissc + ' showthumb="yes"';
					}			
					

					if(jQuery('#ub_scg_news_limit').val() != ''){
						addthissc = addthissc + ' limit="'+jQuery('#ub_scg_news_limit').val()+'"';
					}						

					if(jQuery('#ub_scg_news_category').val() != ''){
						addthissc = addthissc + ' category="'+jQuery('#ub_scg_news_category').val()+'"';
					}										
						
					addthissc = '[news'+addthissc+']';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		//POSTS
			if(jQuery('#ub_scg_select').val() == 'posts'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Posts Category to Display:</label><input name="ub_scg_posts_cat" id="ub_scg_posts_cat" type="text" style="width: 200px;" /> <span class="description">Slug name of Category</span></div>'+														
				'<div class="ub_nu_input_field"><label>Columns:</label><select name="ub_scg_posts_col" id="ub_scg_posts_col"><option value="3">3</option><option value="2">2</option></select></div>'+										
				'<div class="ub_nu_input_field"><label>Number of Posts to Show:</label><input name="ub_scg_posts_limit" id="ub_scg_posts_limit" type="text" style="width: 60px;" /></div>'+																		
				'<div class="ub_nu_input_field"><label>Info column title:</label><input name="ub_scg_posts_infotitle" id="ub_scg_posts_infotitle" type="text" /> </div>'+										
				'<div class="ub_nu_input_field"><label>Info column description:</label><input name="ub_scg_posts_infotext" id="ub_scg_posts_infotext" type="text" /> </div>'+										
				'<div class="ub_nu_input_field"><label>Show Excerpt:</label><input name="ub_scg_posts_excerpt" id="ub_scg_posts_excerpt" type="checkbox" /> Yes</div>'+										
				'<div class="ub_nu_input_field"><label>Show Date:</label><input name="ub_scg_posts_date" id="ub_scg_posts_date" type="checkbox" /> Yes</div>'+										
				'<div class="ub_nu_input_field"><label>Show Category:</label><input name="ub_scg_posts_category" id="ub_scg_posts_category" type="checkbox" /> Yes</div>'+	
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '[posts';
				
					if(jQuery('#ub_scg_posts_cat').val() != ''){
						addthissc = addthissc + ' category="'+jQuery('#ub_scg_posts_cat').val()+'"';
					}	
					
					if(jQuery('#ub_scg_posts_col option:selected').val() != ''){
						addthissc = addthissc + ' columns="'+jQuery('#ub_scg_posts_col').val()+'"';
					}	
					
					if(jQuery('#ub_scg_posts_limit').val() != ''){
						addthissc = addthissc + ' limit="'+jQuery('#ub_scg_posts_limit').val()+'"';
					}						
					
					if(jQuery('#ub_scg_posts_infotitle').val() != ''){
						addthissc = addthissc + ' title="'+jQuery('#ub_scg_posts_infotitle').val()+'"';
					}	
					
					if(jQuery('#ub_scg_posts_infotext').val() != ''){
						addthissc = addthissc + ' description="'+jQuery('#ub_scg_posts_infotext').val()+'"';
					}	
					
					if(jQuery('#ub_scg_posts_excerpt').is(':checked') != ''){
						addthissc = addthissc + ' showexcerpt="yes"';
					}	
					
					if(jQuery('#ub_scg_posts_date').is(':checked') != ''){
						addthissc = addthissc + ' showdate="yes"';
					}	
					
					if(jQuery('#ub_scg_posts_category').is(':checked') != ''){
						addthissc = addthissc + ' showcategory="yes"';
					}	
					
					
					addthissc = addthissc + ']';
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});
			}
		
		
		
		
		
		
		//PORTFOLIO
			if(jQuery('#ub_scg_select').val() == 'portfolio'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Posts Category to Display:</label><input name="ub_scg_posts_cat" id="ub_scg_posts_cat" type="text" style="width: 200px;" /> <span class="description">Slug name of Category</span></div>'+														
				'<div class="ub_nu_input_field"><label>Columns:</label><select name="ub_scg_posts_col" id="ub_scg_posts_col"><option value="2">2</option><option value="3" selected="selected">3</option><option value="4">4</option></select></div>'+										
				'<div class="ub_nu_input_field"><label>Number of Posts to Show:</label><input name="ub_scg_posts_limit" id="ub_scg_posts_limit" type="text" style="width: 60px;" /></div>'+																						
				'<div class="ub_nu_input_field"><label>Show Title:</label><input name="ub_scg_posts_title" id="ub_scg_posts_title" type="checkbox" /> Yes</div>'+										
				'<div class="ub_nu_input_field"><label>Show Excerpt:</label><input name="ub_scg_posts_excerpt" id="ub_scg_posts_excerpt" type="checkbox" /> Yes</div>'+														
				'<div class="ub_nu_input_field"><label>Show Category:</label><input name="ub_scg_posts_category" id="ub_scg_posts_category" type="checkbox" /> Yes</div>'+	
				'<div class="ub_nu_input_field"><label>Text Alignment:</label><select name="ub_scg_posts_align" id="ub_scg_posts_align"><option value="">Left</option><option value="right">Right</option><option value="center">Center</option></select></div>'+										
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '[portfolio';
				
					if(jQuery('#ub_scg_posts_cat').val() != ''){
						addthissc = addthissc + ' category="'+jQuery('#ub_scg_posts_cat').val()+'"';
					}	
					
					if(jQuery('#ub_scg_posts_col option:selected').val() != ''){
						addthissc = addthissc + ' columns="'+jQuery('#ub_scg_posts_col').val()+'"';
					}	
					
					if(jQuery('#ub_scg_posts_limit').val() != ''){
						addthissc = addthissc + ' limit="'+jQuery('#ub_scg_posts_limit').val()+'"';
					}						
					
					
					if(jQuery('#ub_scg_posts_title').is(':checked') != ''){
						addthissc = addthissc + ' showtitle="yes"';
					}	
					
					if(jQuery('#ub_scg_posts_excerpt').is(':checked') != ''){
						addthissc = addthissc + ' showexcerpt="yes"';
					}	
					
					
					if(jQuery('#ub_scg_posts_category').is(':checked') != ''){
						addthissc = addthissc + ' showcategory="yes"';
					}	
					
					if(jQuery('#ub_scg_posts_align option:selected').val() != ''){
						addthissc = addthissc + ' align="'+jQuery('#ub_scg_posts_align option:selected').val()+'"';
					}
					
					addthissc = addthissc + ']';
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});
			}
		
		
		
		//PRICING TABLE
			if(jQuery('#ub_scg_select').val() == 'pricing'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Price:</label><input name="ub_scg_plan_price" id="ub_scg_plan_price" type="text" style="width: 60px;" /></div>'+		
				'<div class="ub_nu_input_field"><label>Per text:</label><input name="ub_scg_plan_per" id="ub_scg_plan_per" type="text" style="width: 200px;" /> <span class="description">(per year, per month, etc.)</span></div>'+		
				'<div class="ub_nu_input_field"><label>Plan Title:</label><input name="ub_scg_plan_title" id="ub_scg_plan_title" type="text" style="width: 200px;" /></div>'+		
				'<div class="ub_nu_input_field"><label>Button Text:</label><input name="ub_scg_plan_button_text" id="ub_scg_plan_button_text" type="text" style="width: 200px;" /></div>'+		
				'<div class="ub_nu_input_field"><label>Button Link:</label><input name="ub_scg_plan_button_link" id="ub_scg_plan_button_link" type="text" style="width: 200px;" /></div>'+		
				'<div class="ub_nu_input_field"><label>Highlight This Table:</label><input name="ub_scg_plan_bold" id="ub_scg_plan_bold" type="checkbox" /> Yes</div>'+	
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
				
				
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '[plan';
				
					if(jQuery('#ub_scg_plan_price').val() != ''){
						addthissc = addthissc + ' price="'+jQuery('#ub_scg_plan_price').val()+'"';
					}	
					
					if(jQuery('#ub_scg_plan_per').val() != ''){
						addthissc = addthissc + ' per="'+jQuery('#ub_scg_plan_per').val()+'"';
					}					
					
					if(jQuery('#ub_scg_plan_title').val() != ''){
						addthissc = addthissc + ' title="'+jQuery('#ub_scg_plan_title').val()+'"';
					}	
					
					if(jQuery('#ub_scg_plan_button_text').val() != ''){
						addthissc = addthissc + ' button="'+jQuery('#ub_scg_plan_button_text').val()+'"';
					}	
					
					if(jQuery('#ub_scg_plan_button_link').val() != ''){
						addthissc = addthissc + ' link="'+jQuery('#ub_scg_plan_button_link').val()+'"';
					}	
				
					if(jQuery('#ub_scg_plan_bold').is(':checked') != ''){
						addthissc = addthissc + ' bold="yes"';
					}	
					
					addthissc = addthissc + ']<ul>\n'+
					'<li>Feature list</li>\n'+
					'<li>Feature list</li>\n'+
					'<li>Feature list</li>\n'+
					'<li>...</li>\n'+
					'</ul>[/plan]';
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
				});
				
			}
			
		
		
		
		//RESPONSIVE DISPLAY			
			if(jQuery('#ub_scg_select').val() == 'responsive'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Target Device:</label><select name="ub_scg_resp_device" id="ub_scg_resp_device"><option value="desktop">Desktop</option><option value="tablet">Tablet</option><option value="mobile">Mobile</option></select></div>'+						
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');		

				jQuery('#sc-generate').click(function(){
					var addthissc = '';
								

					if(jQuery('#ub_scg_resp_device option:selected').val() != ''){
						addthissc = addthissc + 'device="'+jQuery('#ub_scg_resp_device').val()+'"';
					}								
								
					addthissc = '[respo '+addthissc+'] Your content goes here... [/respo]';
								
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});			
			}
		
		
		
		//TABLE
			if(jQuery('#ub_scg_select').val() == 'table1'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-table1" href="#" onclick="return false">Generate Code</a></div>');			
				jQuery('#sc-table1').click(function(){
					var addthissc = '<table>\n'+
					'	<thead>\n'+
					'		<tr>\n'+
					'			<th>COLUMN 1</th>\n'+
					'			<th>COLUMN 2</th>\n'+
					'			<th>COLUMN 3</th>\n'+
					'			<th style="text-align: right;">COLUMN 4</th>\n'+
					'		</tr>\n'+
					'	</thead>\n'+
					'	<tbody>\n'+
					'		<tr>\n'+
					'			<td>Product #1</td>\n'+
					'			<td>Description</td>\n'+
					'			<td>Another Field</td>\n'+
					'			<td style="text-align: right;">&euro;1.00</td>\n'+
					'		</tr>\n'+
					'	</tbody>\n'+
					'</table>\n';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
				});
			}
			
			
			if(jQuery('#ub_scg_select').val() == 'table2'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-table1" href="#" onclick="return false">Generate Code</a></div>');			
				jQuery('#sc-table1').click(function(){
					var addthissc = '<table class="style2">\n'+
					'	<thead>\n'+
					'		<tr>\n'+
					'			<th>COLUMN 1</th>\n'+
					'			<th>COLUMN 2</th>\n'+
					'			<th>COLUMN 3</th>\n'+
					'			<th style="text-align: right;">COLUMN 4</th>\n'+
					'		</tr>\n'+
					'	</thead>\n'+
					'	<tbody>\n'+
					'		<tr>\n'+
					'			<td>Product #1</td>\n'+
					'			<td>Description</td>\n'+
					'			<td>Another Field</td>\n'+
					'			<td style="text-align: right;">&euro;1.00</td>\n'+
					'		</tr>\n'+
					'	</tbody>\n'+
					'</table>\n';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
				});
			}
		
		
		
		//HORIZONTAL TAB
			if(jQuery('#ub_scg_select').val() == 'tab'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '\n[tabs titles="TAB ONE, TAB TWO, TAB THREE"]\n'+
					'	[tab]Tab One Content[/tab]\n'+
					'	[tab]Tab Two Content[/tab]\n'+
					'	[tab]Tab Three Content[/tab]\n'+
					'[/tabs]\n';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
				});
			}
		
		
		
		
		//rulers
			if(jQuery('#ub_scg_select').val() == 'rulers'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Style:</label><select name="ub_scg_hr_style" id="ub_scg_hr_style">'+
				'<option value="1">Style #1</option><option value="2">Style #2</option><option value="3">Style #3</option></select></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
						
											
				jQuery('#sc-generate').click(function(){
					var addthissc = '[hr';
				
					if(jQuery('#ub_scg_hr_style option:selected').val() != ''){
						addthissc = addthissc + jQuery('#ub_scg_hr_style option:selected').val();
					}	
					
					addthissc = addthissc + ']';
		
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		
		//TESTEMONIAL
			if(jQuery('#ub_scg_select').val() == 'testemonial'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Author</label><input name="ub_scg_testemonial_author" id="ub_scg_testemonial_author" type="text" style="width: 200px;" /></div>'+
				'<div class="ub_nu_input_field"><label>Company</label><input name="ub_scg_testemonial_company" id="ub_scg_testemonial_company" type="text" style="width: 200px;" /></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){
					var addthissc = '[testemonial';
					
					if(jQuery('#ub_scg_testemonial_author').val() != ''){
						addthissc = addthissc+' author="'+jQuery('#ub_scg_testemonial_author').val()+'"';
					}
					
					if(jQuery('#ub_scg_testemonial_company').val() != ''){
						addthissc = addthissc+' company="'+jQuery('#ub_scg_testemonial_company').val()+'"';
					}
				 
					addthissc = addthissc + ']Client quote text...[/testemonial]';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		
		//TESTEMONIALS
			if(jQuery('#ub_scg_select').val() == 'testemonials'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '[testemonials]\n'+
					'	[testemonial author="Client #1" company="Company #1"]Quote text #1[/testemonial]\n'+
					'	[testemonial author="Client #2" company="Company #2"]Quote text #2[/testemonial]\n'+
					'[/testemonials]';
			
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}		
				});
			}
		
		
		
		//TOGGLES
			if(jQuery('#ub_scg_select').val() == 'toggles'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Toggle Title:</label><input name="ub_scg_toggle_title" id="ub_scg_toggle_title" type="text" style="width: 200px;" /></div>'+						
				'<div class="ub_nu_input_field"><label>Open on start</label><input name="ub_scg_toggle_open" id="ub_scg_toggle_open" type="checkbox" value="yes" /> Yes</div>'+	
				'<div class="ub_nu_input_field"><label>Custom Image URL:</label><input name="ub_scg_toggle_image" id="ub_scg_toggle_image" type="text" style="width: 200px;" /> <span class="description">(Optional)</span></div>'+						
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');			
				
				jQuery('#sc-generate').click(function(){
					var addthissc = '[toggle';
				
					if(jQuery('#ub_scg_toggle_title').val() != ''){
						addthissc = addthissc + ' title="'+jQuery('#ub_scg_toggle_title').val()+'"';
					}	
					
					if(jQuery('#ub_scg_toggle_open').is(':checked')){
						addthissc = addthissc + ' open="yes"';
					}
					
					if(jQuery('#ub_scg_toggle_image').val() != ''){
						addthissc = addthissc + ' image="'+jQuery('#ub_scg_toggle_image').val()+'"';
					}	
					
					addthissc = addthissc + '] Your content... [/toggle]';
					
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}
					
				});
			}

		
		
		//CIRCLED LETTER
			if(jQuery('#ub_scg_select').val() == 'circled'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Letter to be in Circle:</label><input name="ub_scg_circled_letter" id="ub_scg_circled_letter" type="text" style="width: 30px;" /></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){
					var addthissc = '[circle]';
					
					if(jQuery('#ub_scg_circled_letter').val() != ''){
						addthissc = addthissc + jQuery('#ub_scg_circled_letter').val();
					}
				
					addthissc = addthissc + '[/circle]';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		//CUTTED NUMBERS
			if(jQuery('#ub_scg_select').val() == 'numbers'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Number to display:</label><input name="ub_scg_number" id="ub_scg_number" type="text" style="width: 30px;" /></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){
					var addthissc = '[num]';
					
					if(jQuery('#ub_scg_number').val() != ''){
						addthissc = addthissc + jQuery('#ub_scg_number').val();
					}
				
					addthissc = addthissc + '[/num]';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		
		//DROPCAP LETTER
			if(jQuery('#ub_scg_select').val() == 'dropcap'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Letter:</label><input name="ub_scg_dropcap_letter" id="ub_scg_dropcap_letter" type="text" style="width: 30px;" /></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){
					var addthissc = '[dropcap]';
					
					if(jQuery('#ub_scg_dropcap_letter').val() != ''){
						addthissc = addthissc + jQuery('#ub_scg_dropcap_letter').val();
					}
				
					addthissc = addthissc + '[/dropcap]';
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		
		
		//QUOTE
			if(jQuery('#ub_scg_select').val() == 'quote'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Type:</label><select name="ub_scg_quote_type" id="ub_scg_quote_type">'+
				'<option value="">Classic</option><option value="modern">Modern</option>'+
				'</select></div>'+
				'<div class="ub_nu_input_field"><label>Alignment:</label><select name="ub_scg_quote_align" id="ub_scg_quote_align">'+
				'<option value="">None</option><option value="left">Left</option><option value="right">Right</option>'+
				'</select></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){				
					var addthissc = '';
					
					if(jQuery('#ub_scg_quote_align option:selected').val() == ''){
						addthissc = '<blockquote';
						if(jQuery('#ub_scg_quote_type option:selected').val() == 'modern'){
							addthissc = addthissc + ' type="modern"';
						}
						addthissc = addthissc + '>Your text...</blockquote>';
					}
					
					
					if(jQuery('#ub_scg_quote_align option:selected').val() == 'left' || jQuery('#ub_scg_quote_align option:selected').val() == 'right' ){
						addthissc = '[pullquote';
						if(jQuery('#ub_scg_quote_type option:selected').val() == 'modern'){
							addthissc = addthissc + ' type="modern"';
						}
						addthissc = addthissc + ' align="'+jQuery('#ub_scg_quote_align option:selected').val()+'"]Your text...[/pullquote]';
					}
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
		
		
		
		
		
		//LISTS
			if(jQuery('#ub_scg_select').val() == 'list'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Type:</label><select name="ub_scg_list_type" id="ub_scg_list_type">'+
				'<option value="ul">Unordered List</option><option value="ol">Ordered List</option><option value="circle">List with Circle</option><option value="arrow">List with Arrow</option>'+
				'</select></div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){				
					var addthissc = '';
					
					if(jQuery('#ub_scg_list_type option:selected').val() == 'ul'){
						addthissc = '<ul>\n'+
						'	<li>Item One</li>\n'+
						'	<li>Item Two</li>\n'+
						'	<li>...</li>\n'+
						'</ul>';
					}
					else if(jQuery('#ub_scg_list_type option:selected').val() == 'ol'){
						addthissc = '<ol>\n'+
						'	<li>Item One</li>\n'+
						'	<li>Item Two</li>\n'+
						'	<li>...</li>\n'+
						'</ol>';
					}
					else if(jQuery('#ub_scg_list_type option:selected').val() == 'circle'){
						addthissc = '<ul class="circle">\n'+
						'	<li>Item One</li>\n'+
						'	<li>Item Two</li>\n'+
						'	<li>...</li>\n'+
						'</ul>';
					}
					else if(jQuery('#ub_scg_list_type option:selected').val() == 'arrow'){
						addthissc = '<ul class="arrow">\n'+
						'	<li>Item One</li>\n'+
						'	<li>Item Two</li>\n'+
						'	<li>...</li>\n'+
						'</ul>';
					}
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
		
				
		
		
			
		
		//VSPACE
			if(jQuery('#ub_scg_select').val() == 'vspace'){
				jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Vertical Size</label><input name="ub_scg_vspace_height" id="ub_scg_vspace_height" type="text" style="width: 50px;" />px</div>'+
				'<div class="ub_nu_input_field"><label>&nbsp;</label><a class="button-secondary" id="sc-generate" href="#" onclick="return false">Generate Code</a></div>');	

				jQuery('#sc-generate').click(function(){
					var addthissc = '[vspace]';
					
					if(jQuery('#ub_scg_vspace_height').val() != ''){
						addthissc = '[vspace size="'+jQuery('#ub_scg_vspace_height').val()+'px"]';
					}
				
				
					if(jQuery('#new-meta-boxes .inside #display_sc').length){
						jQuery('#new-meta-boxes .inside #display_sc').text(addthissc);					
					}else{
						jQuery('#new-meta-boxes .inside').append('<div class="ub_nu_input_field"><label>Paste this code above into the Editor:</label><textarea id="display_sc">'+addthissc+'</textarea>');					
					}						
					
				});
			}
			
			
			
		
		
	});

	
});
