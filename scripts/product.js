// 遵从AMD规范
define(["jquery","jquery-cookie"],function($){
    function product(){
        $(".pr1").on("mouseenter",".pr121,.pr122,.pr123,.pr124,.pr125",function(){
            $(".pr111,.pr112,.pr113,.pr114,.pr115").css("display","none")
            $(this).css("border","1px solid red")
            $(this).prev().css("display","block")
        }).on("mouseleave",".pr121,.pr122,.pr123,.pr124,.pr125",function(){
            
            $(this).css("border","1px solid white")
            $(this).prev().css("display","none")
            
        })
        // 放大镜
        $(".pr11").on("mouseenter",function(){
            $(".cover").css("display","block");
            $(".prrr").css("display","block");
        }).on("mousemove",function(ev){
                    
                    var l = ev.pageX - $(this).offset().left -25;
                    if(l <= 0){
                        l = 0;
                    }
                    if(l >= 398){
                        l = 398;
                    }
                    var t = ev.pageY - $(this).offset().top -25;
                    if(t <= 0){
                        t = 0;
                    }
                    if(t >= 398){
                        t = 398;
                    }
                    $(".cover").css({
                        left: l,
                        top: t
                    })
                    //让big下面的图片，反方向，对应倍数移动
                    $(".prrr img").css({
                        left: -4 * l,
                        top: -4 * t
                    })
            
        }).on("mouseleave",function(){
            $(".cover").css("display","none");
            $(".prrr").css("display","none");
        })
        $(".pr26").on("click",".pr262 a",function(){
            var arr = [{id:0,num:1}];
            $.cookie("goods",JSON.stringify(arr),{
                expires:7
            })
        })
        $(window).scroll(function() {
            if($(window).scrollTop() >= 800){
                $(".ssss").css({"position":"fixed","top":"0","background":"white"})
                
            }else{
                $(".ssss").css({"position":"relative","top":"0","background":"white"})
            }
        })
        
    }
    return{
        product:product
    }
})  