/**
 * Created by Administrator on 2017/2/14 0014.
 */
$(function () {
    $('.goods_li').hover(function () {
        $(".divStart").eq($(this).index()).css("borderColor","#423e3e");
    },
    function () {
        $(".divStart").eq($(this).index()).css("borderColor","#ffffff");
    }
    );

    //鼠标移入显示二级菜单

    $('#popnav').mouseenter(function () {
        $('.nav_details').show();
        $('.sn_nav').show();
    });
    $('#popnav').mouseleave(function () {
        $('.nav_details').hide();
        $('.sn_nav').hide();
    });
//    放大镜的制作
    $('#spec_left').click(function () {
        var oLeft=$('#spec_list').width();
        //offset()获取的是元素相对浏览器可视区的位置
        var oLeft1=$('.J_carousel_list').position().left;
        if(oLeft1==0){
            return false;
        }else{
            $(".J_carousel_list").animate({left:0+'px'},1000);
        }
    });
    $('#spec_right').click(function () {
        var oLeft=$('#spec_list').width();
        $(".J_carousel_list").animate({left:-oLeft+'px'},1000);

    });
    //点击小图让大图显示
    $('.J_carousel_list li').mouseenter(function () {
        var oSrc=$(this).children().children().attr("src");
        $('#wrap img').attr("src",oSrc);
    });
    //   设置蒙层
    $('#wrap').hover(function () {
        $('.mousetrap').css({display:'block'});
        $('.mengceng').css({display:'block'});
        $('.wrap1').css({display:'block'});
    },function () {
        $('.mousetrap').css({display:'none'});
        $('.mengceng').css({display:'none'});
        $('.wrap1').css({display:'none'});
    });



});
