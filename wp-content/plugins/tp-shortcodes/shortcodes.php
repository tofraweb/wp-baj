<?php


/******************************************************************/		
//TITLES
	function tp_title($atts, $content = null){
		extract(shortcode_atts(array(
		'style' => '',
		'title' => '',
		'subtitle' => ''
		), $atts));

		
		if($style == "2"){
			$output = '<div class="tp-title-2"><div class="tp-title-2-left">&nbsp;</div><div class="tp-title-2-center"><h1>'.$title;
				if(!empty($subtitle)){
					$output .= '<br /><span class="sub">'.$subtitle.'</span>';
				}		
			$output .= '</h1></div><div class="tp-title-2-right">&nbsp;</div></div>';
		}elseif($style == '3'){
			$output = '<div class="tp-title-3"><div class="tp-title-3-left">&nbsp;</div><div class="tp-title-3-center"><h1>'.$title;
				if(!empty($subtitle)){
					$output .= '<br /><span class="sub">'.$subtitle.'</span>';
				}		
			$output .= '</h1></div><div class="tp-title-3-right">&nbsp;</div></div>';
		
		}else{
			$output = '<h1 class="tp-title"><span class="bg">'.$title.'</span>'.$title;
				if(!empty($subtitle)){
					$output .= '<br /><span class="sub">'.$subtitle.'</span>';
				}		
			$output .= '</h1>';
		}
		
		
		return $output;
	}
	add_shortcode("title", "tp_title");




/******************************************************************/		
// BUTTONS
	function ub_buttons($atts, $content = null){
		extract(shortcode_atts(array(		
		'link' => '',
		'color' => '',
		'image' => '',
		'align' => ''
		), $atts));


		
		$class = 'button';
		if($align == 'right'){
			$class .= ' alignright';		
		}

		
		//color
		$style = '';
		if($color != ''){
			$style = ' style="background-color:'.$color.'"'; 
		}
		
				
		//image		 
		if(!empty($image)){
			$image = '<img src="'.$image.'" alt="button image" />';
		}else{
			$image = '';
		}
		
		return '<a href="'.$link.'" class="'.$class.'"'.$style.'>'.$image.$content.'</a>';
	}
	add_shortcode("button", "ub_buttons");





/******************************************************************/		
// COLUMNS	
	function tp_col_one_half($atts, $content = null){
		extract(shortcode_atts(array(
		'last' => '',
		'separator' => ''
		), $atts));

		$last_child = '';
		if($last == 'yes'){
			$last_child = ' last';
		}
		
		if($separator == 'yes'){
			$separator = ' column-separator';
		}
		
		if($last == 'yes'){
			return '<div class="col one_half'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>			
			<div class="clear">&nbsp;</div>';
		}else{
			return '<div class="col one_half'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>';
		}
		
	}
	add_shortcode("one_half", "tp_col_one_half");



	function tp_col_one_third($atts, $content = null){
		extract(shortcode_atts(array(
		'last' => '',
		'separator' => ''
		), $atts));

		$last_child = '';
		if($last == 'yes'){
			$last_child = ' last';
		}
		
		if($separator == 'yes'){
			$separator = ' column-separator';
		}
		
		if($last == 'yes'){
			return '<div class="col one_third'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>
			<div class="clear">&nbsp;</div>';
		}else{
			return '<div class="col one_third'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>';
		}
	}
	add_shortcode("one_third", "tp_col_one_third");



	function tp_col_two_third($atts, $content = null){
		extract(shortcode_atts(array(
		'last' => '',
		'separator' => ''
		), $atts));

		$last_child = '';
		if($last == 'yes'){
			$last_child = ' last';
		}
		
		if($separator == 'yes'){
			$separator = ' column-separator';		
		}
		
		if($last == 'yes'){
			return '<div class="col two_third'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>
			<div class="clear">&nbsp;</div>';
		}else{
			return '<div class="col two_third'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>';
		}
		
	}
	add_shortcode("two_third", "tp_col_two_third");



	function tp_col_one_fourth($atts, $content = null){
		extract(shortcode_atts(array(
		'last' => '',
		'separator' => ''
		), $atts));

		$last_child = '';
		if($last == 'yes'){
			$last_child = ' last';
		}
		
		if($separator == 'yes'){
			$separator = ' column-separator';
		}
		
		
		if($last == 'yes'){
			return '<div class="col one_fourth'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>
			<div class="clear">&nbsp;</div>';
		}else{
			return '<div class="col one_fourth'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>';
		}
	}
	add_shortcode("one_fourth", "tp_col_one_fourth");



	function tp_col_three_fourth($atts, $content = null){
		extract(shortcode_atts(array(
		'last' => '',
		'separator' => ''
		), $atts));

		$last_child = '';
		if($last == 'yes'){
			$last_child = ' last';
		}
		
		if($separator == 'yes'){
			$separator = ' column-separator';
		}
		
		if($last == 'yes'){
			return '<div class="col three_fourth'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>
			<div class="clear">&nbsp;</div>';
		}else{
			return '<div class="col three_fourth'.$last_child.$separator.'">'.force_balance_tags(do_shortcode($content)).'</div>';
		}
	}
	add_shortcode("three_fourth", "tp_col_three_fourth");

	
	
	
