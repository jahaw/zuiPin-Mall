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
     // ����ť����һ������¼����洢��Ϣ��
     function svInfo() {
         console.log("a");
     }





     //  ʵ�ַŴ󾵵�Ч��
     $(document).ready(function(){

         // ͼƬ���¹���

         var count = $("#imageMenu li").length - 5; /* ��ʾ 6 �� li��ǩ���� */

         var interval = $("#imageMenu li:first").width();

         var curIndex = 0;



         $('.scrollbutton').click(function(){

             if( $(this).hasClass('disabled') ) return false;



             if ($(this).hasClass('smallImgUp')) --curIndex;

             else ++curIndex;



             $('.scrollbutton').removeClass('disabled');

             if (curIndex == 0) $('.smallImgUp').addClass('disabled');

             if (curIndex == count-1) $('.smallImgDown').addClass('disabled');



             $("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);

         });

         // ��� ie6 select�� ����

         $.fn.decorateIframe = function(options) {

             if ($.browser.msie && $.browser.version < 7) {

                 var opts = $.extend({}, $.fn.decorateIframe.defaults, options);

                 $(this).each(function() {

                     var $myThis = $(this);

                     //����һ��IFRAME

                     var divIframe = $("<iframe />");

                     divIframe.attr("id", opts.iframeId);

                     divIframe.css("position", "absolute");

                     divIframe.css("display", "none");

                     divIframe.css("display", "block");

                     divIframe.css("z-index", opts.iframeZIndex);

                     divIframe.css("border");

                     divIframe.css("top", "0");

                     divIframe.css("left", "0");

                     if (opts.width == 0) {

                         divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");

                     }

                     if (opts.height == 0) {

                         divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");

                     }

                     divIframe.css("filter", "mask(color=#fff)");

                     $myThis.append(divIframe);

                 });

             }

         }

         $.fn.decorateIframe.defaults = {

             iframeId: "decorateIframe1",

             iframeZIndex: -1,

             width: 0,

             height: 0

         }

         //�Ŵ��Ӵ�

         $("#bigView").decorateIframe();

         //�������ͼ

         var midChangeHandler = null;



         $("#imageMenu li img").bind("click", function(){

             if ($(this).attr("id") != "onlickImg") {

                 midChange($(this).attr("src").replace("small", "mid"));

                 $("#imageMenu li").removeAttr("id");

                 $(this).parent().attr("id", "onlickImg");

             }

         }).bind("mouseover", function(){

             if ($(this).attr("id") != "onlickImg") {

                 window.clearTimeout(midChangeHandler);

                 midChange($(this).attr("src").replace("small", "mid"));

                 $(this).css({ "border": "3px solid #959595" });

             }

         }).bind("mouseout", function(){

             if($(this).attr("id") != "onlickImg"){

                 $(this).removeAttr("style");

                 midChangeHandler = window.setTimeout(function(){

                     midChange($("#onlickImg img").attr("src").replace("small", "mid"));

                 }, 1000);

             }

         });

         function midChange(src) {

             $("#midimg").attr("src", src).load(function() {

                 changeViewImg();

             });

         }

         //���Ӵ���ͼ

         function mouseover(e) {

             if ($("#winSelector").css("display") == "none") {

                 $("#winSelector,#bigView").show();

             }

             $("#winSelector").css(fixedPosition(e));

             e.stopPropagation();

         }

         function mouseOut(e) {

             if ($("#winSelector").css("display") != "none") {

                 $("#winSelector,#bigView").hide();

             }

             e.stopPropagation();

         }

         $("#midimg").mouseover(mouseover); //��ͼ�¼�

         $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //ѡ�����¼�



         var $divWidth = $("#winSelector").width(); //ѡ�������      235px

         var $divHeight = $("#winSelector").height(); //ѡ�����߶�            210px

         var $imgWidth = $("#midimg").width(); //��ͼ���        400

         var $imgHeight = $("#midimg").height(); //��ͼ�߶�      400

         var $viewImgWidth = $viewImgHeight = $height = null; //IE���غ���ܵõ� ��ͼ��� ��ͼ�߶� ��ͼ�Ӵ��߶�



         function changeViewImg() {

             $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));

         }

         changeViewImg();

         $("#bigView").scrollLeft(0).scrollTop(0);

         function fixedPosition(e) {

             if (e == null) {

                 return;

             }

             var $imgLeft = $("#midimg").offset().left; //��ͼ��߾�

             var $imgTop = $("#midimg").offset().top; //��ͼ�ϱ߾�

             X = e.pageX - $imgLeft - $divWidth / 2; //selector�������� X

             Y = e.pageY - $imgTop - $divHeight / 2; //selector�������� Y

             X = X < 0 ? 0 : X;

             Y = Y < 0 ? 0 : Y;

             X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

             Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



             if ($viewImgWidth == null) {

                 $viewImgWidth = $("#bigView img").outerWidth();

                 $viewImgHeight = $("#bigView img").height();

                 if ($viewImgWidth < 200 || $viewImgHeight < 200) {

                     $viewImgWidth = $viewImgHeight = 800;

                 }

                 $height = $divHeight * $viewImgHeight / $imgHeight;

                 $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

                 $("#bigView").height($height);

             }

             var scrollX = X * $viewImgWidth / $imgWidth;

             var scrollY = Y * $viewImgHeight / $imgHeight;

             $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });

             $("#bigView").css({ "top": 75, "left": $(".preview").offset().left + $(".preview").width() + 15 });

             return { left: X, top: Y };

         }

     });
 //
     //��̨��ȡ��Ʒ��Ϣ���ڹ��ﳵ��ʾ

     $(function () {
         //�����ť��ʱ��洢�й���Ʒ����Ϣ,��ת���ﳵʱ��ȡcookie����ʾ��ҳ���С�
         /**
          * ��Ʒ���������ۡ�������С��
          *
          *
          */
           $('#product_addtocart_form #cart123').click(function () {
             // ��Ʒ����
              var a=$('.pro_detail dd:first .detail_col').text();
              console.log(a);
               //��Ʒ����
               var d=$('#qty').val();
               console.log(d);
             //����
             var b=$('.detail_price').text();
             console.log(b);
             //С��=����*����
               var c=b*d;
               console.log(c);
               //���ͼƬ�ĵ�·����
               var e=$('#vertical img').attr("src");
               console.log(e);
               // var sendData={"gName":d,"gImg":e,"gPrice":b,"gCount":a,"gPriceTotal":c};
               // console.log(sendData);
             //  �����ݷ��͵����ݿ��С�
             //  $.cookie( "gName" , $("#mobile").val()  , { path: '/', expires: 7 });
             //��������������󣬴������ݡ�

              $.ajax({
              type:"post",
              url:"../php/shoppingCar.php",
              async:true,
              data:{"gName":a,"gImg":e,"gPrice":b,"gCount":d,"gPriceTotal":c},
              error:function(XMLHttpRequest, textStatus, errorThrown){
                alert(errorThrown);
              },
              success:function(data){
              var data=eval('('+data+')');
              console.log(data);
              location.href="shoppingCar.html";
              }
               });
          })
     })


 });
