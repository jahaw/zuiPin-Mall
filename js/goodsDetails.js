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

    //���������ʾ�����˵�

    $('#popnav').mouseenter(function () {
        $('.nav_details').show();
        $('.sn_nav').show();
    });
    $('#popnav').mouseleave(function () {
        $('.nav_details').hide();
        $('.sn_nav').hide();
    });
//    �Ŵ󾵵�����
    $('#spec_left').click(function () {
        var oLeft=$('.J_carousel_list').width();
        $('.J_carousel_list').css({left:-oLeft});
        $('.J_carousel_list').animate({left:oLeft},500);

    })




})
