AOS.init({
  \tduration: 800,
  \teasing: 'ease',
  \tonce: true,
  \toffset: -100
 });
 
 jQuery(function($) {
 \t
 \t'use strict';
 \tloader();
 \tsiteMenuClone();
 \tmobileToggleClick();
 \tonePageNavigation();
 \tsiteIstotope();
 \tportfolioItemClick();
 \towlCarouselPlugin();
 \tfloatingLabel();
 \tscrollWindow();
 \tcounter();
 \tjarallaxPlugin();
 \tcontactForm();
 \tstickyFillPlugin();
 \tanimateReveal();
 
 });
 
 var siteIstotope = function() {
 \tvar $container = $('#posts').isotope({
     itemSelector : '.item',
     isFitWidth: true
   });
 
   $(window).resize(function(){
     $container.isotope({
       columnWidth: '.col-sm-3'
     });
   });
   
   $container.isotope({ filter: '*' });
 
   $('#filters').on( 'click', 'a', function(e) {
   \te.preventDefault();
     var filterValue = $(this).attr('data-filter');
     $container.isotope({ filter: filterValue });
     $('#filters a').removeClass('active');
     $(this).addClass('active');
   });
 
   $container.imagesLoaded()
   .progress( function() {
     $container.isotope('layout');
   })
   .done(function() {
   \t$('.gsap-reveal-img').each(function() {
 \t\t\tvar html = $(this).html();
 \t\t\t$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
 \t\t});
 
   \tvar controller = new ScrollMagic.Controller();
 
   \tvar revealImg = $('.gsap-reveal-img');
 
   \tif ( revealImg.length ) {
   \t\tvar i = 0;
 \t\t\trevealImg.each(function() {
 
 \t\t\t\tvar cover = $(this).find('.cover'),
 \t\t\t\t\trevealContent = $(this).find('.reveal-content'),
 \t\t\t\t\timg = $(this).find('.reveal-content img');
 
 
 \t\t\t\tvar tl2 = new TimelineMax();
 
 
 \t\t\t\tsetTimeout(function() {
 
 \t\t\t\t\ttl2
 \t\t\t\t\t\ttl2.set(img, {  scale: '2.0', autoAlpha: 1, })
 \t\t\t\t\t\t.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
 \t\t\t\t\t\t\ttl2.set(revealContent, { autoAlpha: 1 });
 \t\t\t\t\t\t\ttl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
 \t\t\t\t\t\t\ttl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
 \t\t\t\t\t\t} } )
 
 \t\t\t\t}, i * 700);
 
 \t\t\t\t
 
 \t\t\t\tvar scene = new ScrollMagic.Scene({
 \t\t\t\t\ttriggerElement: this,
 \t\t\t\t\tduration: "0%",
 \t\t\t\t\treverse: false,
 \t\t\t\t\toffset: "-300%",
 \t\t\t\t})
 \t\t\t\t.setTween(tl2)
 \t\t\t\t.addTo(controller);
 
 \t\t\t\ti++;
 
 \t\t\t});
 \t\t}
   })
 
   $('.js-filter').on('click', function(e) {
   \te.preventDefault();
   \t$('#filters').toggleClass('active');
   });
 
 }
 
 var loader = function() {
 \tsetTimeout(function() {
 \t\tTweenMax.to('.site-loader-wrap', 1, { marginTop: 50, autoAlpha: 0, ease: Power4.easeInOut });
   }, 10);
   $(".site-loader-wrap").delay(200).fadeOut("slow");
 \t$("#unslate_co--overlayer").delay(200).fadeOut("slow");\t
 }
 
 var siteMenuClone = function() {
 
 \tsetTimeout(function() {
 
 \t\t$('.js-clone-nav').each(function() {
 \t\t\tvar $this = $(this);
 \t\t\t$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
 \t\t});
 \t\t
 \t\tvar counter = 0;
     $('.unslate_co--site-mobile-menu .has-children').each(function(){
       var $this = $(this);
       
       $this.prepend('<span class="arrow-collapse collapsed">');
 
       $this.find('.arrow-collapse').attr({
         'data-toggle' : 'collapse',
         'data-target' : '#collapseItem' + counter,
       });
 
       $this.find('> ul').attr({
         'class' : 'collapse',
         'id' : 'collapseItem' + counter,
       });
 
       counter++;
 
     });
 
   }, 1000);
 
 \t$('body').on('click', '.arrow-collapse', function(e) {
     var $this = $(this);
     if ( $this.closest('li').find('.collapse').hasClass('show') ) {
       $this.removeClass('active');
     } else {
       $this.addClass('active');
     }
     e.preventDefault();  
     
   });
 
 \t$(window).resize(function() {
 \t\tvar $this = $(this),
 \t\t\tw = $this.width();
 
 \t\tif ( w > 768 ) {
 \t\t\tif ( $('body').hasClass('offcanvas') ) {
 \t\t\t\t$('body').removeClass('offcanvas');
 \t\t\t}
 \t\t}
 \t});
 
 \t$('.js-burger-toggle-menu').click(function(e){
 \t\te.preventDefault();
 \t\tif ( $('body').hasClass('offcanvas') ) {
   \t\t\t$('body').removeClass('offcanvas');
   \t\t\t$('.js-burger-toggle-menu').removeClass('open');
   \t\t} else {
   \t\t\t$('body').addClass('offcanvas');\t
   \t\t\t$('.js-burger-toggle-menu').addClass('open');
   \t\t}
   });
 
 }; 
 
 
 
 
 // var siteIstotope = function() {
 
 
 \t\t  
 \t
 // }
 
 var owlCarouselPlugin = function() {
 
 \t$('.testimonial-slider').owlCarousel({
     center: false,
     items: 1,
     loop: true,
     stagePadding: 20,
   \tmargin: 10,
     smartSpeed: 2000,
     autoplay: true,
     autoplayHoverPause: true,
     dots: true,
     nav: true,
     navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
 
     responsive:{
         400:{
           stagePadding: 20,
   \t\t\t\tmargin: 10,
         },
         600:{
           stagePadding: 100,
   \t\t\t\tmargin: 50,
         }
     }
 \t});
 \towlSingleSlider();
 
 \tif ( $('.logo-slider').length ) {
 
 \t\t$('.logo-slider').owlCarousel({
 \t\t\tcenter: false,
     \tloop: true,
     \tstagePadding: 0,
     \tmargin: 0,
     \tsmartSpeed: 1000,
     \tautoplay: true,
     \tautoplayHoverPause: true,
     \tdots: false,
     \tnav: false,
     \tresponsive:{
 \t\t    400:{
 \t\t      items: 2
 \t\t    },
 \t\t    768:{
 \t\t    \titems: 3
 \t\t    },
 \t\t    1000:{
 \t\t    \titems: 5
 \t\t    }
     \t}
 \t   });
 \t}
 
 };
 
 var owlSingleSlider = function () {
 \tif ( $( '.single-slider' ).length ) {
 \t\t$('.single-slider').owlCarousel({
     \tcenter: false,
     \titems: 1,
     \tloop: true,
     \tstagePadding: 0,
     \tmargin: 0,
     \tsmartSpeed: 1500,
     \tautoplay: true,
     \tautoplayHoverPause: true,
     \tdots: true,
     \tnav: true,
     \tnavText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
 
     \tresponsive:{
       \t400:{
         \tstagePadding: 0,
 \t\t\t\t\tmargin: 0,
       \t},
       \t600:{
         \tstagePadding: 0,
 \t\t\t\t\tmargin: 0,
       \t}
     \t}
 \t\t});
 \t}
 }
 
 var floatingLabel = function () {
 \t$('.form-control').on('input', function() {
 \t  var $field = $(this).closest('.form-group');
 \t  if (this.value) {
 \t    $field.addClass('field--not-empty');
 \t  } else {
 \t    $field.removeClass('field--not-empty');
 \t  }
 \t});
 };
 
 
 
 // scroll
 var scrollWindow = function() {
 \tvar lastScrollTop = 0;
 \t$(window).scroll(function(event){
 \t\tvar $w = $(this),
 \t\t\t\tst = $w.scrollTop(),
 \t\t\t\tnavbar = $('.unslate_co--site-nav');
 \t\t\t\t// sd = $('.js-scroll-wrap');
 
 \t\tif (st > 150) {
 \t\t\tif ( !navbar.hasClass('scrolled') ) {
 \t\t\t\tnavbar.addClass('scrolled');\t
 \t\t\t}
 \t\t} 
 \t\tif (st < 150) {
 \t\t\tif ( navbar.hasClass('scrolled') ) {
 \t\t\t\tnavbar.removeClass('scrolled sleep');
 \t\t\t}
 \t\t} 
 \t\tif ( st > 350 ) {
 \t\t\tif ( !navbar.hasClass('awake') ) {
 \t\t\t\tnavbar.addClass('awake');\t
 \t\t\t} 
 
 \t\t\t// hide / show on scroll
 \t\t\tif (st > lastScrollTop){
 \t      // downscroll code
 \t      navbar.removeClass('awake');\t
 \t      navbar.addClass('sleep');\t
 \t   \t} else {
 \t      // upscroll code
 \t      navbar.addClass('awake');\t
 \t   \t}
 \t   \tlastScrollTop = st;
 \t\t\t
 
 \t\t}
 \t\tif ( st < 350 ) {
 \t\t\tif ( navbar.hasClass('awake') ) {
 \t\t\t\tnavbar.removeClass('awake');
 \t\t\t\tnavbar.addClass('sleep');
 \t\t\t}
 \t\t}
 
    
 
 \t});
 
 };
 
 
 var counter = function() {
 \t
 \t$('.section-counter').waypoint( function( direction ) {
 
 \t\tif( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
 
 \t\t\tvar comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
 \t\t\t$(this.element).find('.number-counter').each(function(){
 \t\t\t\tvar $this = $(this),
 \t\t\t\t\tnum = $this.data('number');
 \t\t\t\t$this.animateNumber(
 \t\t\t\t  {
 \t\t\t\t    number: num,
 \t\t\t\t    numberStep: comma_separator_number_step
 \t\t\t\t  }, 
 \t\t\t\t  {
 \t\t\t\t  \teasing: 'swing',
 \t    \t\t\t\tduration: 3000
 \t\t\t\t  }
 \t\t\t\t);
 \t\t\t});
 \t\t\t
 \t\t}
 
 \t} , { offset: '95%' } );
 
 };
 
 
 var mobileToggleClick = function() {
 \t$('.js-menu-toggle').click(function(e) {
 
 \t\te.preventDefault();
 
   \tif ( $('body').hasClass('offcanvas') ) {
   \t\t$('body').removeClass('offcanvas');
   \t\t$('.js-menu-toggle').removeClass('active');
   \t\tif ( $('.js-burger-toggle-menu').length ) {
   \t\t\t$('.js-burger-toggle-menu').removeClass('open');
   \t\t}
   \t} else {
   \t\t$('body').addClass('offcanvas');\t
   \t\t$('.js-menu-toggle').addClass('active');
   \t\tif ( $('.js-burger-toggle-menu').length ) {
   \t\t\t$('.js-burger-toggle-menu').addClass('open');
   \t\t}
   \t}
 
 
   });
 
   // click outisde offcanvas
 \t$(document).mouseup(function(e) {
     var container = $(".unslate_co--site-mobile-menu");
     if (!container.is(e.target) && container.has(e.target).length === 0) {
       if ( $('body').hasClass('offcanvas') ) {
 \t\t\t\t$('body').removeClass('offcanvas');
 \t\t\t\t$('body').find('.js-menu-toggle').removeClass('active');
 
 \t\t\t\t$('body').find('.js-burger-toggle-menu').removeClass('open');
 \t\t\t}
     }
 \t}); 
 };
 
 
 
 // navigation
 var onePageNavigation = function() {
   var navToggler = $('.site-menu-toggle');
  \t$("body").on("click", ".unslate_co--site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .unslate_co--site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
     
     e.preventDefault();
 
     var $body = $('body');
     if ( $body.hasClass('offcanvas')  ) {
     \t$body.removeClass('offcanvas');
     \t$('body').find('.js-burger-toggle-menu').removeClass('open');
     }
 
     var hash = this.hash;
     
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 1000, 'easeInOutExpo');
 
   });
 
 };
 
 
 // load ajax page
 var portfolioItemClick = function() {
 \t$('.ajax-load-page').on('click', function(e) {
 \t\t
 \t\tvar id = $(this).data('id'),
 \t\t\thref = $(this).attr('href');
 
 \t\tif ( $('#portfolio-single-holder > div').length ) {
 \t\t\t$('#portfolio-single-holder > div').remove();
 \t\t} 
 
 \t\tTweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });
 
 \t\t$('html, body').animate({
     \tscrollTop: $('#portfolio-section').offset().top - 50
 \t\t}, 700, 'easeInOutExpo', function() {
 \t\t});
 \t\t
 \t\tsetTimeout(function(){
 \t\t\tloadPortfolioSinglePage(id, href);
 \t\t}, 100);
 
 \t\te.preventDefault();
 
 \t});
 
 \t// Close
 \t$('body').on('click', '.js-close-portfolio', function() {
 
 \t\tsetTimeout(function(){
 \t\t\t$('html, body').animate({
 \t    \t\tscrollTop: $('#portfolio-section').offset().top - 50
 \t\t\t}, 700, 'easeInOutExpo');
 \t\t}, 200);
 
 \t\tTweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
 \t\tTweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
 \t\t\tTweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });
 
 \t\t} });
 \t\t
 \t});
 };
 
 $(document).ajaxStop(function(){
 \tsetTimeout(function(){
 \t\tTweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });\t
 \t}, 400);
 });
 
 var loadPortfolioSinglePage = function(id, href) {
 \t$.ajax({
 \t\turl: href,
 \t\ttype: 'GET',
 \t\tsuccess: function(html) {
 
 \t\t\tTweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
 \t\t\t\tTweenMax.set('.portfolio-wrapper', { height: 0 });
 \t\t\t} })
 
 \t\t\tvar pSingleHolder = $('#portfolio-single-holder');
 \t    \t
 \t\t\tvar getHTMLContent = $(html).find('.portfolio-single-wrap').html();
 
 \t\t\tpSingleHolder.append(
 \t\t\t\t'<div id="portfolio-single-'+id+
 \t\t\t\t'" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Back to Portfolio</span><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
 \t\t\t);
 
 \t\t\tsetTimeout(function() {
 \t\t\t\towlSingleSlider();
 \t\t\t}, 10);
 
 \t\t\tsetTimeout(function() {
 \t\t\t\tTweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
 \t\t\t\tTweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {
 
 \t\t\t\t\tTweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });\t
 \t\t\t\t} });
 \t\t\t}, 700 );
 \t\t}
 \t});
 
 \treturn false;
 
 };
 
 var jarallaxPlugin = function() {
 \t$('.jarallax').jarallax({
     speed: 0.2
 \t});
 \tjarallax(document.querySelectorAll('.jarallax-video'), {
     speed: 0.2,
     videoSrc: 'https://www.youtube.com/watch?v=mwtbEGNABWU',
     videoStartTime: 8,
     videoEndTime: 70,
 \t});
 };
 
 var contactForm = function() {
 \tif ($('#contactForm').length > 0 ) {
 \t\t$( "#contactForm" ).validate( {
 \t\t\trules: {
 \t\t\t\tname: "required",
 \t\t\t\temail: {
 \t\t\t\t\trequired: true,
 \t\t\t\t\temail: true
 \t\t\t\t},
 \t\t\t\tmessage: {
 \t\t\t\t\trequired: true,
 \t\t\t\t\tminlength: 5
 \t\t\t\t}
 \t\t\t},
 \t\t\tmessages: {
 \t\t\t\tname: "Please enter your name",
 \t\t\t\temail: "Please enter a valid email address",
 \t\t\t\tmessage: "Please enter a message"
 \t\t\t},
 \t\t\terrorElement: 'span',
 \t\t\terrorLabelContainer: '.form-error',
 \t\t\t/* submit via ajax */
 \t\t\tsubmitHandler: function(form) {\t\t
 \t\t\t\tvar $submit = $('.submitting'),
 \t\t\t\t\twaitText = 'Submitting...';
 
 \t\t\t\t$.ajax({   \t
 \t\t      \ttype: "POST",
 \t\t      \turl: "php/send-email.php",
 \t\t      \tdata: $(form).serialize(),
 
 \t\t      \tbeforeSend: function() { 
 \t\t      \t\t$submit.css('display', 'block').text(waitText);
 \t\t      \t},
 \t\t      \tsuccess: function(msg) {
 \t               if (msg == 'OK') {
 \t               \t$('#form-message-warning').hide();
 \t\t\t            setTimeout(function(){
 \t               \t\t$('#contactForm').fadeOut();
 \t               \t}, 1000);
 \t\t\t            setTimeout(function(){
 \t\t\t               $('#form-message-success').fadeIn();   \t
 \t               \t}, 1400);
 \t\t\t               
 \t\t            } else {
 \t\t               $('#form-message-warning').html(msg);
 \t\t\t            $('#form-message-warning').fadeIn();
 \t\t\t            $submit.css('display', 'none');
 \t\t            }
 \t\t      \t},
 \t\t      \terror: function() {
 \t\t      \t$('#form-message-warning').html("Something went wrong. Please try again.");
 \t\t         $('#form-message-warning').fadeIn();
 \t\t         $submit.css('display', 'none');
 \t\t      }
 \t      \t});    \t\t
 \t  \t\t}
 \t\t\t
 \t\t} );
 \t}
 };
 
 var stickyFillPlugin = function() {
 \tvar elements = document.querySelectorAll('.unslate_co--sticky');
 \tStickyfill.add(elements);
 };
 
 var animateReveal = function() {
 
 
 \tvar controller = new ScrollMagic.Controller();
 \t
 \tvar greveal = $('.gsap-reveal');
 
 \t// gsap reveal
 \t$('.gsap-reveal').each(function() {
 \t\t$(this).append('<span class="cover"></span>');
 \t});
 \tif ( greveal.length ) {
 \t\tvar revealNum = 0;
 \t\tgreveal.each(function() {
 \t\t\tvar cover = $(this).find('.cover');
 
 \t\t\tvar tl = new TimelineMax();
 
 \t\t\tsetTimeout(function() {
 \t\t\t\ttl
 \t\t\t\t\t.fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease:Expo.easeInOut })
 \t\t\t}, revealNum * 0);
 \t\t\t
 \t\t\tvar scene = new ScrollMagic.Scene({
 \t\t\t\ttriggerElement: this,
 \t\t\t\tduration: "0%",
 \t\t\t\treverse: false,
 \t\t\t\toffset: "-300%",
 \t\t\t})
 \t\t\t.setTween(tl)
 \t\t\t.addTo(controller);
 
 \t\t\trevealNum++;
 
 \t\t});
 \t}
 
 \t// gsap reveal hero
 \t$('.gsap-reveal-hero').each(function() {
 \t\tvar html = $(this).html();
 \t\t$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
 \t});
 \tvar grevealhero = $('.gsap-reveal-hero');
 
 \tif ( grevealhero.length ) {
 \t\tvar heroNum = 0;
 \t\tgrevealhero.each(function() {
 
 \t\t\tvar cover = $(this).find('.cover'),
 \t\t\t\trevealContent = $(this).find('.reveal-content');
 
 \t\t\tvar tl2 = new TimelineMax();
 
 \t\t\tsetTimeout(function() {
 
 \t\t\t\ttl2
 \t\t\t\t\t.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
 \t\t\t\t\t\ttl2.set(revealContent, { x: 0 });
 \t\t\t\t\t\ttl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
 \t\t\t\t\t} } )
 \t\t\t}, heroNum * 0 );
 
 \t\t\tvar scene = new ScrollMagic.Scene({
 \t\t\t\ttriggerElement: this,
 \t\t\t\tduration: "0%",
 \t\t\t\treverse: false,
 \t\t\t\toffset: "-300%",
 \t\t\t})
 \t\t\t.setTween(tl2)
 \t\t\t.addTo(controller);
 
 \t\t\theroNum++;
 \t\t});
 \t}
 
 }