$(function(){
    /* menu button  */
    var btn = $(".navbar_btn");
    var btn_active = $(".navbar_btn_active");
    btn.click(function (e){
      e.preventDefault;
      btn.toggleClass("navbar_btn_active");
    });
    btn.click(function (e) {
      e.preventDefault;
      $(".navbar_main").toggleClass("active");
    });
    /* menu button end */

    /* popup  */
    $('.advantages-1').css('display','none');
    $('.open').click(function () {
        $('.advantages-1').css('display','flex');
    })
    $('.close_1').click(function () {
        $('.advantages-1,.advantages-2,.advantages-3,.advantages-4,.advantages-5,.advantages-6').css('display','none');
    })
    $('.advantages-2').css('display','none');
    $('.open_1').click(function () {
        $('.advantages-2').css('display','flex');
    })
    $('.advantages-3').css('display','none');
    $('.open_2').click(function () {
        $('.advantages-3').css('display','flex');
    })
    $('.advantages-4').css('display','none');
    $('.open_3').click(function () {
        $('.advantages-4').css('display','flex');
    })
    $('.advantages-5').css('display','none');
    $('.open_4').click(function () {
        $('.advantages-5').css('display','flex');
    })
    $('.advantages-6').css('display','none');
    $('.open_5').click(function () {
        $('.advantages-6').css('display','flex');
    })
    /* popup end */

    /* slider say */
    $('.item').click(function () {
        $('.item').removeClass('active')
        $('.mySlides').removeClass('active')
        $('.comments').removeClass('active')
        $('.item').removeClass('active').eq($(this).index()).addClass('active');
        $('.mySlides').removeClass('active').eq($(this).index()).addClass('active');
        $('.comments').removeClass('active').eq($(this).index()).addClass('active');

    })
    var prev = $('.left');
    var next = $('.right');
    var dots = $('.item');
    var Slids = $('.mySlides');
    var text = $('.comments');
    var i = 0;
    prev.click(function () {
        $('.item').removeClass('active')
        $('.mySlides').removeClass('active')
        $('.comments').removeClass('active')
        dots.eq(i).removeClass('active');
        Slids.eq(i).removeClass('active');
        text.eq(i).removeClass('active');
        i--;
        if (i < 0) {
        i = $('.item').length - 1
        }
        dots.eq(i).addClass('active');
        Slids.eq(i).addClass('active');
        text.eq(i).addClass('active');
    })
    next.click(function () {
        $('.item').removeClass('active')
        $('.mySlides').removeClass('active')
        $('.comments').removeClass('active')
        dots.eq(i).removeClass('active');
        Slids.eq(i).removeClass('active');
        text.eq(i).removeClass('active');
        i++;
        if (i > $('.item').length - 1)(i = 0)
        dots.eq(i).addClass('active');
        Slids.eq(i).addClass('active');
        text.eq(i).addClass('active');
    })
    /* slider say end */

    /* card animation */
    $('.card').on('click', function(){
        $(this).toggleClass('active');
    });
    /* card animation end */

    /* якорная ссылка */
    var link = $('.navbar_main .menu li a');

    link.on('click', function (e) {
        e.preventDefault();
        link.removeClass('active');
        var selector = $(this).addClass('active').attr('href');
        var target = $(selector);
        $('html, body').animate({
            scrollTop: target.offset().top - 100
        }, 500);    
    })
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
          $(".navbar .top").fadeIn();
        }else{
          $(".navbar .top").fadeOut();
        }
      })
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
          $(".navbar").addClass('active');
        }else{
          $(".navbar").removeClass('active');
        }
      })
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        link.each(function(){
          var selector = $(this).attr('href');
          var target = $(selector);
          if(scroll >= target.offset().top - 200){
            link.removeClass('active');
            $(this).addClass('active');
          }
        })
      })
      $(".navbar .top").click(function(){
        $("html, body").animate({
          scrollTop:0
        },1000);
      })
    /* якорная ссылка end */
});
