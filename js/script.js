$(document).ready(function(){
    $('.carousel__inner').slick({
        // dots: true,
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        // dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
              dotsClass: 'slick-dots',
              dots: true,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,

            }
        }]
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'linear'
      });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

      // $('.catalog-item__link').each(function (i) {
      //   $(this).on('click', function (e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // });
      // $('.catalog-item__back').each(function (i) {
      //   $(this).on('click', function (e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // });

    function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on('click', function (e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

      // modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.mymodal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .mymodal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });
});

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     controls: false,
//     autoplay: false,
//     nav: false,
//   });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });