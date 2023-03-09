// ドロワーメニューの開閉
$(function() {
  $('.p-drawer-icon').on('click', function(){
    $('.p-drawer').toggleClass('open');
    $(this).toggleClass('open');
    // $('html').toggleClass('fixed');
  });
})

// フォームの送信時

$(document).ready(function () {

  $('#js-form').submit(function (event) {
    var formData = $('#js-form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfsJ9_sK1xE1IC4dZGq2kQmDKFGX3So9uZt3tSAFwxGFJLiEw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".p-reservation-form__end-message").slideDown();
          $("#js-form").fadeOut();
          $(".p-reservation-form__box").fadeOut();
          //window.location.href = "thanks.html";
        }
      }
    });
    event.preventDefault();
  });

});