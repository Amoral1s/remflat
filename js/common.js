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
  if ($(window).width() < 768) {
    $('.js-plus').on('click', function () { 
      $(this).children('.js-plus-text').css('opacity', '1');
      $('.js-plus').not(this).children('.js-plus-text').css('opacity', '0');
    });
  } else {
    $('.js-plus').on('click', function () { 
      $(this).children('.js-plus-text').css('opacity', '1');
      $(this).css('background', '#000');
    });
  }
  

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
  
  
  $('.popup-close').on('click', function() {
    $('.overlay').removeClass('overlay-active');
    $('.popup').removeClass('popup-active');
    $('.popup-calc').removeClass('popup-active');
    $('.popup-calc2').removeClass('popup-active');
  });
  $('.overlay').on('click', function() {
    $('.overlay').removeClass('overlay-active');
    $('.popup').removeClass('popup-active');
    $('.popup-calc').removeClass('popup-active');
    $('.popup-calc2').removeClass('popup-active');
  });
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });

  if ($(window).width() < 992) {
  $(".header-wrap_button").appendTo(".header-title");
} 

$('#toggle').on('click', function () { 
  $(this).toggleClass('toggle-active');
  $('.header-nav').slideToggle(500);
 });
 if($(window).width() < 768) {
   $('.ethaps-item-right').remove();
   $('.ethaps-maz').remove();
 }

var rooms = $('.rooms'),
    metr = $('.metr'),
    type = $('#type'),
    design = $('#design'),
    result = $('.result'),
    days = $('.res-time'),
    resVal = 0,
    button = $('.callback-calc');
    

$(button).on('click', function() {
  if (metr.val() === '' || metr.val() === isNaN || metr.val() === null ||rooms.val() === isNaN || rooms.val() === '') {
    alert('Заполните все поля для расчета правильно!');
  }
  else {
    resVal = ((+metr.val() * 4000) + +design.val()).toString();
    daysResult = +metr.val() * type.val() / 2.5;
    var total = resVal.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $(result).text(total);
    $(days).text(daysResult);
    $('#rooms').text(rooms.val());
    $('#metr').text(metr.val());
    $('.popup-calc').addClass('popup-active');
    $('.overlay').addClass('overlay-active');
  }

});

$('#calc-button').on('click', function () { 
  $('.popup-calc2').addClass('popup-active');
  $('.popup-calc').removeClass('popup-active');
 });
$('.portfolio-item').on('mouseover', function () { 
    $(this).children('.portfolio-item-text').addClass('port-active');
});
$('.portfolio-item').on('mouseout', function () { 
    $(this).children('.portfolio-item-text').removeClass('port-active');
});



const slider = () => {

    
  const slide = document.querySelectorAll('.page-calc-item');

  const slider = document.querySelector('.page-calc');

  let currentSlide = 0;

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    elem[index-1].classList.remove(strClass);
  };

  slider.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('.calc-button-next')) {
      currentSlide++;
      nextSlide(slide, currentSlide, 'calc-item-active');
    }
    
  });
  
};
slider();

});