//遵从AMD规范
define(["jquery","jquery-cookie"],function($){
    //购物车
    function shopCar(){
        // alert(1)
        // $.cookie('lemall', 'id', { expires: 7 });//成功创建cookie
        $.ajax({
            type:"get",
            url:"../json/goods.json",
            success:function(arr){
                var as = arr.aS;
                for(i = 0;i<5;i++){
                    var node1 = $(`<div class="yL21">
                    <img src="${as[i].img}" alt="">
                    <div class="name">${as[i].name}</div>
                    <div class="price">￥${as[i].money}</div>
                    <a href="" class="yL211" id= "${as[i].id}">立即购买</a>
                </div>
                `);
                node1.appendTo($(".yL2"))
                }
            },
            error:function(msg){
                alert("猜你喜欢数据错误" + msg);
            }
        })
        //猜你喜欢移特效入移出
        $(".youLike1").on("mouseenter",".yL21",function(){
            $(this).css("border","1px solid red");
            $(this).find("a").css("display","block")
        }).on("mouseleave",".yL21",function(){
            $(this).css("border","1px solid white");
            $(this).find("a").css("display","none")
        })
        // $.cookie('name', 'value', { expires: 7 }); //测试cookie创建
        // 读取当前cookie 并在相应节点创建相应块
        sc_msg()
        function sc_msg(){
            $.ajax({
                type:"get",
                url:"../json/goods.json",
                success: function(arr){
                    var price = 0;
                    var as = arr.aS;
                    var cookieStr = $.cookie("goods");
                    if(cookieStr){
                        var cookieArr =JSON.parse(cookieStr);
                        var newArr = [];
                        for(var i = 0;i<as.length;i++){
                            for(var j =0;j<cookieArr.length;j++){
                                if(as[i].id == cookieArr[j].id){
                                    as[i].num = cookieArr[j].num;
                                    newArr.push(as[i]);
                                   
                                }
                            }
                        }
                        
                        // console.log(newArr);
                        // console.log(newArr[1])
						//每次加载数据的时候，都将上一次的数据清空
						// $(".sc_right ul").html("");
                        for(var i = 0 ;i<newArr.length;i++){
                            price += newArr[i].num * as[newArr[i].id].money;
                            var node = $(`
                            <div class="sC311" id = "${as[newArr[i].id].id}">
                            <div class="shang">
                                <a href="">乐融自营</a>
                            </div>
                            <div class="xia">
                                <input type="checkbox">
                                <img src="${as[newArr[i].id].img}" alt="">
                                <p>${as[newArr[i].id].name}</p>
                                <div class = "xia4">￥${as[newArr[i].id].money}</div>
                                <div class="xia5">
                                    <div class="top">
                                        <div class="top1">-</div>
                                        <div class="top2">${newArr[i].num}</div>
                                        <div class="top3">+</div>
                                    </div>
                                    <div class="bottom">
                                        有货
                                    </div>
                                </div>
                                <div class="xia6">
                                ${newArr[i].num * as[newArr[i].id].money}
                                </div>
                                <div class="xia7">
                                    删除
                                </div>
                            </div>
                            </div>
        
                            
                            `);
                            node.appendTo($(".sC31"));
                        }
                        $(".sC4 .sC42 .money").html("￥" + price)
                    }else{
                        $(".sC4 .sC42 .money").html(0)

                    }
                },
                error:function(msg){
                    console.log("购物车数据添加有问题"+ msg)
                }
            })
        }
        function sco_msg(){
            
            var height = $(window).scrollTop();
            $(".sC3 .sC31").empty(); 
            //清空ul所有子节点
            sc_msg();
          
            $(window).scrollTop(height);
        }
        // 统计数量
        sc_num();
        function sc_num(){
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var sum = 0;
                for(var i =0;i<cookieArr.length;i++){
                    sum += cookieArr[i].num;
                }
                $(".sC4 .sC42 .num i").html(sum);
            }else{
                $(".sC4 .sC42 .num i").html(0);
                // $(".sC4 .sC42 .money").html("￥0")
            }
        }

        $(".youLike1").on("click",".yL2 .yL21 .yL211",function(){
                return false;
        })
        $(".youLike1").on("click",".yL2 .yL21 .yL211",function(){
            
            
            var id = this.id;
            // alert(id);				//取出当前按钮所在商品的id
            var first = $.cookie("goods") == null ?true:false;
            // 判断cookie存在不
            if(first){     
                // cookie 不存在     新建cookie
                var arr = [{id:id ,num:1}];
                $.cookie("goods",JSON.stringify(arr),{
                    expires:7
                })
                // alert(1)
            }else{
                // cookie 存在

                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                // console.log(cookieArr)
                var same = false;
                // 假设没有存储过
                // 判断cookie 是否存储这个商品id
                for(var i = 0; i<cookieArr.length;i++){
                    if(cookieArr[i].id == id){

                        cookieArr[i].num++;
                        
                        same = true;
                        break;  
                    }
                }
                // 判断cookie 是否存储过 新建这个商品的cookie
                if(!same){  
                    var obj = {id:id,num:1};
                    cookieArr.push(obj);
                }
                
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })

            }
            // 此时cookie已经建立好，并且可以开始加载节点并且将相应的数据加载进去
            
            
            sc_num()
            console.log( $.cookie("goods"))
            sco_msg()
            
            


             // 加载数据向购物车列表内
            return false;
        })
        //加减商品
        $(".shopCar1").on("click",".sC3 .sC31 .sC311 .xia .xia5 .top .top1,.sC3 .sC31 .sC311 .xia .xia5 .top .top3",function(){
            
            var id1 = $(this).closest(".sC311").attr("id")
            // console.log(id1)
            var cookieStr = $.cookie("goods");
            var cookieArr =JSON.parse(cookieStr);
            console.log(cookieArr)
            for(var i = 0; i< cookieArr.length;i++){
                if(cookieArr[i].id == id1){
                    if($(this).html() == "-"){
                        if(cookieArr[i].num <= 1){
                            cookieArr[i].num == 1
                        }else{
                            cookieArr[i].num--;
                        }
                    }
                    if($(this).html() == "+"){
                        
                        cookieArr[i].num++;
                        
                    }
                    
                    
                }
            }   
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })         
            sco_msg()
            return false;
            
        })
        // 删除商品
        $(".shopCar1").on("click",".sC3 .sC31 .sC311 .xia .xia7",function(){
            // 删除节点
            var id = $(this).closest(".sC311").remove().attr("id");
            console.log(id)
            // 删除cookie转换来的数组
            console.log($.cookie("goods"))
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    cookieArr.splice(i, 1);
                    break;
                }
            }
            //用数组替换替换cookie
            if(cookieArr.length){
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
            }else{
                $.cookie("goods", null);
            }
            sco_msg()
            return false;


        })
    }
    return {
        shopCar:shopCar
    }
})