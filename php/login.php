		<?php
            // �û�������֤
			header("content-type","text/html;charset=utf-8");
			//1�����ܿͻ��˵����ݣ��û���������ݣ�
			$tel = $_REQUEST['tel'];
            $userPass = $_REQUEST['pass'];
			//2�����ݱ��������ݿ���
			//1�����������ӣ����ţ�
			$conn = mysql_connect("localhost","root","123456");

			//2����ѡ�����ݿ⣨��Ŀ�ĵأ�
			mysql_select_db("shoppingcenter",$conn);

			//3������ѯ���ݣ����ţ�
			$sqlstr = "select * from vipinfo where
            tel='".$userName."' and pass='".$userPass."'" ;
			$result = mysql_query($sqlstr,$conn);
            //ִ�в�ѯsql�����з���ֵ�����ص��ǲ�ѯ�����
			$query_num =mysql_num_rows($result);
			//4�����ر����ӣ����ţ�
			mysql_close($conn);
				if($query_num==0){
					echo "0";
				}else{
					echo "1";
				}
			//3�����ͻ��˷��أ���Ӧ��һ��ע��ɹ���


		?>
