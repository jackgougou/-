// 遵从AMD规范
define(["jquery"],function($){
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
        
    }
    return{
        product:product
    }
})