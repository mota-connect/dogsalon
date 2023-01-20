// ドロワーメニューの開閉
$(function() {
  $('.p-drawer-icon').on('click', function(){
    $('.p-drawer').toggleClass('open');
    $(this).toggleClass('open');
    // $('html').toggleClass('fixed');
  });
})