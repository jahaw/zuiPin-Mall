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
        var oLeft=$('.J_carousel_list').width();
        $('.J_carousel_list').css({left:-oLeft});
        $('.J_carousel_list').animate({left:oLeft},500);

    })




})
