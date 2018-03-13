$(document).ready(function () {

  $(".qbh-shopping-main-again").on('click',function(){
    $.fn.fullpage.moveTo(1);

  })
  $('#fullpage').fullpage({
    // 给每一屏添加不同的颜色
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#fed', '#d04759', '#84d9ed', '#8ac060'],
    // 给整个宣传页添加小圆点导航
    navigation: true,
    // 鼠标移上小圆点显示的文字提示
    // navigationTooltips:['第一屏', '第二屏'],

    // 当页面载入之后的回调函数
    // index 索引
    afterLoad: function (anchorLink, index) {
      // 第二屏动画
      if (index == 2) {
        // 2.正在打字的搜索框动画
        // 让未完成的搜索框显示然后向左移动
        // animate(样式,总时间,速度,回调函数)
        $('.qbh-list-unfinish').animate({
          opacity: 1,
          marginRight: -111
        }, 1000, function () {

          $('.qbh-list-unfinish img:last-child ').animate({
            opacity: 1
          }, 1000, function () {
            // display: none;
            $('.qbh-list-unfinish').hide();
            // $('.qbh-list-unfinish').css({
            //   "opacity": 0
            // })
            // 3.打字完成的搜索框动画
            // 3.1 显示图片
            // 3.2 让图片向右上角进行运动和缩小
            $('.qbh-list-finish').show().animate({
              width: 130,
              marginRight: -270,
              bottom: 450
            }, 1000);
            // 4.沙发列表动画
            $('.qbh-list-sofas').animate({
              width: 442
            }, 1000)
            // 5.顶部广告语动画
            $('.qbh-list-word img:last-child ').animate({
              opacity: 1
            }, 1000)
          })

        })
      }
      // 第五屏动画(进入第五屏以后动画开始)
      if (index == 5) {
        // 让手上移 
        $('.qbh-payment-hands').animate({
          bottom: 0
        }, 1000, function () {
          // 然后鼠标变颜色
          $('.qbh-payment-mouse img:first-child').hide();
        })
        // 沙发显示然后掉入银行卡(让沙发延迟显示)
        // 在jquery中 如果要让delay(延迟)起作用  必须要给show中添加一个0
        // hide也是如此

        // display 和opacity什么时候用
        // display属性不会出现过渡 即使添加了transition
        // opacity属性适合有过渡的元素使用
        // 你们认为我们如果让一个元素隐藏有多少种方法
        // right 定位  transform 转换
        // 转换中有四种转换方法
        // translateZ和perspective
        $('.qbh-payment-drop').delay(1000).show(0).animate({
          bottom: 200
        }, 1000, function () {
          // 银行卡账单上移
          $('.qbh-payment-bill img:first-child').animate({
            top: -100
          }, 1000)
          // 沙发下移
          $('.qbh-payment-bill img:last-child').animate({
            top: 160
          }, 1000)
        })
      }
      // 第七屏动画
      if (index == 7) {
        $('.qbh-appraise-main-star').animate({
          width: 99
        },2000,function(){
          $('.qbh-appraise-haoping').show().animate({
            left: 40
          },500,function(){
           $(this).animate({
             width: 72
           },500,function(){

           })
          })
        })
      }

      // 第八屏动画
      if(index == 8) {
        // 当鼠标在第八屏移动的时候
        $(document).mousemove(function(e){
          // console.log(1);
          // 获取鼠标的位置
          var x = e.pageX - 85;
          var y = e.pageY + 10;
          var yy = $(window).height() - 449;
          // console.log(e);
          // 把鼠标的位置的坐标设置给手图片
          if(y < yy) {
            $(".qbh-shopping-hands").css({
              "left": x,
              "top": yy
            })
          }else {
            $(".qbh-shopping-hands").css({
              "left": x,
              "top": y
            })
          }
        
        })
      }
    },
    // 一旦用户离开某个section，过渡到新section，就会触发此回调
    onLeave: function (index, nextIndex, direction) {
      // 第三屏动画
      if (index == 2 && nextIndex == 3) {
        //  让第二屏的小沙发显示并掉落(定位)
        $('.qbh-list-drop ').show().animate({
          bottom: -($(window).height() - 260),
          width: 207,
          right: 630
        }, 1000, function () {
          // 沙发规格选择动画(如果动画有点生硬 那么可以选择用opacity来做)
          $('.qbh-buy-main-choose-false').hide();
        })
      }
      // 第四屏动画
      if (index == 3 && nextIndex == 4) {
        $('.qbh-buy-drop').show().animate({
          // -(整个屏幕的高度-离底部的距离)
          bottom: -($(window).height() - 200 - 32),
          right: 510
        }, 1000, function () {
          // 让掉落的沙发隐藏
          $(".qbh-buy-drop").hide();
          // 让购物车中的沙发显示 
          $('.qbh-info-cart img:last-child').show();
          // 让购物车离开
          $('.qbh-info-cart').animate({
            right: -1000
          }, 2000, function () {
            // 变化广告语
            $('.qbh-info-word img:last-child').show();
            // 买家信息显示
            $('.qbh-info-user').show();
          })
        })
      }
      if (index == 5 && nextIndex == 6) {
        $('.qbh-payment-drop2').show().animate({
          bottom: -($(window).height() - 400),
          width: 80
        }, 1200, function () {
          $(this).css({
            "opacity": 0
          })
        })

        $('.qbh-delivery-box').show().animate({
          bottom: 410,
          left: 240
        }, 1000, function () {
          $(this).animate({
            bottom: 90,
            left: 450,
            width: 20
          }, 1000, function () {
            $(this).hide();
            $(".qbh-delivery-running img:nth-child(2)").show();
            // 让第一个广告语慢慢的消失
            $(".qbh-delivery-word img:first-child").animate({
              opacity: 0
            },1000);
               // 车开始走
            $('.qbh-delivery').animate({
              backgroundPositionX: '100%'
            }, 2000, function () {
              // 另外一个广告语出现(车停下)
              $(".qbh-delivery-word img:first-child").hide();
              $('.qbh-delivery-running img:nth-child(3)').animate({
                height: 305,
                bottom: 112
              }, 1000, function () {
                // 让送货员走一段距离
                $(this).animate({
                  right: -150
                }, 1000, function () {
                  // 开门
                  $('.qbh-delivery-door').show();
                  // 女孩变大
                  $('.qbh-delivery-buyer').animate({
                    height: 294
                  },1000,function(){
                    $('.qhb-delivery-message').show();
                  })
                })
              })
            })
          })
        })
      }
    }
  });
});