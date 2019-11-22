//遵从AMD规范
define(["jquery"],function($){
    // ajax交换数据
    function design(){

        $(".design").on("click",".logon .de1 .de1right a",function(){
            $(".de").css("display","block")
            $(".logon").css("display","none")

            return false;

        })
        /* $.ajax({
            type:"post",
            url:"php/design.php",
            data:""
        }) */
        $(".de5").on("click",function(){
             //勾选用户协议
            if(!$(".de .de4 input:checked").length) {
                $(".design .de2 p").html("请核对信息,并勾选按钮!");

                
                return false;
            }else{
                $.ajax({
                    type:"post",
                    url:"php/design.php",
                    data:{
                        username:$(".de .user input").val(),
                        password:$(".de .password input").val(),
                    
                    },
                    success:function(result){
                    
                        console.log(result);
                        var obj = JSON.parse(result);
                        console.log(obj);
                       
    		    		$(".de .de2 p").html(obj.message);
                        // $("logon .de2 p").css("display","block");
                        
                        
                    },
                    error:function(msg){
                        console.log("注册logo出现错误，错误原因："+ msg)
                    }
                
                })
            }
            return false;
        })

    }
    /* 注册 */
    function logo(){
        var str = null;
        $(".design").on("click",".de .de6 .de61 a",function(){
            $(".de").css("display","none")
            $(".logon").css("display","block");
            str = testCode(4);
            $("#canvas").html(draw(str));
            console.log("初始状态" + str);

            return false;
        })



        var sure1 = false;
        var sure2 = false;
        var a1=false;
        var a2=false;
        var a3=false;
        var a4 = false;
        //验证码
        $("#canvas").click(function(){
            str = testCode(4);
            $("#canvas").html(draw(str));
            console.log("点击之后" + str)

        })
        $(".yanzheng").on("keyup","input",function(){
        var ovlue=$(".yanzheng input").val();
        var ovlue2 = str;
        console.log("失去焦点" + ovlue + "--" + ovlue2)

        if(ovlue.toLowerCase() == ovlue2.toLowerCase()){
            $(".logon .de2 p").html("√ 验证码正确");
            $(".logon .de2 p").css("color","green");
            a4 = true;
            sure1 = true;

        }else{
            $(".logon .de2 p").html("！验证码输入错误");
            $(".logon .de2 p").css("color","red");

        }

        })

    
        var a1=false;
        var a2=false;
        var a3=false;


        $(".de5").on("click",function(){
            
            
            //勾选用户协议
            if(!$(".logon .de4 input:checked").length) {
                $(".logon .de2 p").html("请核对信息,并勾选按钮!");
                
                
                return false;
            }else if(!(a1&&a2&&a3&&a4)){
                alert("请正确填写手机邮箱以及验证码相关信息")
                return false;
            }else{
                $.ajax({
                    type:"post",
                    url:"php/logo.php",
                    data:{
                        username:$(".logon .user input").val(),
                        password:$(".logon .password input").val(),
                        phone:$(".logon .phone input").val()
        
                    },
                    success:function(result){
                        console.log(result);
                        var obj = JSON.parse(result);
                        console.log(obj);
                        if(obj.code){
                            $(".de2").className = 'alert alert-danger';
                            
                        }else{
                            $(".de2").className = 'alert alert-success';
                            setTimeout(function(){
                                $(".de").css("display","block")
                                $(".logon").css("display","none")
                            }, 500);
                        }
                        $(".logon .de2 p").html(obj.message);
                        // $("logon .de2 p").css("display","block");
        
        
                    },
                    error:function(msg){
                        console.log("注册logo出现错误，错误原因："+ msg)
                    }
                    
                })
            }


 
            return false;
        })
        $(".user input").keyup(function(){
            if(/^\d{11}$/.test(this.value)){
                $(".logon .de2 p").html("手机号通过！");
                $(".logon .de2 p").css("color","green");
                a1 = true;
            }else{
                $(".logon .de2 p").html("！手机号应为11位纯数字");
                $(".logon .de2 p").css("color","red");            
            }
        })
        $(".password input").keyup(function(){
            var oValue= this.value;
            if(oValue.length < 6 || oValue.length > 18){
                $(".logon .de2 p").html("！密码应为6至18位");
                $(".logon .de2 p").css("color","red");            

            }else if(/\W/.test(oValue)){
                $(".logon .de2 p").html("！密码应为数字字母下划线");
                $(".logon .de2 p").css("color","red");            

            }
            else{
                $(".logon .de2 p").html("密码通过！");
                $(".logon .de2 p").css("color","green");
                a2 = true;
            }
        })
        $(".phone input").keyup(function(){

            if(/^\d{4}$/.test(this.value)){
                $(".logon .de2 p").html("验证码通过");
                $(".logon .de2 p").css("color","green");  
                a3 = true;          

            }else{
                $(".logon .de2 p").html("验证码应为4位数字");
                $(".logon .de2 p").css("color","red");
            }
        })


    }
    return {
        design:design,
        logo:logo
    }
})