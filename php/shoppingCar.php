 <?php
			header('content-type:text/html;charset="utf-8"');
			//1�����ܿͻ��˵����ݣ��û���������ݣ�
			$gName=$_REQUEST['gName'];
			$gImg=$_REQUEST['gImg'];
			$gPrice=$_REQUEST['gPrice'];
			$gCount=$_REQUEST['gCount'];
			$gPriceTotal=$_REQUEST['gPriceTotal'];
            //���յ������Ƿ���json�ַ�����
//			$userPass = $_REQUEST['pass'];
			//2�����ݱ��������ݿ���
			//1�����������ӣ����ţ�

			$conn = mysql_connect("localhost","root","123456");

			//2����ѡ�����ݿ⣨��Ŀ�ĵأ�

			mysql_select_db("shoppingcenter",$conn);

			//3�����������ݣ����ţ�
			//�жϹ��ﳵ�����Ƿ�����Ʒ��Ϣ����������ݵ����ݱ��У�����������ݸ���
			/*$sqlstr = "select * from shoppingcarinfo where gName='".$gName."'";
                        $result = mysql_query($sqlstr,$conn);
                        $query_num =mysql_num_rows($result);
			if($query_num==0){
                        //û�������Ʒ�йص���Ϣ---��������ӵ����ݱ���
                            $sqlstr = "insert into shoppingcarinfo(gName,gImg,gPrice,gCount,gPriceTotal) values('".$gName."','".$gImg."','".$gPrice."','".$gCount."','".$gPriceTotal."')";
                            }else{
                            // echo "0";
                            //update ������ set ������=��ֵ where ��������
                            //������Ʒ����������ʵʱ�۸�
                               update shoppingcarinfo set gPrice='"'.$gPrice.'"' where gName=$gName;
                               update shoppingcarinfo set gCount='"'.$gCount.'"' where gName=$gName;
                            }*/
            $sqlstr = "insert into shoppingcarinfo(gName,gImg,gPrice,gCount,gPriceTotal) values('".$gName."','".$gImg."','".$gPrice."','".$gCount."','".$gPriceTotal."')";



			mysql_query($sqlstr,$conn);
            //���ص��ǲ�ѯ�����ݱ�����
			//4�����ر����ӣ����ţ�
			mysql_close($conn);

			//3�����ͻ��˷��أ���Ӧ��һ��ע��ɹ���
			echo "1";
		?>