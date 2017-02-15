/**
 * Created by Administrator on 2017/2/15 0015.
 */
$(function () {
    $('.goods_li').hover(function () {
            $(".divStart").eq($(this).index()).css("borderColor","#423e3e");
        },
        function () {
            $(".divStart").eq($(this).index()).css("borderColor","#ffffff");
        }
    );
})