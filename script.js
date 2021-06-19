//ナビ
$(function(){
    $(`.menu-trigger`).click(function(){　//.menu-triggerをclickすると、
        $(this).toggleClass(`active`); //.menu-triggerに.activeを追加削除する　　
        if($(this).hasClass(`active`)){ //もし.menu-triggerに.activeがあれば
            $(`.g-navi`).addClass(`active`);　//.g-naviにも.activeを追加
        }else{　//それ以外の場合は
            $(`.g-navi`).removClass(`active`);　//.g-niviにある.activeを削除
        }
    });
    $(`.nav-wrapper ul li a`),click(function(){　//.nav-wrapper ul li aをclickすると、
        $(`.menu-trigger`).removeClass(`active`); //.menu-triggerにある.activeを削除
        $(`.g-navi`).removeClass(`active`); //.g-nabiにある.activeも削除
    });
});


//カルーセル
$(function () {
    function toggleChangeBtn() {
      var slideIndex = $('.staff-box').index($('.active'));
      $('.slide-button').show();
      if (slideIndex == 0) {
        $('.prev').hide();
      } else if (slideIndex == 2) {
        $('.next').hide();
      }
    }
  
    toggleChangeBtn();
  
    $('.next').click(function () {/*nextボタンを押したとき*/
      var $displaySlide = $('.active');/*現在表示中のスライドを取得*/
      $displaySlide.removeClass('active box-design');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
      $displaySlide.next().addClass('active box-design');/*次のスライドにactiveクラスをつけ、表示させる。*/
      toggleChangeBtn();/*nextボタンを隠すか判断*/
    });
    $('.prev').click(function () {/*prevボタンを押したとき*/
      var $displaySlide = $('.active');/*現在表示中のスライドを取得*/
      $displaySlide.removeClass('active box-design');/*そのスライドからactiveクラスを除いて表示されないようにする。*/
      $displaySlide.prev().addClass('active box-design');/*前のスライドにactiveクラスをつけ、表示させる。*/
      toggleChangeBtn();/*prevボタンを隠すか判断*/
    });
  });


//モーダル
  $(function(){
      $(`.modalopen`).each(function(){
          $(this),on(`.click`,function(){
              var target = $(this).dara(`target`);
              var modal = document.getElementById(target);
              console.log(modal);
              $(modal).fadeIn;
              return false;
          });
      });
      $(`.modalClose`).on(`click`,function(){
          $(`.js-modal`).fadeOut();
          return false;
      });
    });




//tab
$(function () {
    var $filters = $('.filter [data-filter]'), // ①
      $boxes = $('.lineup-wrapper [data-category]'); // ②
  
    $filters.on('click', function (e) { // ③
      e.preventDefault(); // ③
      var $this = $(this); // ④
      $filters.removeClass('active'); // ⑤
      $this.addClass('active'); // ⑥
  
      var $filterTime = $this.attr('data-filter'); // ⑦
  
      if ($filterTime == 'all') { // ⑧
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function () {
            $boxes.addClass('is-animated').fadeIn();
          });
      } else { // ⑨
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function () {
            $boxes.filter('[data-category = "' + $filterTime + '"]')
              .addClass('is-animated').fadeIn();
          });
      }
    });
  });
