$('.gallery__carousel').owlCarousel({
		nav:      true,
		navText:  ['<img src="img/arrow_left.svg">','<img src="img/arrow_right.svg">'],
		margin:   10,
		loop:     true,
		autoplay: true,
		responsive:{
			0:{
					items:1
			},
			768:{
					items:3
			},
			1200:{
					items:6
			}
		}
	});

$('.popup__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		removalDelay: 200, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				// just a hack that adds mfp-anim class to markup
				 this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				 this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});

  $('.popup__gallery-2').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		removalDelay: 200, //delay removal by X to allow out-animation
  		callbacks: {
  			beforeOpen: function() {
  				// just a hack that adds mfp-anim class to markup
  				 this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
  				 this.st.mainClass = this.st.el.attr('data-effect');
  			}
  		},
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: true,
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				return item.el.attr('title') + '<small></small>';
  			}
  		}
  	});
