/* ================= Smooth Scroll ====================== */
$(document).ready(function () {

  // add the event listener for 'click' events
  $('.nav-link, .a').on('click', function (e) {
    e.preventDefault(); // prevent the default action from executing
    var id = $(e.currentTarget).attr('href'); // get the destinations id
    var $dest = $(id); // convert the desination into a jQuery object

    // animate the scroll position to the destination over a period of 1000ms
    $('html,body').animate({
      scrollTop: ($dest.offset().top)
    }, 1000);
  });

});
/* =============== fixed navbar ====================*/
       $('.nav-link').on('click', function () {
        
        $(this).parent().addClass('active').siblings('li').removeClass('active');
        
    });
       
$(function(){
    var navbar = $('.navbar');
    var logo = $('.logo');
    var nav = $('.navbar-nav');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
          navbar.css({"background-color": "transparent", "padding": "27px 70px 0px 70px", 'box-shadow':'none'});
	 logo.css({'display': 'block'});
       nav.css({'margin-left':'40%'});
          
        } else {
          navbar.css({'background':'#ffff', 'padding':'0px 70px 0px 70px', 'box-shadow':'0px 10px 20px rgba(0, 0, 0, 0.4)'});
	  logo.css({'display': 'none'});
	nav.css({'margin-left':'10%'});

	/*  navbar.css();
          navbar.css();
	  .logo.css('')*/
        }
    });  
})
/* ============ loading ========= */
$(window).load(function () {
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);

});
