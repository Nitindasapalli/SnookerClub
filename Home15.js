;(function($, window, document, undefined) {
	"use strict";

	var swipers = [], winW, winH, winScr, _isresponsive, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);


	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
	}
	pageCalculations();

	function resizeCall(){
		pageCalculations();
		$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){
			var thisSwiper = swipers['swiper-'+$(this).attr('id')], $t = $(this), slidesPerViewVar = updateSlidesPerView($t), centerVar = thisSwiper.params.centeredSlides;
			thisSwiper.params.slidesPerView = slidesPerViewVar;
			thisSwiper.reInit();
			if(!centerVar){
				var paginationSpan = $t.find('.pagination span');
				var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
				if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
				else $t.removeClass('pagination-hidden');
				paginationSlice.show();
			}
		});	
	}
	if(!_ismobile){
		$(window).resize(function(){
			resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			resizeCall();
		}, false);
	}
	/***********************************/
	/*Swiper Slider*/
	/**********************************/

	function initSwiper(){
		var initIterator = 0;
		$('.swiper-container').each(function(){								  
			var $t = $(this);								  
 
			var index = 'swiper-unique-id-'+initIterator;
 
			$t.addClass('swiper-'+index + ' initialized').attr('id', index);
			$t.find('.pagination').addClass('pagination-'+index);
 
			var autoPlayVar = parseInt($t.attr('data-autoplay'),10);
            var mode = $t.attr('data-mode');
			var slidesPerViewVar = $t.attr('data-slides-per-view');
			if(slidesPerViewVar == 'responsive'){
				slidesPerViewVar = updateSlidesPerView($t);
			}
			else slidesPerViewVar = parseInt(slidesPerViewVar,10);
 
			var loopVar = parseInt($t.attr('data-loop'),10);
			var speedVar = parseInt($t.attr('data-speed'),10);
            var centerVar = parseInt($t.attr('data-center'),10);
			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				speed: speedVar,
				pagination: '.pagination-'+index,
				loop: loopVar,
				paginationClickable: true,
				autoplay: autoPlayVar,
				slidesPerView: slidesPerViewVar,
				keyboardControl: true,
				calculateHeight: true, 
				simulateTouch: true,
				roundLengths: true,
				centeredSlides: centerVar,
                mode: mode || 'horizontal',
				onInit: function(swiper){
				    $t.find('.swiper-slide').addClass('active');
				},
				onSlideChangeEnd: function(swiper){
					var activeIndex = (loopVar===1)?swiper.activeLoopIndex:swiper.activeIndex;
				},
				onSlideChangeStart: function(swiper){
					$t.find('.swiper-slide.active').removeClass('active');
				}
			});
			swipers['swiper-'+index].reInit();
				if($t.attr('data-slides-per-view')=='responsive'){
					var paginationSpan = $t.find('.pagination span');
					var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
					if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
					else $t.removeClass('pagination-hidden');
					paginationSlice.show();
				}
            
            if($t.find('.default-active').length){
                swipers['swiper-'+index].swipeTo($t.find('.swiper-slide').index($t.find('.default-active')), 0);    
            } 
            
			initIterator++; 

			if($t.attr('data-slides-per-view')=='responsive'){
                var countSlides = $t.find(".swiper-slide:not(.swiper-slide-duplicate)").length;
                setTimeout(function(){
                    $(".swiper-pagination-switch:nth-child(n+"+(countSlides+1)+")").remove();
                }, 0);
            }

		});
	}



	$(window).on('load', function() {
    	initSwiper();
    });

	$(window).on('resize', function() {
    	initSwiper();
    });
	
 
	function updateSlidesPerView(swiperContainer){
		if(winW>=addPoint) return parseInt(swiperContainer.attr('data-add-slides'),10);
		else if(winW>=lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'),10);
		else if(winW>=mdPoint) return parseInt(swiperContainer.attr('data-md-slides'),10);
		else if(winW>=smPoint) return parseInt(swiperContainer.attr('data-sm-slides'),10);
		else return parseInt(swiperContainer.attr('data-xs-slides'),10);
	}	
 
	//swiper arrows
	$('.slide-prev').on('click', function(){
		swipers['swiper-'+$(this).parent().attr('id')].swipePrev();
	});
 
	$('.slide-next').on('click', function(){
		swipers['swiper-'+$(this).parent().attr('id')].swipeNext();
	});	 				 			   

	$("body.single-post").fitVids();

	/***********************************/
	/*TABS FAQ*/
	/**********************************/			 

	var tabFinish = 0;
	$('.nav-tab-item').on('click',  function(){
		var $t = $(this);
		if(tabFinish || $t.hasClass('active')) return false;
		tabFinish = 1;
		$t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
		$t.addClass('active');
		var index = $t.parent().parent().find('.nav-tab-item').index(this);
		$t.closest('.tab-wrapper').find('.tab-info:visible').fadeOut(500, function(){
			$t.closest('.tab-wrapper').find('.tab-info').eq(index).fadeIn(500, function() {
				tabFinish = 0;
			});
		});

		return false;
	});			 
	
	/***********************************/
	/*MOBILE MENU*/
	/**********************************/

	$('.nav-menu-icon a').on('click', function() { 
		if ($('nav').hasClass('slide-menu')){
			$('nav').removeClass('slide-menu'); 
			$(this).removeClass('active');
		}else {
			$('nav').addClass('slide-menu');
			$(this).addClass('active');
		}

		return false;
	});

	if ($(window).width() < 992){			 
		$('.menu li > a').on('click', '.fa', function(){
			if ($(this).parent().parent().find('.sub-menu').hasClass('slidemenu')) {
				$(this).parent().next('.sub-menu').removeClass('slidemenu');
			} else {
				$('.menu li > a').parent().next('.sub-menu').removeClass('slidemenu');
				$(this).parent().next('.sub-menu').addClass('slidemenu');
			}

			return false;
		});
	}

	$('.second-menu').on('click' , function(){
		$('.right-menu').addClass('slides');
		$('.close-menu').addClass('active');
		$('body').addClass('act');	

		return false;
	});

	$('.close-menu, .layer-dark').on('click' , function(){
		$('.right-menu').removeClass('slides');
		$('.close-menu').removeClass('active');
		$('body').removeClass('act');
		
		return false;
	});			 


	$('.intro-scroll-down').on('click', function() {
		$('body, html').animate({'scrollTop':$('.' + $(this).attr('data-class')).offset().top});
	}); 

	/***********************************/
	/*GOOGLE MAP*/
	/**********************************/
	
	function initialize(obj) {
		var stylesArray = {
			'style-1' : {
				'style': [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			}
		}

		var lat = $('#'+obj).attr("data-lat");
		var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = $('#'+obj).attr("data-marker");
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"), 10);
		var styles = stylesArray[$('#map-canvas-contact').attr("data-style")]['style'];
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
			scrollwheel: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		infowindow = new google.maps.InfoWindow({
			content: contentString
		});


		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

	}	

	/***********************************/
	/*DROPDOWN LIST*/
	/**********************************/			 

	$('.drop').on( "click", function() {
		if($('.drop-list').hasClass('act')){
			$(this).find('.drop-list').removeClass('act');
			$(this).find('span').slideUp(300);
		}else{
			$('.drop span').slideUp(300);
			$(this).find('.drop-list').addClass('act');

			$(this).find('span').slideDown(300);
		}

		return false;
	});

	$('.filter-drop .but').on( "click", function() {
		$(this).parent().parent().find('.change').text($(this).text());
		$('.drop').find('span').slideUp(300);
	});	

	/***********************************/
	/*BOOTSTRAP SLIDER*/
	/**********************************/

	if($('.h-slider').length){			 
		$('.h-slider').slider({
			range: true,
			values: [50, 67]
		});
	}

	/***********************************/
	/*ACCORDIONS*/
	/**********************************/			 

	var allPanels = $(".accordion > dd").hide();
	allPanels.first().slideDown("easeOutExpo");
	$(".accordion > dt > a").first().addClass("active");

	$(".accordion > dt > a").on('click', function(){

		var current = $(this).parent().next("dd");
		$(".accordion > dt > a").removeClass("active");
		$(this).addClass("active");
		allPanels.not(current).slideUp("easeInExpo");
		$(this).parent().next().slideDown("easeOutExpo");

		return false;

	});

	var allToggles = $(".toggle > dd").hide();

	$(".toggle > dt > a").on('click', function(){

		if ($(this).hasClass("active")) {

			$(this).parent().next().slideUp("easeOutExpo");
			$(this).removeClass("active");

		}
		else {
			var current = $(this).parent().next("dd");
			$(this).addClass("active");
			$(this).parent().next().slideDown("easeOutExpo");
		}

		return false;
	});			 

	$('.s-icon').on('click', function(){
		if ($('.s-field').hasClass('slide')){
			$('.s-field').removeClass('slide');
		}else{
			$('.s-field').addClass('slide');
		}

		return false;
	});

	/***********************************/
	/*WINDOW SCROLL*/
	/**********************************/	
	
	$(window).scroll(function() {
		
		if ($(this).scrollTop() >= 80) {
			$('header').addClass('scrol');
		}else{
			$('header').removeClass('scrol');
		}
		if ($('.time-line').length) {

			var time_line = $('.time-line').not('.animated');

			for (var i = time_line.length - 1; i >= 0; i--) {

				if( $(window).scrollTop() >= $(time_line[i]).offset().top-$(window).height()*0.5 ) {
					$(time_line[i]).countTo().addClass('animated');
				}
			}

		}
		
		if ($('.start-line').length){
			if($(window).scrollTop() >= $('.start-line').offset().top - $('.start-line').height()){

				var skill_line = $('.skill-line div');

				for (var i = skill_line.length - 1; i >= 0; i--) {

					var objel = $(skill_line[i]);
					var pb_width = objel.attr('data-width-pb');
					objel.css({'width':pb_width});

				}
			}
		}
		
		if ($(window).scrollTop() >= 100){
			$('header').addClass('fix');  
		}else {
			$('header').removeClass('fix');
		}
		
		var margRight = ($(window).width()-$('.container').innerWidth())/2;
		var margTop =  $('header').height();
		
		headerPosition();

	});

	/***********************************/
	/*WINDOW RESIZE*/
	/**********************************/

	function resizeCall() {
		winW = $(window).width();
		winH = $(window).height();

		var swiper_container = $('.swiper-container[data-slides-per-view="responsive"]');

		for (var i = swiper_container.length - 1; i >= 0; i--) {

			var $th = $(swiper_container[i]);
			var xsValue = parseInt($th.attr('data-xs-slides'),10);
			var smValue = parseInt($th.attr('data-sm-slides'),10);
			var mdValue = parseInt($th.attr('data-md-slides'),10);
			var lgValue = parseInt($th.attr('data-lg-slides'),10);
			var currentSwiper = swipers[$th.attr('init-attr')];
			var newSlideNumber = updateSlidesPerView(xsValue, smValue, mdValue, lgValue);
			currentSwiper.params.slidesPerView = newSlideNumber;
			currentSwiper.reInit();

		}

	}

	$(window).resize(function(){
		resizeCall();
		headerPosition();
	});	

	window.addEventListener("orientationchange", function() {
		resizeCall();
	}, false);

	/***********************************/
	/*WOW PLUGIN*/
	/**********************************/

	var wow = new WOW({
		boxClass: 'wow', 
		animateClass: 'animated', 
		offset: 0, 
		mobile: false,
		live: true	
	});	

	if ($(window).width()>992){	
		wow.init();
	}

	/***********************************/
	/*MULTI SCROLL PLUGIN*/
	/**********************************/

	if ($('.multiscroll').length){			 
		$(function(){	
			$('.multiscroll').multiscroll({
				navigation: true,
				loopBottom: true,
				loopTop: true,
				scrollingSpeed: 700,
				easing: 'easeInQuart'
			});
			
		});
	}

	/***********************************/
	/*POPUP*/
	/**********************************/
	
	if ($('.popup-gallery, .popup-product').length) {
		$('.popup-gallery, .popup-product').magnificPopup({
			delegate: '.view-item',
			type: 'image',
			removalDelay: 100,
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-fade',
			closeBtnInside: false,
			gallery: {
				enabled: true,
			},
			callbacks: {
				beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
				}
			}
		});
	}		 
	

	/***********************************/
	/*TEXT ROTATOR*/
	/**********************************/

	if ($('.rotator').length){			 
		$('.rotator').textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});
	}

	/***********************************/
	/*WINDOW LOAD*/
	/**********************************/

	$(window).on('load', function() {
		$('.preloader').fadeOut();
		add_img_bg('.s-img-switch');
		
		// masonry_gallery();

		$('nav .menu-item-has-children > a').append('<span class="fa fa-angle-down"></span>');
		if( $('.widget_layered_nav').length ) {
			$('.widget_layered_nav .dropdown_layered_nav_filter-by').wrap('<form></form>');
		}
		initSwiper();
		if ($('.gallery-list').length || $('.izotope-container').length)  { 
			var $container = $('.gallery-list');
			$container.isotope({
				itemSelector: '.gallery-items',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.gallery-wrapper .grid-sizer'
				}
			});
			var izotope_container = $('.izotope-container');
			$('#filters').on('click', '.but', function() {

				for (var i = izotope_container.length - 1; i >= 0; i--) {
					$(izotope_container[i]).find('.item').removeClass('animated');
				}

				$('#filters .but').removeClass('activbut');
				$(this).addClass('activbut');
				var filterValue = $(this).attr('data-filter');
				izotope_container.isotope({filter: filterValue});

				return false;
			});
		}
		
		if($('#map-canvas-contact').length==1){
			initialize('map-canvas-contact');
		}
		headerPosition();

		if( $('.portfolio-counters').length ) {
			$('#filters .but').each(function(){
				var item_class = $(this).data('filter');
				if( item_class != '*' ) {
					$(this).append('<span>' + $(item_class).length + '</span>');
				} else {
					$(this).append('<span>' + $('.portfolio-counters .izotope-container .item').length + '</span>');
				}
			});
		}

		if( $('.right-menu-link').length ) {
			var menuBlockHeight = 0;
			$('.right-menu-link ul > li.menu-item-has-children').each(function(){
				if( $(this).height() > menuBlockHeight ) {
					menuBlockHeight = $(this).height();
				}
			});
			$('.right-menu-link ul > li.menu-item-has-children').height(menuBlockHeight);
		}
		retinaLogo();
		PostInfoItemWidth();
	});
	
	
	$('.submit span').on('click', function(){
		$('.search-form').toggleClass('act');

		return false;
	});
	$('.submit-button').on('click' , function(){
		if ($(this).closest('.search-form').find('.text-input').val() == ''){
			$('.search-form').removeClass('act');
		}
	});

	/***********************************/
	/*HEADER POSITION FUNCTION*/
	/**********************************/
	function headerPosition() {
		if ( $(window).width() < 601 && ! $('.not-fixed').length ) {
			if ( $(window).scrollTop() < 47 ) {
				$('body.admin-bar').css({'margin-top': 46 - $(window).scrollTop()});
				$('.admin-bar header').css({'top': 46 - $(window).scrollTop()});
				$('.admin-bar .right-menu').css({'top': 46 - $(window).scrollTop()});
			} else {
				$('body.admin-bar').css({'margin-top': 0});
				$('.admin-bar header').css({'top': 0});
				$('.admin-bar .right-menu').css({'top': 0});
			}
		} else {
			if( ! $('.not-fixed').length ) {
				if ( $(window).width() < 769 ) {
					$('body.admin-bar').css({'margin-top': '46px'});
					$('.admin-bar header').css({'top': '46px'});
					$('.admin-bar .right-menu').css({'top': '46px'});
				} else {
					$('body.admin-bar').css({'margin-top': '32px'});
					$('.admin-bar header').css({'top': '32px'});
					$('.admin-bar .right-menu').css({'top': '32px'});
				}
			} else {
				$('.page-body').css('margin-top', 0);
			}
		}
	}

	/**********************************/
	/* RETINA LOGO */
	/**********************************/
	function retinaLogo() {
		if( $('.logo img').length ) {
			if( $('.logo img').attr('data-retina') ) {
				var retina = window.devicePixelRatio > 1 ? true : false;
				if (retina) {
					$('.logo img').attr('src', $('.logo img').data('retina'));
				}
			}
		}
	}

	/**********************************/
	/* POST INFO ITEM WIDTH */
	/**********************************/
	function PostInfoItemWidth() { //
		if( $('.post-line-info').length ) {
			$('.post-line-info').each(function(){
				var children = $(this).children();
				children.width( 100 / children.length - 2 + '%' );
			});
		}
	}

	if( $('.gallery-list').length ) {
        $('.gallery-list').lightGallery({
            download: false
        });
    }

	/* BACKGROUND IMAGE */
	function add_img_bg(img_sel, parent_sel) {
		if (!img_sel) {
			console.info('no img selector');
			return false;
		}
		var $parent, $neighbor, $imgDataHidden, $imgDataSibling, _this;
		$(img_sel).each(function() {
			_this = $(this);
			$imgDataHidden = _this.data('s-hidden');
			$imgDataSibling = _this.data('s-sibling');
			$parent = _this.closest(parent_sel);
			$parent = $parent.length ? $parent : _this.parent();
			if ($imgDataSibling) {
				$parent.addClass('s-back-sibling-switch');
				$neighbor = _this.next();
				$neighbor = $neighbor.length ? $neighbor : _this.next();
				$neighbor.css('background-image', 'url(' + this.src + ')').addClass('s-sibling-switch');
			} else {
				$parent.css('background-image', 'url(' + this.src + ')').addClass('s-back-switch');
			}
			if ($imgDataHidden) {
				_this.css('visibility', 'hidden');
			} else {
				_this.hide();
			}
		});
	}

	function masonry_gallery() {
		if ( $('.gallery-list').length ) {
			$('.gallery-list').masonry({
		        // set itemSelector so .grid-sizer is not used in layout
		        itemSelector: '.gallery-items',
		        // use element for option
		        columnWidth: '.grid-sizer',
		        percentPosition: true,
		        gutter: 0
		    });
		}
	}



	var wpcRemoveClass = function( el, _class ){
	    if (el.classList)
	        el.classList.remove( _class ? _class : 'active' );
	    else
	        el.className = panel.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
	$('.wpc-accordion').on('click', '.panel-title', function(){
	    
	        var panel_parent = this.parentNode,
	            panel_container = panel_parent.parentNode,
	            panels_wrap = panel_container.querySelectorAll('.panel-wrap');
	 
	        Array.prototype.forEach.call(panels_wrap, function(panel, i){
	            if(panel !== panel_parent) {
	               wpcRemoveClass(panel);
	            }
	        });

	        if ( -1 !== this.parentNode.className.indexOf( 'active' ) ) {
	            wpcRemoveClass(panel_parent);
	        } else {
	            panel_parent.className += ' active';
	        }
	        
	});


})(jQuery, window, document);




	