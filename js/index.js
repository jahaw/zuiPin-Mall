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
    //cookie�洢����б�
    //�洢cookie
    $(".ul1 li").click(function () {
        var txt=$(this).text();
        //mem_loca �洢��ַ��cookie
        $('#mem_loca').text(txt);
        $.cookie( "mem_loca" , txt  , { path: '/', expires: 7 });
        location.href="index.html";
    //    �������⣺�������֮��Ӧ�ô��¼���ҳ�棡����
    });
    //�������ݽ������ݲ���
    function showData (data) {
        // var oUl=document.getElementById("ul1");
        // $('.drop')
        var html='';
        for(var i=0;i<data.s.length;i++){
            if(data.s.length){
                // oUl.style.display="block";
                $('#drop').show();
                html+='<li><a href="http://www.baidu.com/s?wd='+data.s[i]+'">'+data.s[i]+'</a></li>';
                // oUl.innerHTML=html;
                $('#drop').html(html);
            }
            else{//�������Ϣ������oUl.
                // oUl.style.display="none";
                $('#drop').hide();
            }
        }
    }
    $(function () {
        $('.search_input').keyup(function () {
            if(this.val()!=''){
                var oScript=document.createElement('script');
                oScript.src="http://suggestion.baidu.com/su?wd="+this.value+"&cb=showData";
                document.body.appendChild(oScript);
            }else{
                $('#drop').hide();
            }
        });
        $('.search_button').click(function () {
            window.open("http://www.baidu.com/s?wd="+$('.search_input').val());
        });
        window.document.onkeydown = disableRefresh;
        function disableRefresh(evt){
            evt = (evt) ? evt : window.event
            if (evt.keyCode) {
                if(evt.keyCode == 13){
                    window.open("http://www.baidu.com/s?wd="+$('.search_input').val());
                }
            }
        }


    })







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
        $(this).next('.rank_c').show();
        $('.rank_c').mouseenter(function () {
            $(this).show();
        });
    },function () {
        $(this).next('.rank_c').hide();
        $('.rank_c').mouseleave(function () {
            $(this).hide();
        });
    });
    $()
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

    //���¹����ֲ�ͼ������
        var oHeight = $("#div2").height();
        $("#spa span").mouseover(function() {
            var index = $(this).index();
            i = index;
            $(this).addClass("spa").siblings().removeClass("spa");
            $("#div2 ul").stop().animate({
                "top": -i* oHeight + "px"
            });
        })
        var timer=null;
        var i=0;
        function autoPlay(){
            var oLength = $("#div2 span").length;
            timer = setInterval(function() {
                i++;
                if(i>=3) {
                    $("#div2 ul").css({
                        "top":"0"
                    })
                    i = 0;
                }
                $("#div2 ul").stop().animate({
                    "top": -i * oHeight
                });
                $("#spa span:eq("+i+")").addClass("spa").siblings().removeClass("spa");
            }, 2000);
        }
        autoPlay();
        $("#div2 ul").mouseover(function() {
            clearInterval(timer);
        });
        $("#div2 ul").mouseout(function() {
            autoPlay();
        });
        //�ص���������
        $(function () {
            var bSys=true;
            var timer=null;
            window.onscroll=function () {
                if(!bSys){//��ϵͳ����
                    clearInterval(timer);
                }
                bSys=false;//ϵͳ�����涨Ϊfalse
            };
            $('#toTop').click(function () {
                timer = setInterval(function () {
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    //ǰ������ie���������������ff�����
                    var iSpeed = Math.floor(0 - scrollTop / 8);
                    <!--����ȡ��-->
                    console.log(iSpeed);
                    if (scrollTop == 0) {
                        clearInterval(timer);//�رն�ʱ��
                    }
                    bSys = true;
                    document.documentElement.scrollTop = document.body.scrollTop = scrollTop + iSpeed;
                }, 20)
            })
            })




    })



