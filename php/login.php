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
//			$sqlstr = "select * from vipinfo where tel='".$tel."' and vipPass='".$userPass."'" ;
//			$result = mysql_query($sqlstr,$conn);
            //ִ�в�ѯsql�����з���ֵ�����ص��ǲ�ѯ�����
//          $query_num =mysql_num_rows($result);

            $sqlstr = "select * from vipinfo where tel='".$tel."'";
            $result = mysql_query($sqlstr,$conn);
            $query_num =mysql_num_rows($result);
            $sqlstr = "select * from vipinfo where vipPass='".$userPass."'";
            $result = mysql_query($sqlstr,$conn);
            $query_pass =mysql_num_rows($result);
			//4�����ر����ӣ����ţ�
                if($query_num!=0 && $query_pass!=0 && $query_num==$query_pass){
                    echo "1";
                // ͨ����֤��������֤��
                }else{
                    echo "0";
                }
                mysql_close($conn);
		?>
