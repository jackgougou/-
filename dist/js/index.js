// 遵从AMD规范
define(["jquery"],function($){
    //头部广告
    function download(){
        $.ajax({
            type:"get",
            url:"../json/data.json",
            success:function(arr){
                var node = $(`<a href=""><div  style="background:url(${arr[0].img}) no-repeat;background-size:100% 100%;"></div></a>`)
                node.appendTo($(".he"));
            },
            error:function(msg){
                alert('index.js error from download')
            }
        })
    }
    //logo行的 搜索框
    function logoInput(){
        $.ajax({
            type:"get",
            url:"../json/logo.json",
            success:function(arr){
                var inputs = arr.inputs;
                // console.log(inputs)
                for(var i = 0;i<inputs.length;i++){
                    var node = $(`<a href="${inputs[i].link}" >${inputs[i].title}</a>`)
                    node.appendTo($(".lo23"));
                }
            },
            error:function(msg){
                console.log("logoInput出错")
            }

        })
    }

    function logoInput2(){
        //input焦点失去与获取
        $(".logo .lo .lo2  input").focus(function(){
            $(".lo2 .lo23").css("display","block");
        });
        $(".logo .lo .lo2 input").blur(function(){
            $(".lo2 .lo23").css("display","none");
        })
        //input下拉菜单划过
        $(".lo23").on("mouseenter","a",function(){
            
            $(this).css("background","rgb(138, 138, 138)");
            
        }).on("mouseleave","a",function(){
            $(this).css("background","white");
        })
        //点击删除,
        
        $(".lo3").on("click",".lo323",function(){
            $(".lo323").parent($(".lo3")).remove();
            $(".lo31").css({"width":"200px","margin-left":"40px"})
        })
    }
    
    function navStr(){
        $.ajax({
            type:"get",
            url:"../json/logo.json",
            success:function(arr){
                var nav = arr.nav;
                // console.log(nav);
                for(var i = 0;i<nav.length;i++){
                    //手机版·
                    if( nav[i].title == "手机版"){
                        
                        var info1 = nav[i].info;
                        for(var j =0 ;j<info1.length;j++){
                            var node = $(`<div class="na241">
                            <img src="${info1[j].img}" alt="">
                            <span>${info1[j].model}</span>
                            </div>`);
                            node.appendTo(".na24")
                    }
                    }
                    //帮助中心
                    if( nav[i].title == "帮助中心"){
                        
                        var info1 = nav[i].info;
                        for(var j =0 ;j<info1.length;j++){
                            var node = $(`<a href="${info1[j].link}">${info1[j].model}</a>`);
                            node.appendTo(".na23")
                    }
                    }
                    // 合作渠道
                    if( nav[i].title == "合作渠道"){
                        
                        var info1 = nav[i].info;
                        for(var j =0 ;j<info1.length;j++){
                            var node = $(`<a href="${info1[j].link}">${info1[j].model}</a>`);
                            node.appendTo(".na22")
                    }
                    }
                }
            },
            error:function(){
                console.log("navStr nav获取数据失败")
            }
        })
    }

    //nav
    function nav(){
        // app下载
        $(".na2").on("mouseenter",".na24,.na21 .li4",function(){
            $(".na2 .na24").css("display","block");
            $(".na2 .na21 .li4 ").css("background","white");
            $(".na2 .na21 .li4 .a4").css("color","#2884c7")
        }).on("mouseleave",".na24,.na21 .li4",function(){
            $(".na2 .na24").css("display","none");
            $(".na2 .na21 .li4 ").css("background","#333");
            $(".na2 .na21 .li4 .a4").css("color","white")
        })
        //帮助中心
        $(".na2").on("mouseenter",".na23,.na21 .li3",function(){
            $(".na2 .na23").css("display","block");
            $(".na2 .na21 .li3 ").css("background","white");
            $(".na2 .na21 .li3 .a3").css("color","#2884c7");
            $('.na23 a').hover(function() {
                // 鼠标移入时添加hover类
            $(this).css("color","#2884c7")
            }, function() {
                // 鼠标移出时移出hover类
                $(this).css("color","black")
            });
        }).on("mouseleave",".na23,.na21 .li3",function(){
            $(".na2 .na23").css("display","none");
            $(".na2 .na21 .li3 ").css("background","#333");
            $(".na2 .na21 .li3 .a3").css("color","white")
        })
        /* $('.na23 a').hover(function() {
            // 鼠标移入时添加hover类
            $(this).css("color","#2884c7")
        }, function() {
            // 鼠标移出时移出hover类
            $(this).css("color","black")
        }); */
        
        // 合作渠道
        $(".na2").on("mouseenter",".na22,.na21 .li2",function(){
            $(".na2 .na22").css("display","block");
            $(".na2 .na21 .li2 ").css("background","white");
            $(".na2 .na21 .li2 .a2").css("color","#2884c7");
            $('.na22 a').hover(function() {
                // 鼠标移入时添加hover类
            $(this).css("color","#2884c7")
            }, function() {
                // 鼠标移出时移出hover类
                $(this).css("color","black")
            });
        }).on("mouseleave",".na22,.na21 .li2",function(){
            $(".na2 .na22").css("display","none");
            $(".na2 .na21 .li2 ").css("background","#333");
            $(".na2 .na21 .li2 .a2").css("color","white")
        })
    }
// 轮播图引入数据
    function bannerStr(){
        $.ajax({
            type:"get",
            url:"../json/logo.json",
            success:function(arr){
                var banner = arr.banner;
                // console.log(banner);
                for(var i = 0;i<banner.length;i++){
                    $(`<a href="${banner[i].link}"><img src="${banner[i].img}" alt=""></a>`).appendTo($(".ba11"))
                }
                for(var i = 0;i<1;i++){
                    $(`<a href="${banner[i].link}"><img src="${banner[i].img}" alt=""></a>`).appendTo($(".ba11"))
                }
            },
            error:function(){
                console.log("bannerStc出现错误")
            }
        })
    }
    //轮播图特效
    function banner(){        
        var iNow = 0;
        var timer = setInterval(function(){
            $(".ba2").on("click","span",function(){
                // console.log(this.id)
                // alert(this.id)
                iNow = this.id -1; 
                // console.log(iNow)
                // clearInterval(timer);
                $(".ba11").css("left",(-1192) * (iNow) +"px");
                $(".ba2 span").css("background","gray")
                $(".ba2 span").eq(iNow).css("background","red");
                switch(iNow){
                    case 0:
                        $(".ba0").css("background","#1682c0")
                        ba0()
                        break;
                    case 1:
                        $(".ba0").css("background","#c9c5c2")
                        ba0()
                        break;
                    case 2:
                        $(".ba0").css("background","#f3233d")
                        ba0()
                        break;
                    case 3:
                        $(".ba0").css("background","#feeedf")
                        ba0()
                        break;}
                
            })
            $(".ba3").on("click","span",function(){
                if(this.id == 1){
                    iNow--;
                    if(iNow<0){
                        iNow = 3;
                    }
                }
                if(this.id ==2 ){
                    iNow ++;
                    if(iNow>3){
                        iNow = 0;
                    }
                }
                $(".ba11").css("left",(-1192) * (iNow) +"px");
                $(".ba2 span").css("background","gray")
                $(".ba2 span").eq(iNow).css("background","red");
                switch(iNow){
                    case 0:
                        $(".ba0").css("background","#1682c0")
                        ba0()
                        break;
                    case 1:
                        $(".ba0").css("background","#c9c5c2")
                        ba0()
                        break;
                    case 2:
                        $(".ba0").css("background","#f3233d")
                        ba0()
                        break;
                    case 3:
                        $(".ba0").css("background","#feeedf")
                        ba0()
                        break;}
                
            })
            clearInterval(timer);
            setInterval(function(){
                tab();
                xb();
                ba0();
                iNow++;
                switch(iNow){
                    case 0:
                        $(".ba0").css("background","#1682c0")
                        ba0()
                        break;
                    case 1:
                        $(".ba0").css("background","#c9c5c2")
                        ba0()
                        break;
                    case 2:
                        $(".ba0").css("background","#f3233d")
                        ba0()
                        break;
                    case 3:
                        $(".ba0").css("background","#feeedf")
                        ba0()
                        break;}
            },2000);
            // alert(iNow)
        },2000);
        function tab(){
            var aAs = $(".ba11");
            // var left1 = $(".ba11").css("left");
            // var left2 = left1.substring(0,left1.length-2);
            // console.log(iNow)
            aAs.css("left",(-1192) * (iNow) +"px").animate({
                // left:left2 - 1192 + "px"
                left: (-1192) * (iNow + 1) +"px"
                
            },800,function(){
                if(iNow == 4){
                    iNow = 0
                    aAs.css("left","0")
                    $(".ba2 span").eq(0).css("background","red");
                }
            })
            
        }
        function xb(){
            $(".ba2 span").css("background","gray")
            // alert(iNow)
            $(".ba2 span").eq(iNow +1).css("background","red");
            
        }
       /*  for(var i = 0; i<$(".ba2 span").size();i++){
            $()
        } */
        function ba0(){
            $(".ba0").css("width",0).animate({
                "width":"100%"
            },800,function(){})
        }
        
    }
    //  侧边导航 主菜单main-menu数据
    function mainMenu(){
        $.ajax({
            type:"get",
            url:"../json/logo.json",
            success:function(arr){
                var menu = arr.mainMenu;
                // console.log(menu);
                for(var i = 0;i<menu.length;i++){
                    if (menu[i].title  == "爆款推荐"){
                        // console.log(menu[i].info);
                        
                        
                        for(var j = 0;j<menu[i].info.length - 1; j++){
                            if(j % 4 == 0){
                                var ulUl = $(`<ul >
                            
                                </ul>`);
                                ulUl.appendTo($(".ma2"))
                            }  
                            $(`<li><a href="${menu[i].info[j].link}">
                            <img src="${menu[i].info[j].img}" alt="">
                            <span>${menu[i].info[j].name}</span>
                            <span>${menu[i].info[j].money}</span>
                        </a></li>`).appendTo(ulUl);
                        }

                    }
                    if(menu[i].title == "适用场景"){
                        for(var j = 0;j<menu[i].info.length - 1; j++){
                            var liss = menu[i].info[j];
                            var ull = $(`<ul>
                            
                            </ul>`);
                            $(`<li class = "l1"><i>${liss.title}</i><i>${liss.ps}</i>
                            </li>`).appendTo(ull);
                            ull.appendTo(".ma3");

                            for(var m =0;m<liss.lis.length;m++){
                                var aa = $(`<li>
                                <a href="${liss.lis[m].link}">
                                    <img src="${liss.lis[m].img}" alt="">
                                    <span>${liss.lis[m].name}</span>
                                </a>
                            
                            </li>`);     
                            aa.appendTo(ull)                       
                            }
                        }
                        $(`<img src="${menu[i].info[4].img}" alt="" class = "iiii">`).appendTo(".ma3");

                        
                    }
                }
            },
            error:function(msg){
                alert("侧边导航栏数据错误")
            }  
        })
    }
    function mainMenuF(){
        //li 变色
        $(".mainMenu").on("mouseenter",".ma1 li a",function(){
            $(this).css("background","#1682c0");

            // $(".ma2").css("display","block")
            
        }).on("mouseleave",".ma1 li a",function(){
            $(this).css("background","#333");
            // $(".ma2").css("display","none")
        });
        //问题： 如何写选择器来选择单数显示ma2，双数显式ma3
        // 内部数据移入变色
        //移入子菜单显示/消失

        $(".mainMenu").on("mouseenter",".ma1 li:odd a,.ma3",function(){


            $(".ma3").css("display","block")
            
        }).on("mouseleave",".ma1 li:odd a,.ma3",function(){
            $(".ma3").css("display","none")
        })
        $(".mainMenu").on("mouseenter",".ma1 li:even a,.ma2",function(){


            $(".ma2").css("display","block")
            
        }).on("mouseleave",".ma1 li:even a,.ma2",function(){
            $(".ma2").css("display","none")
        })
        //子菜单移入变色
        $(".ma2").on("mouseenter","ul li a span",function(){
            $(this).css("color","#1682c0")
        }).on("mouseleave","ul li a span",function(){
            $(this).css("color","black")
        })
        $(".ma3").on("mouseenter","ul li i,ul li a span",function(){
            $(this).css("color","#1682c0")
        }).on("mouseleave","ul li i,ul li a span",function(){
            $(this).css("color","black")
        })
        
         // 右边注册登录界面
         $(".us2").on("mouseenter",".us211,.us212,.us22 a,.us23 a,.us24 a",function(){
            $(this).css("color","#1682c0")
         }).on("mouseleave",".us211,.us212,.us22 a,.us23 a,.us24 a",function(){
            $(this).css("color","black")
        })
    }
    // 超级电视模块。section
    function sectionStr(){
        $.ajax({
            type:"get",
            url:"../json/index.json",
            success:function(arr){
                var arr  = arr.shop;               
                $(`<a href=""><img src="${arr[0].img}" alt=""> </a>  `).appendTo(".se21")
                for(var i = 1;i<arr.length;i++){
                    var model = $(`<div class="se22">
                    <div class="se221">
                        <span style="background:${arr[i].color1};">${arr[i].title1}</span>
                        <span style="background:${arr[i].color2};">${arr[i].title2}</span>
                    </div>
                    <div>
                        <a href="${arr[i].imglink}"><img src="${arr[i].img}" alt=""></a> 
                    </div>
                    <div>${arr[i].message1}</div>
                    <div>${arr[i].message2}</div>
                    <div class= "se01">
                        <span>${arr[i].money1}</span>
                        <span>${arr[i].money2}</span>

                    </div>
                    <div class="se222">
                        <a href="">了解产品</a>
                        <a href="">立即购买</a>
                    </div>
                </div>`)
                    model.appendTo(".se2")
                }
            
            }
            
        })


        $(".se2").on("mouseenter",".se22",function(){
            // alert($(this))
            
            $(this).find($(".se01")).hide()
            console.log("1")
            $(this).find($(".se222")).css("z-index","1");
            $(this).find($(".se222")).stop(true).animate({"bottom":"0"},1000);
            
        }).on("mouseleave",".se22",function(){
            // $(this).find($(".se01")).show()
            console.log("2")
            $(this).find($(".se222")).stop(true).animate({"bottom":"-32px"},1000)
            $(this).find($(".se222")).css("z-index","-1");
            $(this).find($(".se01")).show()
        })
        
    }
    function section2Str(){
        $.ajax({
            type:"get",
            url:"../json/index.json",
            success:function(arr){
                var arr  = arr.pei;               
                $(`<a href=""><img src="${arr[0].img}" alt=""> </a>  `).appendTo(".se31");
                for(i =1;i<arr.length;i++){
                    var node1 =$(`<div class="se32"><div>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                    </a>
                </div>
                <div>
                    ${arr[i].message1}
                </div>
                <div>${arr[i].message2}</div>
                <div class = "se3333">
                    <span>${arr[i].money1}</span>

                </div>
                <div class="se333">
                    <a href="">立即购买</a>
                </div></div>`)
                    node1.appendTo(".se3")
                }
                
            
            }
            
        })
        $(".se3").on("mouseenter",".se32",function(){
            // alert($(this))
            
            $(this).find($(".se3333")).hide()
            // console.log("1")
            $(this).find($(".se333")).css("z-index","1");
            $(this).find($(".se333")).stop(true).animate({"bottom":"32"},1000);
            
        }).on("mouseleave",".se32",function(){
            // $(this).find($(".se01")).show()
            // console.log("2")
            $(this).find($(".se333")).stop(true).animate({"bottom":"0px"},1000)
            $(this).find($(".se333")).css("z-index","-1");
            $(this).find($(".se3333")).show()
        })


    }
    function section3Str(){
        $.ajax({
            type:"get",
            url:"../json/index.json",
            success:function(arr){
                var arr  = arr.sheng;               
                $(`<a href=""><img src="${arr[0].img1}" alt=""> </a>  
                <a href=""><img src="${arr[0].img2}" alt=""> </a> `).appendTo(".se41");
                for(i =1;i<arr.length;i++){
                    var node1 =$(`<div class="se42">
                    <div>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                    </a>
                </div>
                <div>
                    ${arr[i].message1}
                </div>
                <div>${arr[i].message2}</div>
                <div class = "se4444">
                    <span>${arr[i].money1}</span>
                </div>
                <div class="se444">
                    <a href="">立即购买</a>
                </div></div>`)
                    node1.appendTo(".se4")
                }
                
            
            }
            
        })
        $(".se4").on("mouseenter",".se42",function(){
            // alert($(this))
            
            $(this).find($(".se4444")).hide()
            // console.log("1")
            $(this).find($(".se444")).css("z-index","1");
            $(this).find($(".se444")).stop(true).animate({"bottom":"32"},1000);
            
        }).on("mouseleave",".se42",function(){
            // $(this).find($(".se01")).show()
            // console.log("2")
            $(this).find($(".se444")).stop(true).animate({"bottom":"0px"},1000)
            $(this).find($(".se444")).css("z-index","-1");
            $(this).find($(".se4444")).show()
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
        download:download,
        logoInput:logoInput,
        logoInput2:logoInput2,
        nav:nav,
        navStr:navStr,
        bannerStr:bannerStr,
        banner:banner,
        mainMenu:mainMenu,
        mainMenuF:mainMenuF,
        sectionStr:sectionStr,
        section2Str:section2Str,
        section3Str:section3Str
    }
})