/**
 * Created by Administrator on 2017/2/10 0010.
 */
$(document).ready(function(){
    $('.location').hover(function () {
        $('.location').css({backgroundColor:'#ffffff'});
        $('.loca_box').css('display','block');
    },
    function () {
        $('.location').css({backgroundColor:'#ebebeb'});
        $('.loca_box').css('display','none');
    });
    //  �����б�
    $('.sn-menu').hover(function(){
            $(this).find('.my-Acc').addClass('my-Accbg');
            $(this).find('.my-Menu').show();
        },
        function(){
            $(this).find('.my-Acc').removeClass('my-Accbg');
            $(this).find('.my-Menu').hide(50);
        });
    //  �������ʾ
    $('.sn_nav').children().mouseenter(function () {
        $('.popbox').eq($(this).index()).css("display","block");
        $(this).addClass("list_current");
    });
    $('.sn_nav').children().mouseleave(function () {
        $('.popbox').eq($(this).index()).css("display","none");
        $(this).removeClass("list_current");
    });

    $('.nav_right ul>li').mouseover(function(){
        $(this).addClass('bg1');
    });
    $('.nav_right ul>li').mouseout(function(){
        $(this).removeClass('bg1');
    })
    $('.banner_box').attr('style','background:'+$('.slide_img').children().eq(0).attr('name'));
    $('.slide_img').children().each(function(index){
        $(this).attr('id','slide'+(index+1));
    });
    //    �ֲ�ͼ����
    var i=$('.slide_img').children().length;
    //����һ������i������ȡslide_img�����<img>��ǩ����(����);
    var j = 1;
    //����һ������j����ʼ��ֵΪ0��j��ʾslide_bar����ı�ǩ����;
    var cla = '';
    //����һ������cla��cla=''��ʾ�ַ�����
    $('#slide').append('<div class="slide_bar"></div>');
    //׷��<div id='slide'>�µ���Ԫ��Ϊ<div class="slide_bar"></div>;
    for(j;j<=i;j++) {
        if(j == 1){
            cla = 'dq';
            //��j==1��ʱ�򣬰�ť����ʽΪdq��
        }
        else {
            cla = 'no';
            //����ʱ�򣬰�ť��ʽΪno;
        }
        $('.slide_bar').append('<div id="f'+j+'" class="'+cla+'" onclick="changeslide('+j+')">'+j+'</div>');
        //��j����ѭ����ʱ�򣬽���<div class="slide_bar">��<div>���ݵ�׷�ӣ�
    }

        $(".slide_img").mouseover(function(){stopAm();}).mouseout(function(){startAm();});
        $(".slide_bar div").each(function(index){
            var j = index+1;
            $(this).mouseover(function(){changeslide(j);stopAm();}).mouseout(function(){startAm();});
        });
        startAm();
    //    ��ʱ����ͼƬЧ����ʾ
        $('#tabtag1').children().mouseenter(function () {
            $(this).addClass('cur');
            $('#tab_box>li').eq($(this).index()).animate({left:"-984px"},'slow');
        })
        $('#tabtag1').children().mouseleave(function () {
            $(this).removeClass('cur');
        })





});