$(document).ready(function () {
  $('.work-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: true,
      autoplay: false,
      autoplayspeed: 3000,
      speed: 500
  });

  $('.js-plus').on('click', function () { 
    $(this).children('.js-plus-text').css('opacity', '1');
  });

  $('.question-wrap-title').on('click', f_acc);
  function f_acc(){
    if ($(this).hasClass('question-wrap-title-active')) {
      $(this).next().slideUp(600);
      $(this).removeClass('question-wrap-title-active');
      } 
    else {
    $('.question-wrap-text').not($(this).next()).slideUp(600);
    $(this).next().slideDown(600);
    $(this).addClass('question-wrap-title-active');
    $('.question-wrap-title').not(this).removeClass('question-wrap-title-active');
      }
  }
  $('.callback').on('click', function () {
    $('.overlay').addClass('overlay-active');
    $('.popup').addClass('popup-active');
  });
  
  $('.callback-calc').on('click', function () {
    if ($('.rooms').val() === '' || $('.metr').val() === '' || $('.rooms').val() === isNaN || $('.metr').val() === isNaN) {
      alert('Заполните все поля правильно!');
    } else {
      $('.overlay').addClass('overlay-active');
      $('.popup-calc').addClass('popup-active');
      $('#type').text($('.type').val());
      $('#design').text($('.design').val());
    }
  });
  $('.popup-close').on('click', function() {
    $('.overlay').removeClass('overlay-active');
    $('.popup').removeClass('popup-active');
    $('.popup-calc').removeClass('popup-active');
  });
  $('.overlay').on('click', function() {
    $('.overlay').removeClass('overlay-active');
    $('.popup').removeClass('popup-active');
    $('.popup-calc').removeClass('popup-active');
  });
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
  $('.rooms').change(function (){
    $('#rooms').text($('.rooms').val());
  });
  $('.metr').change(function (){
    $('#metr').text($('.metr').val());
  });
 
  
});