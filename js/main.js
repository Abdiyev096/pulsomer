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

  $('.catalog-item__button').on('click', function() {
    $('.popup, #order').fadeIn('slow');
  });

  $('input[name=phone]').mask("+7-(999)-999-9999");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('#request').fadeIn();
      $('form').trigger('reset');
    });
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('.up-arrow').fadeIn();
    } else{
      $('.up-arrow').fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

});