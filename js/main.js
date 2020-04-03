$(document).ready(function () {
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/left.png" alt="Стрелка"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/right.png" alt="Стрелка"></button>'
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  $('.catalog-item_back').each(function(i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  // Modal elements
  $('[data-modal=consultation]').on('click', function() {
    $('.popup, #consultation').fadeIn('slow');
  });

  $('.popup__close').on('click', function() {
    $('.popup, #consultation, #order, #request').fadeOut('slow');
  });

  $('.popup').on('click', function () {
    $('.popup, #consultation, #order, #request').fadeOut('slow');
  });

  $('.catalog-item__button').on('click', function() {
    $('.popup, #order').fadeIn('slow');
  });

});