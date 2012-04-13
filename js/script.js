$(function(){
  var $iphone_btn = $('#btn-iphone-toggle'),
      $iphone_carousel = $('#iphone-carousel'),
      $iphone_video = $('#iphone-video');

  // Bootstrap Carousel.
  $iphone_carousel.carousel({
    interval: 8000
  });

  // Bind button to toggle between carousel and video.
  $iphone_btn.bind('click', function(){
    if ( $(this).hasClass('iphone-active') ) {
      $iphone_video.fadeOut(function(){
        $iphone_carousel.fadeIn();
      });

      $(this).removeClass('iphone-active');
    }
    else {
      $iphone_carousel.fadeOut(function(){
        $iphone_video.fadeIn();
      });

      $(this).addClass('iphone-active');
    }
  });
});
