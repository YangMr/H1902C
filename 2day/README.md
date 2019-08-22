# ES6课程

## 1. 什么是promise？

    promise -- 承诺
    
    异步：同时做多件事情
    
    同步：只能做一件事件，当这件事情做完才能做下一件事情
    
    异步：代码比较复杂
    
        $.ajax({
            url : "http://lcoalhost:3000/api/banner",
            data : {},
            success : function(){
                $.ajax({
                    url : "http://localhost:3000/api/slider",
                    success : function(resposne){
                         $.ajax({
                                            url : "http://localhost:3000/api/slider",
                                            success : function(resposne){
                                                 $.ajax({
                                                                    url : "http://localhost:3000/api/slider",
                                                                    success : function(resposne){
                                                                    
                                                                    }
                                                                })
                                            }
                                        })
                    }
                })
            },
            error : function(){
            
            }
        })
    
    同步：代码比较简介，简单
    
    let banner = $.ajax({url : "http://lcoalhost:3000/api/banner"});
    let slider = $.ajax({url : "http://lcoalhost:3000/api/slider"});
    
    //异步
    fs.readFile("a.txt","utf8",function(){
    
    })  
    
    //同步
    let a = fs.readFilesync("a.txt","utf8")  
    
    

## 2. promise的特点与缺点？

## 3. promise常用方法有哪些，及作用是什么？

## 4. 什么是async，await？

    https://segmentfault.com/a/1190000019740247

## 5. 为什么要使用async，await？


## 课堂练习

    1. 案例1
    
    https://www.haorooms.com/uploads/example/jscode_shizhan/lesson2/03.html
    
    2. 案例2
    
    查看filter3.html文件
    
    3. 案例3
    
    查看reduce5.html文件