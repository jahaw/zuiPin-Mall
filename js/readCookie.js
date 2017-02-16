/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(function () {
    var tel = $.cookie("tel");
    if(tel==null){
        $('#lab1').show();
        $('#xs').hide();
    }else{
        $('#lab1').hide();
        $('#xs').show();
        $('#xs').html(tel);
    }
})