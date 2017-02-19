/**
 * Created by an.han on 13-12-17.
 */






window.onload = function () {
    //鼠标移入显示二级菜单

    $('#popnav').mouseenter(function () {
        $('.nav_details').show();
        $('.sn_nav').show();
    });
    $('#popnav').mouseleave(function () {
        $('.nav_details').hide();
        $('.sn_nav').hide();
    });



    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {

                if (els[i].className.indexOf(cls + ' ') >=0 || els[i].className.indexOf(' ' + cls + ' ') >=0 || els[i].className.indexOf(' ' + cls) >=0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var table = document.getElementById('cartTable'); // 购物车表格
    var selectInputs = document.getElementsByClassName('check'); // 所有勾选框
    var checkAllInputs = document.getElementsByClassName('check-all') // 全选框
    var tr = table.children[1].rows; //行
    var selectedTotal = document.getElementById('selectedTotal'); //已选商品数目容器
    var priceTotal = document.getElementById('priceTotal'); //总计
    var deleteAll = document.getElementById('deleteAll'); // 删除全部按钮
    var selectedViewList = document.getElementById('selectedViewList'); //浮层已选商品列表容器
    var selected = document.getElementById('selected'); //已选商品
    var foot = document.getElementById('foot');

    // 更新总数和总价格，已选浮层
    function getTotal() {
        var selected = 0, price = 0, html = '';
        for (var i = 0; i < tr.length; i++) {
            if (tr[i].getElementsByTagName('input')[0].checked) {
                tr[i].className = 'on';
                selected += parseInt(tr[i].getElementsByTagName('input')[1].value); //计算已选商品数目
                price += parseFloat(tr[i].getElementsByTagName('td')[4].innerHTML); //计算总计价格
                html += '<div><img src="'+tr[i].getElementsByTagName('img')[0].src+'"><span class="del" index="'+i+'">取消选择</span></div>';// 添加图片到弹出层已选商品列表容器
            }else{
                tr[i].className = '';
            }
        }
        selectedTotal.innerHTML = selected; // 已选数目
        priceTotal.innerHTML = price.toFixed(2); // 总价
        selectedViewList.innerHTML = html;
        if (selected==0) {
            foot.className = 'foot';
        }
    }

    // 计算单行价格
    function getSubtotal(tr) {
        var cells = tr.cells;
        var price = cells[2]; //单价
        var subtotal = cells[4]; //小计td
        var countInput = tr.getElementsByTagName('input')[1]; //数目input
        var span = tr.getElementsByTagName('span')[1]; //-号
        //写入HTML
        subtotal.innerHTML = (parseInt(countInput.value) * parseFloat(price.innerHTML)).toFixed(2);
        //如果数目只有一个，把-号去掉
        if (countInput.value == 1) {
            span.innerHTML = '';
        }else{
            span.innerHTML = '-';
        }
    }

    // 点击选择框
    for(var i = 0; i < selectInputs.length; i++ ){
        selectInputs[i].onclick = function () {
            if (this.className.indexOf('check-all') >= 0) { //如果是全选，则吧所有的选择框选中
                for (var j = 0; j < selectInputs.length; j++) {
                    selectInputs[j].checked = this.checked;
                }
            }
            if (!this.checked) { //只要有一个未勾选，则取消全选框的选中状态
                for (var i = 0; i < checkAllInputs.length; i++) {
                    checkAllInputs[i].checked = false;
                }
            }
            getTotal();//选完更新总计
        }
    }

    // 显示已选商品弹层
    selected.onclick = function () {
        if (selectedTotal.innerHTML != 0) {
            foot.className = (foot.className == 'foot' ? 'foot show' : 'foot');
        }
    }

    //已选商品弹层中的取消选择按钮
    selectedViewList.onclick = function (e) {
        var e = e || window.event;
        var el = e.srcElement;
        if (el.className=='del') {
            var input =  tr[el.getAttribute('index')].getElementsByTagName('input')[0]
            input.checked = false;
            input.onclick();
        }
    }

    //为每行元素添加事件
    for (var i = 0; i < tr.length; i++) {
        //将点击事件绑定到tr元素
        tr[i].onclick = function (e) {
            var e = e || window.event;
            var el = e.target || e.srcElement; //通过事件对象的target属性获取触发元素
            var cls = el.className; //触发元素的class
            var countInout = this.getElementsByTagName('input')[1]; // 数目input
            var value = parseInt(countInout.value); //数目
            //通过判断触发元素的class确定用户点击了哪个元素
            switch (cls) {
                case 'add': //点击了加号
                    countInout.value = value + 1;
                    getSubtotal(this);
                    break;
                case 'reduce': //点击了减号
                    if (value > 1) {
                        countInout.value = value - 1;
                        getSubtotal(this);
                    }
                    break;
                case 'delete': //点击了删除
                    var conf = confirm('确定删除此商品吗？');
                    if (conf) {
                        this.parentNode.removeChild(this);
                    }
                    break;
            }
            getTotal();
        }
        // 给数目输入框绑定keyup事件
        tr[i].getElementsByTagName('input')[1].onkeyup = function () {
            var val = parseInt(this.value);
            if (isNaN(val) || val <= 0) {
                val = 1;
            }
            if (this.value != val) {
                this.value = val;
            }
            getSubtotal(this.parentNode.parentNode); //更新小计
            getTotal(); //更新总数
        }
    }

    // 点击全部删除
    deleteAll.onclick = function () {
        if (selectedTotal.innerHTML != 0) {
            var con = confirm('确定删除所选商品吗？'); //弹出确认框
            if (con) {
                for (var i = 0; i < tr.length; i++) {
                    // 如果被选中，就删除相应的行
                    if (tr[i].getElementsByTagName('input')[0].checked) {
                        tr[i].parentNode.removeChild(tr[i]); // 删除相应节点
                        i--; //回退下标位置
                    }
                }
            }
        } else {
            alert('请选择商品！');
        }
        getTotal(); //更新总数
    };

    // 默认全选
    checkAllInputs[0].checked = true;
    checkAllInputs[0].onclick();
};
$(function () {
    //点击按钮的时候存储有关商品的信息,跳转购物车时读取cookie并显示在页面中。
    /**
     * 商品名声、单价、数量、小计
     */
    $('.cart').click(function () {
        // 数量
        var a=$('#qty').val();
        console.log(a);
        //单价
        var b=$('.detail_zffs').val();
        console.log(b);
        //小计=数量*单价
        var c=a*b;
        console.log(c);
        //商品名称
        var d=$('.pro_detail:first h1').text();
        console.log(d);
        var sendData={"gName":d,"gPrice":b,"gCount":a,"gPriceTotal":c};
         // $.cookie( "gName" , $("#mobile").val()  , { path: '/', expires: 7 });
        //向服务器发送请求，储存数据。

        $.ajax({
            type:"post",
            url:"../php/shoppingCar.php",
            async:true,
            data:sendData,
            error:function(XMLHttpRequest, textStatus, errorThrown){
                alert(errorThrown);
            },
            success:function(data){
                var data=eval('('+data+')');
                console.log(data);
                var html="";
                for(var i=0;i<data.length;i++){
                    // console.log(data.gImg);
                    html+='<li class="goods_li"><div class="goods_box divStart"><div'+ 'class="pro_img"><span><a href="###"><img src="'+data[i].gImg+'"/></a></span><span class="pro_lab lab12"></span></div><div class="pro_name"><a href="###">'+data[i].gName+'</a></div><div class="pro_li"><label class="red">'+data[i].gEvaluate+'</label></div><div'+ 'class="pro_li"><label class="m_price">'+data[i].gMarkting+'</label><label class="zp_price">'+data[i].gPrice+'</label><del></del><div class="pro_li"><label class="p_left">'+data[i].evlAmount+'</label><label class="p_right">'+data[i].gKg+'</label><del></del></div></li>';
                };
                $('.all_products').html(html);

            }
        });








    })
})



