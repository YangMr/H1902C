# 省市县三级联动

    请求省 --- 
$.ajax({
    url : "http://localhost:3000/sheng",
    success : function(response){
        请求市
        $.ajax({
            url : "http://localhost:3000/shi",
            success : function(response){
                请求区县
                $.ajax({
                    url : "http://localhost:3000/xian",
                    success : function(){
                    
                    }
                })
            }
        })
    },
    error : function(error){
    
    }
})

$.ajax({

})


## 作业

    1. 用ajax请求这个数据接口：
            https://resources.ninghao.net/wxapp-case/db.json
       要求：
            必须的等数据请求到之后，才能再次请求，原理就是省市县的原理     
            
    2.通过promise发送请求
    
    3.通过promise结合async与await来进行进行        

要阅读的帖子： https://www.cnblogs.com/SamWeb/p/8417940.html