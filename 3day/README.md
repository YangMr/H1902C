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


要阅读的帖子： https://www.cnblogs.com/SamWeb/p/8417940.html