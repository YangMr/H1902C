# redux

## 流程

    React Components 借书的人   --- 我借 
    Action Creators  书籍的信息     ---  三国演艺
    Store   图书管理员   ---    管理者
    Reducers  图书馆管理系统或者图书手册   ----  招书

## redux的使用

安装：

    cnpm install redux --save
    
在src目录下创建名为store的文件夹，这个文件夹的作用是用来管理redux的文件


在src目录下创建index.js，这个index.js文件你可以理解为是图书管理员





 handleInputChange(e){
        console.log(e.target.value)
        const action = {
            type : "change_input_value",
            value : e.target.value
        };
        store.dispatch(action)
    }

    handleStoreChange(){
      this.setState(store.getState())
    }
 