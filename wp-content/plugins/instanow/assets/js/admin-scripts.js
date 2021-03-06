jQuery(document).ready(function() {
	jQuery(document).on( 'change' , '.tie-instagramy-media-source' , function(){
		var selected_data = jQuery(this).find( 'option:selected').val();
		jQuery(this).parent().parent().find( '.tieinsta-widget-media-source' ).hide();
		jQuery(this).parent().parent().find( '.tieinsta-widget-media-source-'+selected_data ).show();
	});

	jQuery(document).on( 'change' , '.tie_media_layout select' , function(){
		var selected_item = jQuery(this).find( 'option:selected').val();
		if( selected_item == 'grid' ){
			jQuery(this).parent().parent().find( '.tie-grid-settings' ).show();
			jQuery(this).parent().parent().find( '.tie-slider-settings' ).hide();
		}
		if( selected_item == 'slider' ){
			jQuery(this).parent().parent().find( '.tie-slider-settings' ).show();
			jQuery(this).parent().parent().find( '.tie-grid-settings' ).hide();
		}
	});

	jQuery(document).on( 'click' , '.tieinsta-widget-title' , function(){
		var accountContent = jQuery(this).parent().find( '.tieinsta-widget-content' );
		if( accountContent.is(":visible") ){
			accountContent.slideUp();
		}else{
			accountContent.slideDown();
		}
	});
});




jQuery(document).on( 'click', '#tieinsta-get-api-key' , function() {

	var button = jQuery('#tieinsta-get-api-key');

	if( button.hasClass('tie-disable-button') ){
		console.log('Please wait :)');
		return false;
	}

	var loader    = jQuery('#tie-insta-loading').show(),
	    errorWrap = jQuery('#tie-error-container').hide();


	jQuery.ajax({
		url : ajaxurl,
		type: 'post',
		data: {
			action: 'tie_instanow_get_access_token',
		},
		beforeSend: function(data) {
			button.addClass('tie-disable-button');
			console.log( 'before' );
		},
		success: function( data ) {
			console.log( data );

			if( data == 1){
				location.reload();
			}
			else{
				errorWrap.html( data ).show();
				button.removeClass('tie-disable-button');
				loader.hide();
			}
		}
	});
	return false;
});
