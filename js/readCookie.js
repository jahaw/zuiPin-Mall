/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(function () {
    //读取存储的地址
    var oTxt=$.cookie('txt');
    if(oTxt==null){
        $('#mem_loca').html("全国");
    }else{
        $('#mem_loca').html(oTxt);
    }


    //读取存取的用户名
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