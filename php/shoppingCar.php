 <?php
			header('content-type:text/html;charset="utf-8"');
			//1、接受客户端的数据（用户输入的数据）
			$tel = $_REQUEST['tel'];
			$sendData=$_REQUEST['data'];
            //接收的数据是否是json字符串。
			/**
			// 数量
                    var a=$('#qty').val();
                    //单价
                    var b=$('.detail_zffs').val();
                    //小计=数量*单价
                    var c=a*b;
                    //商品名称
                    var d=$('.pro_detail:first h1').text();
                    var sendData={"gName":d,"gPrice":b,"gCount":a,"gPriceTotal":c};
			*/
//			$userPass = $_REQUEST['pass'];
			//2、数据保存在数据库中
			//1）、建立连接（搭桥）
			$conn = mysql_connect("localhost","root","123456");

			//2）、选择数据库（找目的地）
			mysql_select_db("shoppingcenter",$conn);

			//3）、传输数据（过桥）
			//将商品信息添加到数据库中。
			$sqlstr = "insert into shoppingcarinfo(gOrder,gName,gImg,gPrice,gCount,gPriceTotal) values('".$sendData[gName]."','".$sendData[gImg]."','".$sendData[gPrice]."','".$sendData[gCount]."','".$sendData[gPriceTotal]."')";

			mysql_query($sqlstr,$conn);
            //返回的是查询的数据表？？？
			//4）、关闭连接（拆桥）
			mysql_close($conn);

			//3、给客户端返回（响应）一个注册成功！
			echo "1";
		?>