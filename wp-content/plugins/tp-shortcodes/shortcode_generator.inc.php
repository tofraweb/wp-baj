<?php

// shortcode generator
	$tp_scgen_new_meta_boxes  = array(
		"sc_gen" => array(
		"name" => "ub_sc_generator",
		"std" => "",
		"title" => __("Shortcode Genarator","empire")
		)
	);

	function tp_scgen_new_meta_boxes() {
		global $post, $tp_scgen_new_meta_boxes;
		 
		foreach($tp_scgen_new_meta_boxes as $meta_box) {
			$meta_box_value = get_post_meta($post->ID, $meta_box['name'].'_position', true);
			 

			echo'<div class="ub_input_field"><label>'.__("Select a shortcode:","empire").'</label>
			<select id="ub_scg_select" name="'.$meta_box['name'].'_type" id="'.$meta_box['name'].'_type" style="width: 200px; float: left;">
				<option value="">-</option>
				
				<option value="audio"'; if($meta_box_value == 'audio'){print ' selected="selected"';} print '>Audio Player</option>	
				
				<option value="buttons"'; if($meta_box_value == 'buttons'){print ' selected="selected"';} print '>Buttons</option>						
				
				<option value="cta"'; if($meta_box_value == 'cta'){print ' selected="selected"';} print '>Call to Action</option>						
				
				<option value="columns"'; if($meta_box_value == 'columns'){print ' selected="selected"';} print '>Columns</option>						
								
				<option value="gfonts"'; if($meta_box_value == 'gfonts'){print ' selected="selected"';} print '>Google Fonts</option>						
				
				<option value="gmaps"'; if($meta_box_value == 'gmaps'){print ' selected="selected"';} print '>Google Map</option>										
				
				<option value="headings"'; if($meta_box_value == 'headings'){print ' selected="selected"';} print '>Headings</option>						
				
				<option value="icons"'; if($meta_box_value == 'icons'){print ' selected="selected"';} print '>Icons</option>	
				
				<option value="liteup"'; if($meta_box_value == 'liteup'){print ' selected="selected"';} print '>LiteUp</option>	
				
				<option value="navi"'; if($meta_box_value == 'navi'){print ' selected="selected"';} print '>Navigation Line</option>						
				
				<option value="news"'; if($meta_box_value == 'news'){print ' selected="selected"';} print '>News</option>						
				
				<option value="posts"'; if($meta_box_value == 'posts'){print ' selected="selected"';} print '>Posts in Carousel</option>						
				
				<option value="portfolio"'; if($meta_box_value == 'portfolio'){print ' selected="selected"';} print '>Portfolio/Posts</option>
				
				<option value="pricing"'; if($meta_box_value == 'pricing'){print ' selected="selected"';} print '>Pricing Table</option>
				
				<option value="responsive"'; if($meta_box_value == 'rulers'){print ' selected="selected"';} print '>Responsive Display</option>														

				<option value="rulers"'; if($meta_box_value == 'rulers'){print ' selected="selected"';} print '>Rulers</option>		
								
				<optgroup label="Tables">
					<option value="table1"'; if($meta_box_value == 'table1'){print ' selected="selected"';} print '>Table Style #1</option>		
					<option value="table2"'; if($meta_box_value == 'table2'){print ' selected="selected"';} print '>Table Style #2</option>							
				</optgroup>
				
				<option value="tab"'; if($meta_box_value == 'tab'){print ' selected="selected"';} print '>Tabs</option>						
												
				<option value="testemonial"'; if($meta_box_value == 'testemonial'){print ' selected="selected"';} print '>Testemonial</option>	
				
				<option value="testemonials"'; if($meta_box_value == 'testemonials'){print ' selected="selected"';} print '>Testemonials</option>	
			
				<option value="toggles"'; if($meta_box_value == 'toggles'){print ' selected="selected"';} print '>Toggles</option>						
			
				<optgroup label="Typography">										
					<option value="circled"'; if($meta_box_value == 'circled'){print ' selected="selected"';} print '>Circled Letter</option>						
					<option value="numbers"'; if($meta_box_value == 'numbers'){print ' selected="selected"';} print '>Cutted Numbers</option>						
					<option value="dropcap"'; if($meta_box_value == 'dropcap'){print ' selected="selected"';} print '>Dropcap</option>						
					<option value="list"'; if($meta_box_value == 'list'){print ' selected="selected"';} print '>List</option>						
					<option value="quote"'; if($meta_box_value == 'quote'){print ' selected="selected"';} print '>Quote</option>						
				</optgroup>	
			
				<option value="vspace"'; if($meta_box_value == 'vspace'){print ' selected="selected"';} print '>Vertical Space</option>						
			
			</select></div>';	
			
			
		}
				
	}

	function tp_scgen_create_meta_box() {
		global $theme_name;
		if ( function_exists('add_meta_box') ) {
			add_meta_box( 'new-meta-boxes', 'Shortcode Generator', 'tp_scgen_new_meta_boxes', 'post', 'normal', 'high' );
			add_meta_box( 'new-meta-boxes', 'Shortcode Generator', 'tp_scgen_new_meta_boxes', 'page', 'normal', 'high' );
		}
	}

	add_action('admin_menu', 'tp_scgen_create_meta_box');
	
	
?>