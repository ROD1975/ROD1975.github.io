(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');

     $(document).ready(function(){
      $('.slider').slider();
    });

     
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
      