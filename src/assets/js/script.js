// ドロワーメニューの開閉
$(function() {
  $('.p-drawer-icon').on('click', function(){
    $('.p-drawer').toggleClass('open');
    $(this).toggleClass('open');
    // $('html').toggleClass('fixed');
  });
})

// スムーススクロール -------------------------
$('a[href^="#"]').click(function() {
  let headerheight = 90;
  // スクロールの速度
  let speed = 500; // ミリ秒で記述
  let href= $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top - headerheight;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

// スクロールトップボタン（スクロールで表示） -------------
let pagetop = $('#js-pagetop');   
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {  //500pxスクロールで表示
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
});
pagetop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500); //0.5秒かけてトップへ移動
    return false;
});

// 
$(window).on("scroll", function () {
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  footHeight = $("footer").innerHeight();
  if (scrollHeight - scrollPosition <= footHeight) {
  // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
    $(".p-pagetop").css({
      position: "absolute",
      bottom: footHeight + 13,
    });
  } else {
    $(".p-pagetop").css({
      position: "fixed",
      bottom: "13px",
    });
  }
});

// フォームの部分
$(function() {
  let $formData = $('#js-form')
  $formData.submit(function (e) {
    $.ajax({  
      url: $formData.attr('action'),
      data: $formData.serialize(), 
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".p-reservation-form__end-message").slideDown();
          $formData.fadeOut();
          $(".p-reservation-form__box").fadeOut();
        }
      }
    });
    return false;
  });
})