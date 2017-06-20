<?php

/*
Plugin Name: ThemePrince Shortcodes
Plugin URI: http://themeprince.com
Description: Shortcodes and Shortcode Generator for ThemePrince themes
Version: 1.4.2
Author: Theme Prince
Author URI: http://themeprince.com
*/



// make sure we don't expose any info if called directly
	if ( !function_exists( 'add_action' ) ) {
		echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
		exit;
	}


	define('TP_SHORTCODES_PATH', plugin_dir_url( __FILE__ ));

	// load shortcodes JS and CSS frontend
		function tp_shortcodes_styles() {	
			//tabs
			wp_enqueue_script('jquery');
			wp_enqueue_script('jquery-ui-core');	
			wp_enqueue_script('jquery-ui-tabs');	

			//shortcodes JS
			wp_enqueue_style( 'tp-shortcodes-styles', TP_SHORTCODES_PATH . 'shortcodes.css', array(), null );
			wp_enqueue_script( 'tp-shortcodes', TP_SHORTCODES_PATH . 'shortcodes.js', array('jquery'), '1.0.0', true );						
			
			//audio player
			/*wp_enqueue_script('wp-mediaelement');						
			
			wp_enqueue_style('tp_me', TP_SHORTCODES_PATH . 'mediaelementplayer.css', array(),null);
			wp_enqueue_style('tp_me_page', TP_SHORTCODES_PATH . 'mediaelementplayer-page.css', array(), null);*/
			
		}
		add_action( 'wp_enqueue_scripts', 'tp_shortcodes_styles' );
	
	
	// load shortcodes JS and CSS backend
		function tp_shortcodes_styles_admin() {	
			wp_enqueue_style( 'tp-shortcodes-admin', TP_SHORTCODES_PATH . 'tp-shortcodes-admin.css', array(), '1.0', 'screen' );
			wp_enqueue_script( 'tp-shortcode-gen', TP_SHORTCODES_PATH . 'shortcode_generator.js', array('jquery'), '1.0.0', true );			
		}
		add_action('admin_enqueue_scripts', 'tp_shortcodes_styles_admin');
		
		
	// shortcode generator
		if(is_admin()){	
			require_once('shortcode_generator.inc.php');
		}

		
	// load shortcodes	
		if(!is_admin()){			//frontend only
			require_once('shortcodes.php');			
		}	



?>