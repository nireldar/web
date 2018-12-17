$( document ).ready(function() {
  AOS.init({ //Fade Up animation
      once: true
  })
})

$(window).scroll(function() {

  s = $(window).scrollTop();
  $('#section1').css("-webkit-transform", "translateY(-" + (s/8) + "px)");


});
