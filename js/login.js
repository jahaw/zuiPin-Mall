$(function () {
    var oPhone=$('#mobile')[0];
    var oPhoneTips=$('#oPhoneTips')[0];
    oPhone.onblur=function () {
        //ͨ�������ж���ȥ���ݿ�����Ƿ���ڸ��û�����û�м���ע�ᡣ
        // oPhoneRe=/^1[3|4|5|8][0-9]\d{4,8}$/;
        oPhoneRe=/^1\d{10}$/ig;
        if(oPhoneRe.test(oPhone.value)){
            console.log("tyui123445s");
            var a = $("#mobile").val();
            $.post("../php/regSave2.php", {"tel": $("#mobile").val()}, function (data) {
                console.log(data);
                if(data.indexOf('0')>-1) {
                    // �û������Խ���ע�ᡣ
                    oPhoneTips.innerHTML = "";
                    oPhoneTips.innerHTML = "<font color='green'>��</font>";

                }else{
                    oPhoneTips.innerHTML = "";
                    oPhoneTips.innerHTML = "<font color='red'>X</font>";
                }
            })

            // oPhoneTips.innerHTML="<font color='green'>��"+"</font>";
        } else {
            oPhoneTips.innerHTML="<font color='red'>X"+"</font>";
        }
    };
    
    
    //������֤��
    var checkArr=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var str='';
    function checkCode() {
        for(var i=0;i<4;i++){
            var index=parseInt(Math.random()*checkArr.length);
            str+=checkArr[index];
        }
    }
    $('#get-code').click(function () {
        $(this).html(str);
         str='';
        checkCode();
        $(this).html(str).css('color','white');

    });
    $('#code').blur(function () {
        var oTxt=$('#code').val();
        if (oTxt.toLowerCase()==str.toLocaleLowerCase() && oTxt!='' ){
            $('#get-code-msg').html('');
             $('#get-code-msg').html("<font color='green'>��"+"</font>");
        }else {
             $('#get-code-msg').html("<font color='red'>X"+"</font>");
        }
    });
//    ��������
    function pas(){
        var rpass=/^([0-9]|[A-Z]|[a-z]){6,12}$/;
        var pass1=$("#password").val();
        var stu=rpass.test(pass1);
        if(stu){
            $("#testPass1").html("");
            $("#testPass1").html("<font color='green'>��"+"</font>");
            $("#repassword").blur(function(){
                var pass2=$("#repassword").val();
                var pass1=$("#password").val();
                if(pass2==pass1){
                    $("#testPass2").html("<font color='green'>��</font>");
                }else{
                    $("#testPass2").html("<font color='red'>X</font>");
                }
            });
        }else{
             $("#testPass1").html("<font color='red'>X"+"</font>");
        }
    }
    //������֤
    $('#password').blur(function () {
        pas();
    });

    //    �ҵ�˼·��
    //    1 �û�������֤��ע��ʱ�û���ͨ��������֤�����������ݿ��в��ظ������ɵ�¼��ҳ��
     $(function(){
            //2 �����ť����cookie,����¼����ҳ��
            $("#submit-btn").click(function(){
                // tel\pass �����̨˵�õĲ�����
                $.post("../php/regsave4.php",{"tel":$("#mobile").val(),"pass":$("#password").val()},function(data){
                    console.log(data);
                    //�鿴�Ƿ���յ����ݡ�
                    //  ����һ������������php�ļ���ַ��
                    //  ԭ�򣺴��ļ��Ķ˿ںų�������Ӧ��localhost�˿ڡ�
                    if(data.indexOf("1")>-1){
                        //1����¼cookie;
                        $.cookie( "tel" , $("#mobile").val()  , { path: '/', expires: 7 });


                        //2����תҳ��,����ת˵����̨����1�����ݻ����ˡ�
                        location.href = "index.html";
                        var tel = $.cookie("tel");
                        if(tel==null){
                            $('#lab1').show();
                            $('#xs').hide();
                        }else{
                            $('#lab1').hide();
                            $('#xs').show();
                            $('#xs').html(tel);
                        }
                    }
                });
            });

        //   login in ��¼


        $(function(){
            $(".submit_form").click(function(){
                var sendData = {"tel":$("#mobile").val(),"pass":$("#password").val()};
                console.log(sendData);
                $.ajax({
                    type:"post",
                    url:"../php/login.php",
                    async:true,
                    data:sendData,
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                        alert(errorThrown);
                    },
                    success:function(data){

                        if(data.indexOf("1")>-1){
                            // alert('keyi')
                            //1����¼cookie;
                            $.cookie( "tel" , $("#mobile").val()  , { path: '/', expires: 7 });

                            //2����תҳ�棻
                            location.href = "index.html";
                        }else{
                            alert("�û������������");
                            //console.log(0)
                        }
                    }
                });

            });
        });
        });

















})