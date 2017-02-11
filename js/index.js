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
    //  下拉列表
    $('.sn-menu').hover(function(){
            $(this).find('.my-Acc').addClass('my-Accbg');
            $(this).find('.my-Menu').show();
        },
        function(){
            $(this).find('.my-Acc').removeClass('my-Accbg');
            $(this).find('.my-Menu').hide(50);
        });
    //  侧边栏显示
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
    //    轮播图制作
    var i=$('.slide_img').children().length;
    //定义一个变量i，来获取slide_img下面的<img>标签数量(长度);
    var j = 1;
    //定义一个变量j，初始化值为0。j表示slide_bar下面的标签数量;
    var cla = '';
    //定义一个变量cla，cla=''表示字符串；
    $('#slide').append('<div class="slide_bar"></div>');
    //追加<div id='slide'>下的子元素为<div class="slide_bar"></div>;
    for(j;j<=i;j++) {
        if(j == 1){
            cla = 'dq';
            //当j==1的时候，按钮的样式为dq；
        }
        else {
            cla = 'no';
            //其他时候，按钮样式为no;
        }
        $('.slide_bar').append('<div id="f'+j+'" class="'+cla+'" onclick="changeslide('+j+')">'+j+'</div>');
        //在j进行循环的时候，进行<div class="slide_bar">中<div>内容的追加；
    }

        $(".slide_img").mouseover(function(){stopAm();}).mouseout(function(){startAm();});
        $(".slide_bar div").each(function(index){
            var j = index+1;
            $(this).mouseover(function(){changeslide(j);stopAm();}).mouseout(function(){startAm();});
        });
        startAm();
    //    限时抢购图片效果显示
        $('#tabtag1').children().mouseenter(function () {
            $(this).addClass('cur');
            $('#tab_box>li').eq($(this).index()).animate({left:"-984px"},'slow');
        })
        $('#tabtag1').children().mouseleave(function () {
            $(this).removeClass('cur');
        })





});