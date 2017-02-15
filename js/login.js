$(function () {
    var oPhone=$('#mobile')[0];
    var oPhoneTips=$('#oPhoneTips')[0];
    oPhone.onblur=function () {
        oPhoneRe=/^1[3|4|5|8][0-9]\d{4,8}$/;
        if(oPhoneRe.test(oPhone.value)){
            oPhoneTips.innerHTML="<font color='green'>√"+"</font>";
            return true;
        } else {
            oPhoneTips.innerHTML="<font color='green'>X"+"</font>";
        }
    };
    
    
    //加载验证码
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
            $('#get-code-msg').html("<font color='green'>√"+"</font>");
        }else {
            $('#get-code-msg').html("<font color='red'>X"+"</font>");
        }
    });
//    设置密码
    function pas(){
        var rpass=/^([0-9]|[A-Z]|[a-z]){6,12}$/;
        var pass1=$("#password").val();
        var stu=rpass.test(pass1);
        if(stu){
            $("#testPass1")[0].innerHTML="";
            $("#testPass1")[0].innerHTML="<font color='green'>√</font>";
        }else{
            $("#testPass1")[0].innerHTML="<font color='red'>X</font>";
        }
    }
    //密码验证
    $('#password').blur(function () {
        pas();
    });
    $("#repassword")[0].onblur=function(){
        var pass2=$("#repassword").val();
        var pass1=$("#password").val();
        if(pass2==pass1){
            $("#testPass2")[0].innerHTML="<font color='green'>√</font>";
        }else{
            $("#testPass2")[0].innerHTML="<font color='red'>X</font>";
        }
    }

    //填写用户名登录到首页
    $()




});