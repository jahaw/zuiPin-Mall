/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(function () {
    //��ȡ�洢�ĵ�ַ
    var oTxt=$.cookie('txt');
    if(oTxt==null){
        $('#mem_loca').html("ȫ��");
    }else{
        $('#mem_loca').html(oTxt);
    }


    //��ȡ��ȡ���û���
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