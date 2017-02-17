/**
 * Created by Administrator on 2017/2/15 0015.
 */
$(function () {
    //给元素加样式
    $('.goods_li').hover(function () {
            $(".divStart").eq($(this).index()).css("borderColor","#423e3e");
        },
        function () {
            $(".divStart").eq($(this).index()).css("borderColor","#ffffff");
        }
    );
/**
*    ajax('get', 'getNews.php', '', function (data) {
        var data = JSON.parse(data);
 将json字符串转换成json对象---结果证明：转换后为一个数组。
        var oUl = document.getElementById('ul1');
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += '<li><a href="">' + data[i].title + '</a>' + '<span>' + data[i].date + '</span></li>'
        }
        oUl.innerHTML = html;
    });
}
*/
    $.ajax({
        type:"post",
        url:"../php/appendLi.php",
        async:true,
        data:sendData,
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert(errorThrown);
        },
        success:function(data){
            var data=JSON.parse(data);
            //转为数组
            var html="";
            for(var i=0;i<data.length;i++){
                html+='<div class="goods_li"><div class="goods_box divStart"><div'+ 'class="pro_img"><span><a href="###"><img src="'+data[0].gImg+'"/></a></span><span class="pro_lab'+'lab12"></span></div><div class="pro_name"><a href="###">'+data[0].gName+'</a></div><div class="pro_li"><label class="red">'+data[0].gEvaluate+'</label></div><div'+ 'class="pro_li"><label class="m_price">'+data[0].gMarkting+'</label><label>'+data[0].gPrice+'</label><del></del></div><div class="pro_li"><label>'+data[0].evlAmout+'</label><label>'+data[0].gKg+'</label><del></del></div></div></li>';
            };
           $('#all_products').html(html);

            }
        }
    );
    setInterval(function () {
        ajax();
    },100)





})