// function FixedAnime() {
//   var headerH = $('#header-js').outerHeight(true);
//   var scroll = $(window).scrollTop();
//   if (scroll >= headerH){//headerの高さ以上になったら
//       $('.l-header').addClass('fixed');//fixedというクラス名を付与
//       $('#header-js').css('margin-top','90px');
//     }else{//それ以外は
//       $('.l-header').removeClass('fixed');//fixedというクラス名を除去
//       $('#header-js').css('margin-top','0');
//     }
// }

// $(window).scroll(function () {
//   FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
// });