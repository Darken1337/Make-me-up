// const { default: Swiper } = require("swiper");

//select
$('.select__header').on('click',function(){
   var btn = $(this);
   var select = btn.closest('.select');
   var selectS = select.closest('.nav').find('.select');
   if(select.hasClass('nav__item') && !select.hasClass('open')){
      $(selectS).each(function(){
         $(this).removeClass('open');
         $(this).find('.select__body').fadeOut();
      })
   }
   select.toggleClass('open');
   if(select.hasClass('open')){
      select.find('.select__body').fadeIn();
   }else{
      select.find('.select__body').fadeOut();
   }
})

   //нажатие вне селекта
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".select__body").length && !$(e.target).closest(".select__header").length) {
         $('.select.open').find('.select__body').fadeOut();
         $('.select.open').removeClass('open');
      }
      e.stopPropagation();
   });
   //нажатие вне селекта

//select end
new Swiper ('.swiper-container', {
   // навигация, кнопки.swiper-container--second
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     mousewheel: { 
       sensitivity: 1,
     },
     autoHeight: true, 
     slidesPerView: 3, 
     watchOverflow: true, 
     spaceBetween: 19, 
     loop: true
});
new Swiper ('.swiper-container--second', {
   // навигация, кнопки
      navigation: {
         nextEl: '.swiper-button-next--second',
         prevEl: '.swiper-button-prev--second',
      },
      mousewheel: { 
         sensitivity: 1,
      },
      autoHeight: true, 
      slidesPerView: 3, 
      watchOverflow: true, 
      spaceBetween: 19, 
      loop: true      
});

//popup
   //popup open
   $('.btn-popup').on('click',function(){
      var btn = $(this);
      var popups = $('body').find('popup');
      $(popups).each(function(){
         $(this).fadeOut();
      })
      if(btn.hasClass('btn-search')){
         $('.popup-search').fadeIn();
      }
   })
   //popup open end
   //popup close
   $('.popup-close').on('click',function(){
      $(this).closest('.popup').fadeOut();
      if($(this).closest('.popup').hasClass('popup-search')){
         $(this).closest('.popup').find('.popup-search__input').val('');
         //test
            $(this).closest('.popup').find('.popup-search__block').removeClass('open');
            $(this).closest('.popup').find('.popup-search__block').find('.popup-search__body').fadeOut();
         //test end
      }
   })
   
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".btn-popup").length && !$(e.target).closest(".popup__content").length) {
         $('.popup').fadeOut();
      }
      e.stopPropagation();
   });
   //popup close end
   //popup search test
      $($('.popup-search').find('.icon-search')).on('click',function(){
         $(this).closest('.popup-search__block').addClass('open');
         $(this).closest('.popup-search__block').find('.popup-search__body').fadeIn();
      })
   //popup search text end
//popup end