/******************************************************************/	
// NUMBER
	function tp_num($atts, $content = null){		

		return '<span class="num">'.$content.'</span>';
	}
	add_shortcode("num", "tp_num");


	
	
/******************************************************************/		
// RULERS	
	function tp_hr(){			
		return '<hr />';
	}
	add_shortcode("hr", "tp_hr");

	function tp_hr_b(){			
		return '<hr class="hr2" />';
	}
	add_shortcode("hr2", "tp_hr_b");
	
	function tp_hr_c(){			
		return '<hr class="hr3" />';
	}
	add_shortcode("hr3", "tp_hr_c");
	

	
	

	
/******************************************************************/		
// LITE UP
	function tp_lite_up($atts, $content = null){	
		extract(shortcode_atts(array(
		'repeat' => '',		
		'delay' => ''		
		), $atts));
		
		
		if($repeat == 'forever'){
			$repeat = ' data-repeat="forever"';
		}else{
			$repeat = '';
		}
		
		$delay = '';
		if(!empty($delay)){
			$delay = ' data-delay="'.$delay.'"';
		}else{
			$delay = '';
		}
		
		return '<div class="liteup"'.$repeat.$delay.'>'.do_shortcode($content).'</div>';
	}
	add_shortcode("liteup", "tp_lite_up");


	
/******************************************************************/	
// POSTS / CAROUSEL	
	function tp_posts($atts, $content = null){
		extract(shortcode_atts(array(    
		'limit' => '',
		'columns' => '',
		'category' => '',
		'title' => '',
		'description' => '',		
		'showexcerpt' => '',
		'showdate' => '',
		'showcategory' => ''
		), $atts));	
		
		
			if($columns == '2'){
				$genclass = 'col one_half';			
				$genclassb = 'col one_half last';
			}else{
				$genclass = 'col one_third';
				$genclassb = 'col two_third last';
				$columns = '3';
			}
		
		
		$output = '
		<div class="tp-sc-posts" data-cols="'.($columns-1).'" data-clicks="0">
			';
		
			
			
			
		//if title & description exists, use first column to show it
			if((!empty($title) || !empty($description)) AND $columns > 1){
				$output .= '<div class="'.$genclass.' info">';
				if(!empty($title)){
					$output .= '<h3 class="tp-title"><span class="bg">'.$title.'</span>'.$title.'</h3>';
				}
				if(!empty($description)){
					$output .= '<p>'.$description.'</p>';
				}
				
				//navigation
					$output .= '<div class="nav"><a href="#" id="left"></a><a href="#" id="right"></a></div>';
				
				
				$output .= '</div>';
			}
			
			
		//get posts			
			$output .= '
			<div class="holder '.$genclassb.'">
				<div class="mover">';
			
				if(empty($limit)){ $limit = '-1'; }			
				$the_query = new WP_Query( array(				
					'post_type' => 'post',
					'category_name' => $category,
					'posts_per_page' => $limit
				) );
				
				while($the_query->have_posts()){
					$the_query->the_post();
					
					
					$output .= '<div class="'.$genclass.'">';
					
					if(has_post_thumbnail()){
						if(get_post_format() == 'video' || get_post_format() == 'audio'){
							$icon = '<div class="tpicon-play"></div>';
						}else{
							$icon = '<div class="tpicon-visit"></div>';
						}
					
						if($columns == '2'){						
							$output .= '<a href="'.get_permalink().'" class="thumb">'.get_the_post_thumbnail( get_the_ID(), 'masonry-thumb').'<div class="hover">'.$icon.'</div></a>';
						}else{
							$output .= '<a href="'.get_permalink().'" class="thumb">'.get_the_post_thumbnail( get_the_ID(), 'post-thumbnail').'<div class="hover">'.$icon.'</div></a>';
						}
					}
					
					
					$output .= '<h3>';
					
					if(!empty($showdate)){
						$output .= '<span class="date">'.get_the_date().'</span><br />';
					}
					
					$output .= '<a href="'.get_permalink().'">'.get_the_title().'</a>';
					
					if(!empty($showcategory)){
						$output .= '<br /><span class="category">'.str_replace('rel="category"','',get_the_category_list( __( ', ', 'empire' ) )).'</span>';
					}
					
					$output .= '</h3>';
					
					
					if($showexcerpt == 'yes' || $showexcerpt == 'true'){
						$output .= '<p class="excerpt">'.get_the_excerpt().'</p>';
					}
					
					
					
					$output .= '</div>';
				};
				wp_reset_query();
				
			
			$output .= '
				</div><!-- end of .mover -->
			</div><!-- end of .holder -->';
				
				
		$output .= '
			
		</div><!-- end of .tp-sc-posts -->
		<script>
		if(parseInt(jQuery(window).width()) < 733){
			var tpscpw = jQuery(\'.tp-sc-posts\').outerWidth();
			jQuery(\'.tp-sc-posts .mover .col\').css(\'width\',tpscpw+\'px\');				
			jQuery(window).resize(function(){
				jQuery(\'.tp-sc-posts .mover\').css(\'marginLeft\',\'0px\');
				jQuery(\'.tp-sc-posts\').attr(\'data-clicks\',\'0\');
				tpscpw = jQuery(\'.tp-sc-posts\').outerWidth();				
				jQuery(\'.tp-sc-posts .mover .col\').css(\'width\',tpscpw+\'px\');				
			});
		}
		</script>';
		
		return $output;
				
	}
	add_shortcode("posts", "tp_posts");
		


/******************************************************************/	
// PORTFOLIO
	function tp_portfolio($atts, $content = null){
		extract(shortcode_atts(array(
		'category' => '',
		'columns' => '',
		'limit' => '',	
		'showtitle' => '',	
		'showexcerpt' => '',	
		'showcategory' => '',
		'align' => ''		
		), $atts));	
	
	
		if(empty($align)){
			$align = '';
		}
	
		$output = '
		<div class="tp-sc-pfolio '.$align.'">
		';
		
		if($columns == '4'){
			$genclass = 'col one_fourth';
		}elseif($columns == '2'){
			$genclass = 'col one_half';
		}else{
			//default - 3 cols
			$genclass = 'col one_third';		
			$columns = '3';
		}
	
	
		if(empty($limit)){ $limit = '-1'; }

		
		$the_query = new WP_Query( array(				
			'post_type' => 'post',
			'category_name' => $category,
			'posts_per_page' => $limit
		) );
		
		
		$colctr = '0';
		
		while($the_query->have_posts()){
			$the_query->the_post();
			
			$colctr++;
			if($colctr == $columns){
				$output .= '<div class="'.$genclass.' last">';
				$colctr = '0';
			}elseif($colctr == '1'){
				$output .= '<div class="'.$genclass.' clear">';
			}else{
				$output .= '<div class="'.$genclass.'">';
			}
		
			//thumb
			if(has_post_thumbnail()){				
				if(get_post_format() == 'video' || get_post_format() == 'audio'){
					$icon = '<a href="'.wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ).'" class="thickbox"><div class="tpicon-pop"></div></a> <a href="'.get_permalink().'"><div class="tpicon-play"></div></a>';
				}else{
					$icon = '<a href="'.wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ).'" class="thickbox"><div class="tpicon-pop"></div></a> <a href="'.get_permalink().'"><div class="tpicon-play"></div></a>';
				}
			
					if($columns == '2'){						
						$output .= '<a href="'.get_permalink().'"><div class="thumb">'.get_the_post_thumbnail( get_the_ID(), 'portfolio-thumb').'<div class="hover">'.$icon.'</div></div></a>';
					}else{
						$output .= '<a href="'.get_permalink().'"><div class="thumb">'.get_the_post_thumbnail( get_the_ID(), 'post-thumbnail').'<div class="hover">'.$icon.'</div></div></a>';
					}
				
			}
			
			//title
			if(!empty($showtitle)){
				$output .= '<h3><a href="'.get_permalink().'">'.get_the_title().'</a>';				
			}
			
			//category
			if(!empty($showcategory)){
				$idObj = get_category_by_slug($category); 
				$pfolio_cat_id = $idObj->term_id;
			
				if(!empty($showtitle)){
					$output .= '<br />';
				}
				
				$output .= '<span class="category">';			
								
				$cats = get_the_category(get_the_ID());
				unset($oparr);
				if(!empty($cats)){					
					foreach($cats as $cat){
						if($cat->parent == $pfolio_cat_id){
							$oparr[] = $cat->cat_name;
						}
					}
				}
				
				if(!empty($oparr)){
					$output .= implode(', ',$oparr);
				}
				
				
				$output .= '</span>';
			}
					
			$output .= '</h3>';
					
			//excerpt
			if(!empty($showexcerpt) && has_excerpt()){
				$output .= '<p class="excerpt">'.get_the_excerpt().'</p>';
			}
			
			
			
			$output .= '</div>';
		};
		wp_reset_query();
	
		$output .= '</div>';
	
		return $output;
				
	}
	add_shortcode("portfolio", "tp_portfolio");
	
	
	
	
	


/******************************************************************/	
// NEWS
	function tp_news($atts, $content = null){
		extract(shortcode_atts(array(
		'category' => '',
		'limit' => '',
		'showauthor' => '',
		'showcomments' => '',
		'showcategory' => '',
		'showexcerpt' => '',
		'showthumb' => ''
		), $atts));	
	
		$output = '';
	
		if(empty($limit)){ $limit = '-1'; }		
		$the_query = new WP_Query( array(				
			'post_type' => 'post',
			'category_name' => $category,
			'posts_per_page' => $limit
		) );
		
		
		$oparray = Array();
		while($the_query->have_posts()){
			$the_query->the_post();
			
			unset($oparray);
			
			$output .= '
			<div class="tp-news">';
						
				if(!empty($showthumb) && has_post_thumbnail()){
					$src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'masonry-thumb' );
					$output .= '<a href="'.get_permalink().'"><div class="thumb" style="background-image: url(\''.$src[0].'\');"></div></a>';
				}
			
				$output .= '
				<div class="date"><a href="'.get_permalink().'">'.get_the_date('d').'<br /><span>'.get_the_date('M Y').'</span></a></div>
				<div class="text">
					<p class="title"><a href="'.get_permalink().'">'.get_the_title().'</a></p>
					';
						//author
						if(!empty($showauthor)){
							$oparray[] = __('by','empire').' '.get_the_author();
						}
						
						//category
						if(!empty($showcategory)){
							$oparray[] = str_replace('rel="category"','',get_the_category_list( __( ', ', 'empire' ) ));
						}
						
						//comments
						if(!empty($showcomments)){
							$num_comments = get_comments_number();
							if ( $num_comments == 0 ) {
								$comments = __('0 Comment','empire');
							} elseif ( $num_comments > 1 ) {
								$comments = $num_comments . __(' Comments','empire');
							} else {
								$comments = __('1 Comment','empire');
							}
							$oparray[] = $comments;
						}
						
						
						$output .= '<p class="info">'.implode('&nbsp;&#8226;&nbsp;',$oparray).'</p>';
						
						
						//excerpt
						if(!empty($showexcerpt)){
							if(has_excerpt()){
								$output .= '<p class="excerpt">'.get_the_excerpt().'</p>';
							}
						}
						
						
					$output .= '
				</div>
			</div>';
						
		}
		wp_reset_query();
	
		
		return $output;	
	}
	add_shortcode("news", "tp_news");
	
	
	
/******************************************************************/	
// TESTEMONIAL
	function tp_testemonial($atts, $content = null){
		extract(shortcode_atts(array(
		'author' => '',
		'company' => ''
		), $atts));
		
		$output = '
		<div class="tp-testemonial">
			<div class="text">'.$content.'</div>';
		
		if(!empty($author) || !empty($company)){
			$output .= '<div class="author">'.$author.'<br /><span>'.$company.'</span></div>';
		}	
		
		$output .= '</div>';
		
		return $output;
	}
	add_shortcode("testemonial", "tp_testemonial");
		
	
	
		
	
/******************************************************************/	
// TESTEMONIALS
	function tp_testemonials($atts, $content = null){	
		
		$output = '
		<div class="tp-testemonials" data-clicks="0">
			<div class="mover">
		';
		
		$output .= force_balance_tags(do_shortcode($content));
		
		$output .= '
			</div>';
						
			//navigation
			$output .= '<div class="nav"><a href="#" id="left"></a><a href="#" id="right"></a></div>';
				
		$output .= '	
		</div>
		<script type="text/javascript">
		
			var tpsctw = parseInt(jQuery(\'.tp-testemonials\').outerWidth());
			if(tpsctw > 0){
				jQuery(\'.tp-testemonials .tp-testemonial\').css(\'width\',tpsctw+\'px\');	
			}			
			jQuery(window).resize(function(){
				jQuery(\'.tp-testemonials .mover\').css(\'marginLeft\',\'0px\');
				jQuery(\'.tp-testemonials\').attr(\'data-clicks\',\'0\');
				tpsctw = jQuery(\'.tp-testemonials\').outerWidth();		
				if(tpsctw > 0){				
					jQuery(\'.tp-testemonials .tp-testemonial\').css(\'width\',tpsctw+\'px\');				
				}
			});

		</script>';
		
		return $output;
	}
	add_shortcode("testemonials", "tp_testemonials");
		
		
		
		
		
	
	
		
	
	
	
	
	
	
	
	
	
	
	


/******************************************************************/	
// PULLQUOTE
	function tp_pullquote($atts, $content = null){
		extract(shortcode_atts(array(
		'align' => '',
		'type' => ''
		), $atts));
		
		$output = '
		<span class="pullquote';
		
		if($align == 'right'){
			$output .= ' alignright';
		}	
		
		if($type == 'modern'){
			$output .= ' modern';
		}	
		
		$output .= '">'.$content.'</span>
		';
		
		return $output;
	}
	add_shortcode("pullquote", "tp_pullquote");




	
/******************************************************************/	
// HORIZONTAL TABS
	function ub_tabs($atts, $content = null){	
		extract(shortcode_atts(array(
		'titles' => ''
		), $atts));
		
		$titles = explode(',',$titles);
		
		
		
		$out = '
				<div class="tabs">
					<ul class="tabnav">
					';
					
		if($titles){
			static $fctr = '1';		
			foreach($titles as $title){
				$GLOBALS['rand'.$fctr] = rand();
				$out .= '<li><a href="#tabs-'.$GLOBALS['rand'.$fctr].'">'.trim($title).'</a></li>
				';
				$fctr++;
			}
		}	
					
		$out .= '	
					</ul>
					';
				
			//get contents
			$out .= force_balance_tags(do_shortcode($content));
				
		$out .= '</div>
				<div class="clear"></div>';
					
					
		return $out;
		
	}
	add_shortcode("tabs", "ub_tabs");



	function ub_tab($atts, $content = null){	
		static $foo_count=0; $foo_count++;
		
		return '<div id="tabs-'.$GLOBALS['rand'.$foo_count].'" class="tabdiv">'.do_shortcode($content).'</div>';
	}
	add_shortcode("tab", "ub_tab");
	
	
	
/******************************************************************/	
// CIRCLED LETTER
	function tp_circle($atts, $content = null){		

		return '<span class="circle">'.$content.'</span>';
	}
	add_shortcode("circle", "tp_circle");

		
	
/******************************************************************/	
// DROPCAP
	function tp_dropcap($atts, $content = null){		

		return '<span class="dropcap">'.$content.'</span>';
	}
	add_shortcode("dropcap", "tp_dropcap");

	
	

/******************************************************************/	
// ICONS
	function tp_icon($atts, $content = null){
		extract(shortcode_atts(array(
		'type' => '',	
		'name' => '',	
		'image' => '',	
		'link' => '',	
		'color' => '',	
		'target' => ''	
		), $atts));
				
		$output = '';
		
		if(!empty($link)){
			$output .= '<a href="'.$link.'"';
			
			if(!empty($target)){
				$output .= ' target="'.$target.'"';
			}
			
			$output .= '>';
		}		
		
		if(!empty($name)){
			$output .= '<i class="fa '.$name.'"'; 
			if(!empty($color)){
				$output .= ' style="color: '.$color.';"';
			}
			$output .= '></i>';
		}elseif(!empty($type)){
			$output .= '<img src="'.get_bloginfo('template_url').'/images/icons/'.$type.'.png" class="tp-icon" alt="icon" title="'.ucfirst($type).'" />';
		}elseif(!empty($image)){
			$output .= '<img src="'.$image.'" class="tp-icon" alt="icon" />';
		}
		
		if(!empty($link)){
			$output .= '</a>';
		}
		
		return $output;
	}
	add_shortcode("icon", "tp_icon");	
	add_shortcode("icn", "tp_icon");

	
	
	
	
/******************************************************************/	
// TOGGLES
	function ub_toggles($atts, $content = null){	
		extract(shortcode_atts(array(
		'title' => '',
		'image' => '',
		'open' => ''
		), $atts));
		
				
		if(!empty($image)){
			$image = ' style="background-image:url(\''.$image.'\');"';
		}
		if(!empty($open)){
			$open = ' opened';
		}
					
		return do_shortcode('<a href="#" class="toggle"'.$image.'>'.$title.'</a>
		<div class="toggle_box'.$open.'">
			<div class="block">
				'.$content.'
			</div>
		</div>
		<div class="clear"></div>');
		
	}
	add_shortcode("toggle", "ub_toggles");
	
	
	
	
	

/******************************************************************/	
// VERTICAL SPACE
	function tp_vspace($atts, $content = null){	
		if(!empty($atts)){
			extract(shortcode_atts(array(
			'size' => ''
			), $atts));
		}

		$style = '';
		if(!empty($size)){
			$size = intval($size);
			$style = ' style="height: '.$size.'px;"';
		}
		
		return '<div class="vspace"'.$style.'></div>';
		
	}
	add_shortcode("vspace", "tp_vspace");	
	
	function tp_vspace2($atts, $content = null){	
		if(!empty($atts)){
			extract(shortcode_atts(array(
			'size' => ''
			), $atts));
		}

		$style = '';
		if(!empty($size)){
			$size = intval($size);
			$style = ' style="height: '.$size.'px;"';
		}
		
		return '<div class="vspace2"'.$style.'></div>';
		
	}
	add_shortcode("vspace2", "tp_vspace2");

	
	
	

/******************************************************************/	
// GOOGLE MAPS
	function tp_gmaps($atts) {		
		$atts = shortcode_atts(array(							
			'id' => 'gmap1',
			'zoom' => '13',
			'width' => '100%',
			'height' => '300px',
			'maptype' => 'ROADMAP',
			'address' => '',			
			'marker' => '',
			'markerimage' => '',
			'infowindow' => '',
			'infowindowdefault' => 'yes',			
			'hidecontrols' => 'false',
			'scale' => 'false',
			'scrollwheel' => 'true'			
		), $atts);
										
		$output = '<div class="mapholder"><div id="' .$atts['id'] . '" style="width:' . $atts['width'] . '; height:' . $atts['height'] . ';" class="gmap"></div></div>';
		
		
		$output .= '		
		<script type="text/javascript">
			if(!bind_pageopen){
				//if page is not opened yet, wait the page opening time and leave it
				';
				$tpopas = get_option('tp_animation_speed');
				if(!empty($tpopas)){
					$output .= 'var to_time = \''.get_option('tp_animation_speed').'\';';
				}else{
					$output .= 'var to_time = \'1000\';';
				}
				
				$output .= '
				var to = setTimeout(function(){
					
						if(typeof google === \'undefined\'){				
							console.log(\'load map from content\');				
							jQuery.getScript(\'http://maps.google.com/maps/api/js?sensor=false&callback=initMap\');
						}else{					
							initMap();
						}
					
				},to_time);
			}else{
				if(typeof google === \'undefined\'){					
					console.log(\'load map from content\');
					jQuery.getScript(\'http://maps.google.com/maps/api/js?sensor=false&callback=initMap\');
				}else{					
					initMap();
				}
			}			
		</script>
		<script type="text/javascript">							
		window.initMap = function(){
			var latlng = new google.maps.LatLng(0, 0);
			var myOptions = {			
				center: latlng,
				zoom: ' . $atts['zoom'] . ',				
				scrollwheel: ' . $atts['scrollwheel'] .',
				scaleControl: ' . $atts['scale'] .',
				disableDefaultUI: ' . $atts['hidecontrols'] .',
				mapTypeId: google.maps.MapTypeId.' . $atts['maptype'] . '
			};
			
			
			var ' . $atts['id'] . ' = new google.maps.Map(document.getElementById(\'' . $atts['id'] . '\'), myOptions);
			
			';
					
		//address
			if($atts['address'] != ''){
				$output .= '
				var geocoder_' . $atts['id'] . ' = new google.maps.Geocoder();
				var address = \'' . $atts['address'] . '\';
				
				';
			}

		//marker: show if address is not specified
			if ($atts['marker'] != '' && $atts['address'] == ''){
				//add custom image
				if ($atts['markerimage'] !='')
				{
					$output .= 'var image = "'. $atts['markerimage'] .'";';
				}

				$output .= '				
					var marker = new google.maps.Marker({
						map: ' . $atts['id'] . ', 
						';
						if ($atts['markerimage'] !='')
						{
							$output .= 'icon: image,';
						}
						$output .= '
						position: ' . $atts['id'] . '.getCenter(),
						visible: true
					});
				
				';

			//infowindow
				if($atts['infowindow'] != ''){
					$output .= '
					var contentString = \'' . $atts['infowindow'] . '\';
					var infowindow = new google.maps.InfoWindow({
						content: contentString
					});
								
					google.maps.event.addListener(marker, \'click\', function() {
					  infowindow.open(' . $atts['id'] . ',marker);
					});
					';
					//infowindow default
					if ($atts['infowindowdefault'] == 'yes')
					{
						$output .= '
							infowindow.open(' . $atts['id'] . ',marker);
						';
					}				
				}
			}
			
			$output .= '
				google.maps.event.addListenerOnce(' .$atts['id'] . ', \'idle\', function() {
					google.maps.event.trigger(' .$atts['id'] . ', \'resize\');
				   
					geocoder_' . $atts['id'] . '.geocode( { \'address\': address}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							' . $atts['id'] . '.setCenter(results[0].geometry.location);
							';
							
							if ($atts['marker'] !='')
							{
								//add custom image
								if ($atts['markerimage'] != '')
								{
									$output .= 'var image = "'. $atts['markerimage'] .'";';
								}
								$output .= '
								marker = new google.maps.Marker({
									map: ' . $atts['id'] . ', 
									';
									if ($atts['markerimage'] != '')
									{
										$output .= 'icon: image,';
									}
								$output .= '
									position: ' . $atts['id'] . '.getCenter()
								});
								';

								//infowindow
								if($atts['infowindow'] != '') 
								{
									//first convert and decode html chars
									$thiscontent = htmlspecialchars_decode($atts['infowindow']);
									$output .= '
									var contentString = \'' . $thiscontent . '\';
									var infowindow = new google.maps.InfoWindow({
										content: contentString
									});
												
									google.maps.event.addListener(marker, \'click\', function() {
									  infowindow.open(' . $atts['id'] . ',marker);
									});
									';

									//infowindow default
									if ($atts['infowindowdefault'] == 'yes')
									{
										$output .= '
											infowindow.open(' . $atts['id'] . ',marker);
										';
									}
								}
							}
					$output .= '
						} else {
						alert("Geocode was not successful for the following reason: " + status);
						}
					});
					   
				});						

						
			}//initMap ends						
			</script>';
			
			
			return $output;
	}
	add_shortcode('map', 'tp_gmaps');
	
	
	


/******************************************************************/	
// GOOGLE FONTS	
	function tp_gfonts( $atts, $content = null) {
		extract( shortcode_atts( array(
			'name' => 'Economica',
			'size' => '20px',
			'style' => ''
		), $atts ) );
		
	    $font = str_replace(" ","+",$name);
      
		return '<style type="text/css">@import url(http://fonts.googleapis.com/css?family='.$font.');</style>
      	<div class="gfont" style="font-family:\'' .$name. '\', serif !important; font-size:' .$size. '; '.$style.'">' . do_shortcode($content) . '</div>';				
	}
	add_shortcode('font', 'tp_gfonts');
	
	
	
	



/******************************************************************/	
// AUDIO	
	function tp_audio( $atts, $content = null) {
		extract( shortcode_atts( array(
			'url' => ''		
		), $atts ) );		
	  
		
		$randid = mt_rand(1,999);
		
		return '<audio class="mejs tp-shortcode" src="'.$url.'" controls="controls"></audio>
			<script type="text/javascript">				
					jQuery(document).ready(function($) {		
						$("#content audio").mediaelementplayer({
							mode:"shim",
							startVolume: 0.20,		
							loop: false,
							features: ["playpause","volume","progress"],
							audioHeight: 35,
							audioWidth: 576
						});		
					});
				</script>	
		';
	
	}
	add_shortcode('audio', 'tp_audio');	



	
/******************************************************************/	
// NAVIGATION
	function tp_navi( $atts, $content = null) {
		extract( shortcode_atts( array(
			'style' => '',			
			'align' => ''			
		), $atts ) );		
	  
		
		$align = '';
		
		$content = str_replace('<ul>','<ul class="navi '.$align.'">',$content);
		
		
		return $content;

	}
	add_shortcode('navi', 'tp_navi');	

	
	
	
	
/******************************************************************/	
// RESPONSIVE DISPLAY
	function tp_respo( $atts, $content = null) {
		extract( shortcode_atts( array(
			'device' => ''		
		), $atts ) );		
	  
			
			if(!empty($device) && $device == 'tablet'){
				$class = 'tp-respo-tablet';
			}elseif(!empty($device) && $device == 'mobile'){
				$class = 'tp-respo-mobile';
			}else{
				$class = 'tp-respo-desktop';
			}
				
		return '<div class="'.$class.'">'.do_shortcode($content).'</div>';

	}
	add_shortcode('respo', 'tp_respo');	




/******************************************************************/	
// PRICING TABLE	
	function tp_plan($atts, $content = null){	
		if(!empty($atts)){
			extract(shortcode_atts(array(
			'price' => '',
			'title' => '',
			'button' => '',
			'link' => '',
			'per' => '',
			'bold' => ''
			), $atts));
		}
		
		if(!empty($color)){
			$color = ' color="'.$color.'"';
		}else{
			$color = '';
		}
		
		if(!empty($bold)){
			$output = '<div class="pricing-table bold">';
		}else{
			$output = '<div class="pricing-table">';
		}
				
		//circle
		if(!empty($price)){
			$output .= '<div class="price-bg">'.$price.'</div>
			<div class="price">'.$price.'</div>';
		}
		
		//per
		if(!empty($per)){
			$output .= '<p class="per">'.$per.'</p>';
		}	
		
		//plan title
		if(!empty($title)){
			$output .= '<h3>'.$title.'</h3>';
		}
		
		
		//content -> list
		$output .= $content;
		
		//button
		if(!empty($button) && !empty($link)){
			$output .= do_shortcode('[button link="'.$link.'"'.$color.']'.$button.'[/button]');
		}
		
		
		
		$output .= '</div>';
		
		return $output;
	}
	add_shortcode("plan", "tp_plan");
	
	

/******************************************************************/	
// FIX		 
	function the_content_filter($content) {
	 
		// array of custom shortcodes requiring the fix
		$block = join("|",array("one_half","one_third","two_third","one_fourth","three_fourth","button"));
		 
		// opening tag
		$rep = preg_replace("/(<p>)?\[($block)(\s[^\]]+)?\](<\/p>|<br \/>)?/","[$2$3]",$content);
		// closing tag
		$rep = preg_replace("/(<p>)?\[\/($block)](<\/p>|<br \/>)?/","[/$2]",$rep);
		 
		return $rep;	 
	}
	add_filter("the_content", "the_content_filter");
	
?>