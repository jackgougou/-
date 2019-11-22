// 遵从AMD规范
define(["jquery"],function($){
    function allShop(){
        $(".aS").on("mouseenter",".aS1,.mainMenu",function(){
            $(".mainMenu").show()
        }).on("mouseleave",".aS1,.mainMenu",function(){
            $(".mainMenu").hide()
        })
    }
    function allGoods(){
        $.ajax({
            type:"get",
            url:"../json/goods.json",
            success:function(arr){
                var aS = arr.aS;
                str();
                str();
                str();
                str();
                str();
                str();
                function str(){
                for(var i = 0;i< aS.length;i++){
                    var node1 = $(` <div class="aG1">
                    <div class = "aG11">
                        <img src="${aS[i].img}" alt="">
                    </div>
                    <div class = "aG2" id ="1">
                    
                    </div>
                    <div class="aG3">
                    ${aS[i].name}
                    </div>
                    <div class="aG4">${aS[i].money}</div>
                    <div class="aG5">
                        <div class= "star">
                            <span class ="iconfont" style= "color:${aS[i].star1}">&#xe670;</span>
                            <span class ="iconfont" style= "color:${aS[i].star2}">&#xe670;</span>
                            <span class ="iconfont" style= "color:${aS[i].star3}">&#xe670;</span>
                            <span class ="iconfont" style= "color:${aS[i].star4}">&#xe670;</span>
                            <span class ="iconfont" style= "color:${aS[i].star5}">&#xe670;</span>
                        </div>
                        <span class="evaluate"><i>${aS[i].num}</i>条评价</span>
                    </div>
                    <a class="aG6" href="product.html">
                        立即购买
                    </a>
                    <div class= "aG7">${aS[i].name}</div>
                    </div>`);
                    node1.appendTo(".aG");
                }}
            },
            error:function(msg){
                console.log("goods中的allGoods有问题");
            }
        })
        console.log("商品 allGoods正在运行")
        $(".aG").on("mouseenter",".aG1",function(){
            $(this).css("border","1px solid red");
            $(this).find(".aG6").css({"background":"red",
                "color":"white"})
        }).on("mouseleave",".aG1",function(){
            $(this).css("border","1px solid white");
            $(this).find(".aG6").css({"background":"white",
                "color":"red"})
        });
        $(".aG").on("mouseenter",".aG3",function(){
            $(this).parent(".aG1").find(".aG7").css("display","block");
        }).on("mouseleave",".aG3",function(){
            $(this).parent(".aG1").find(".aG7").css("display","none")
        })
        $("#target").click(function(){
            $(window).scrollTop(0);
            return false;
        })
        $(window).scroll(function() {
            console.log($(window).scrollTop())
            if($(window).scrollTop() >= 500){
                $("#target").css("display","block")
                
            }else{
                $("#target").css("display","none")
            }
        })

    }
    return {
        allShop:allShop,
        allGoods:allGoods
    }
})