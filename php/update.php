		<meta charset="UTF-8">
		<?php
            // �û�������֤
			header("content-type","text/html;charset=utf-8");
			//1�����ܿͻ��˵����ݣ��û���������ݣ�
			$gCount=$_REQUEST['gCount'];

			//2�����ݱ��������ݿ���
			//1�����������ӣ����ţ�
			$conn = mysql_connect("localhost","root","123456");

			//2����ѡ�����ݿ⣨��Ŀ�ĵأ�
			mysql_select_db("shoppingcenter",$conn);

			//3������ѯ���ݣ����ţ�
//			$sqlstr = "select * from shoppingcarinfo where gName=".$gName;
            "update shoppingcarinfo set gCount=".$gCount. "where gName=".$gName;
			echo $gCount;
				mysql_close($conn);
			//3�����ͻ��˷��أ���Ӧ��һ��ע��ɹ���


		?>
