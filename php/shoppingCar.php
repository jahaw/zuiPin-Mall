 <?php
			header('content-type:text/html;charset="utf-8"');
			//1�����ܿͻ��˵����ݣ��û���������ݣ�
			$tel = $_REQUEST['tel'];
			$sendData=$_REQUEST['data'];
            //���յ������Ƿ���json�ַ�����
			/**
			// ����
                    var a=$('#qty').val();
                    //����
                    var b=$('.detail_zffs').val();
                    //С��=����*����
                    var c=a*b;
                    //��Ʒ����
                    var d=$('.pro_detail:first h1').text();
                    var sendData={"gName":d,"gPrice":b,"gCount":a,"gPriceTotal":c};
			*/
//			$userPass = $_REQUEST['pass'];
			//2�����ݱ��������ݿ���
			//1�����������ӣ����ţ�
			$conn = mysql_connect("localhost","root","123456");

			//2����ѡ�����ݿ⣨��Ŀ�ĵأ�
			mysql_select_db("shoppingcenter",$conn);

			//3�����������ݣ����ţ�
			//����Ʒ��Ϣ��ӵ����ݿ��С�
			$sqlstr = "insert into shoppingcarinfo(gOrder,gName,gImg,gPrice,gCount,gPriceTotal) values('".$sendData[gName]."','".$sendData[gImg]."','".$sendData[gPrice]."','".$sendData[gCount]."','".$sendData[gPriceTotal]."')";

			mysql_query($sqlstr,$conn);
            //���ص��ǲ�ѯ�����ݱ�����
			//4�����ر����ӣ����ţ�
			mysql_close($conn);

			//3�����ͻ��˷��أ���Ӧ��һ��ע��ɹ���
			echo "1";
		?>