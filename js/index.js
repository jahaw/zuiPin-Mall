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
    //���ﳵ��ʾЧ��
    $('.cart_t').hover(function () {
        $('.cart_detail').show();
    },
    function () {
        $('.cart_detail').hide();
    }
    );
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
    $("#tabtag1 li").mouseover(function(){
        $(this).addClass('cur').siblings().removeClass("cur");
        $("#tabcon1 li").eq($(this).index()).css("display","block").siblings().css("display","none");
    });
    //�ǵø�ÿ��ͼƬ�Ӷ���Ч��Ŷ��
    /*$('#tabcon1 li').mouseover(function () {
        $(this).css({border:'1px solid silver', boxShadow:'5px 5px 8px red'});
    });*/

    //�ַ��ٵ�����
    $('.rank_t').hover(function () {
        $('.rank_c').eq($(this).index()).show();
    },function () {
        $('.rank_c').eq($(this).index()).hide();
    });
    //�����ֲ�ͼ������
        $(function () {
        var oWidth = $("#divImg").width();
        $("#tabtag2 li").mouseover(function() {
            var index = $(this).index();
            i = index;
            $(this).addClass("cur").siblings().removeClass("cur");
            $("#tabcon2").stop().animate({
                left: index * oWidth * (-1) + "px"
            });
        })
        var timer=null;
        var i=0;
        function autoPlay(){
            var oLength = $("#tabtag2 li").length;
            timer = setInterval(function() {
                i++;
                if(i == oLength ) {
                    i = 0;
                    $("#tabcon2").css({
                        "left": "0px"
                    })
                }
                $("#tabcon2").stop().animate({
                    left: i * oWidth * (-1) + "px"
                });
                $("#tabtag2 li").eq(i % oLength).addClass("cur").siblings().removeClass("cur");
            }, 2000);
        }
        autoPlay();
        $("#tabcon2").mouseover(function() {
            clearInterval(timer);
        });
        $("#tabcon2").mouseout(function() {
            autoPlay();
        });
        })
    //����Ʒ������

    //    ���·�ת�ֲ�ͼ
    $(function () {
        var oHeight=$('#div2').height();
        var oLength=$('.index_mod_banner img').length;
        var timer;
        var i=0;
        timer=setInterval(function () {
            i++;
            if(i=oLength){
                i=0;
            }
            $('.index_mod_banner').css({top:i*oHeight*(-1)})
        },1000);

    })








    //���¹����ֲ�ͼ������
 /*       var oHeight = $(".oneZuiPin_center ul li img").height();
        $(".oneZuiPin_zero span").mouseover(function() {
            var index = $(this).index();
            i = index;
            $(this).addClass("cc").siblings().removeClass("cc");
            $(".oneZuiPin_centerLeft ul").stop().animate({
                "top": -i* oHeight + "px"
            });
        })
        var timer=null;
        var i=0;
        function autoPlay(){
            var oLength = $(".oneZuiPin_zero span").length;
            timer = setInterval(function() {
                i++;
                if(i>=3) {
                    $(".oneZuiPin_centerLeft ul").css({
                        "top":"0"
                    })
                    i = 0;
                }
                $(".oneZuiPin_centerLeft ul").stop().animate({
                    "top": -i * oHeight
                });
                $(".oneZuiPin_zero span:eq("+i+")").addClass("cc").siblings().removeClass("cc");
            }, 2000);
        }
        autoPlay();
        $(".oneZuiPin_zero span").mouseover(function() {
            clearInterval(timer);
        });
        $(".oneZuiPin_zero span").mouseout(function() {
            autoPlay();
        });
  */



});