####       json-server 

​	是 NodeJS 的一个包，作用：用来提供假数据

​      	在没有服务器接口的时候，通过这个工具提供一个假数据，当有了服务器接口

​      再替换为真正的真数据（服务器接口数据）即可

​      		只要提供一个 json 数据（文件）给 json-server ，那么 json-server 就可以提供

​      针对于这个 json数据的 CRUD 、 分页、 搜索 等功能

#####       使用步骤：

​      1 全局安装： npm i -g json-server

​      2 准备一个 json 文件

​      3 在 json 文件所在目录中，运行命令： json-server todos.json --watch

​	特点：

​	1.json-server提供的接口是：REST API(restful)

​	2.提供的接口没有跨域问题

##### 查询的方式：get

​	查询所有：

​		http://localhost:3000/todos

​	查询某一条数据（id为2的数据）

​		http://localhost:3000/todos/2

##### 添加：POST请求

​	接口地址：http://localhost:3000/todos
	在软件中：row--->json
	不需要写id，直接写

注意点：
在json中写数据格式必须给键名加上双引号

	{
		"name":"梳头",
		"done":false
	}

##### 修改数据：PATCH /PUT 请求

​	修改id为2的数据

​	接口地址：http：//localhost：3000/todos/2

特点：使用put请求，需要将所有的数据，都发送给接口
patch 打补丁



##### 删除数据：DELETE请求

删除id为2
	接口地址：http://localhost:3000/todos/2



#### axios的使用

##### 	定义

​		axios 是一个专门用来发送ajax请求的包，是一个http客户端，可以运行在浏览器和node中发送请求

​	注意点：

​		axios与vue没有关系，就是axios是一个独立的包

使用：
	1.安装 npm i axios
	2.在页面中引入axios，然后使用	

##### 发送查询GET请求

查询 不传参

```
axios.get('http://localhost:3000/todos').then(res=>{
	console.log('结果为：',res.data)
})
```

传参查询

```
// 传参查询
axios.get('http://localhost:3000/todos',{
  params:{
    _page:1,
    _limit:2
  }
}).then(res=>{
  console.log('获取的结果为',res.data)
  
})
```

##### 添加 POST请求

```
// 添加 POST
axios
.post('http://localhost:3000/todos',{
  name:'关门',
  done:false
})
.then(res=>{
  console.log('添加成功',res.data)
}); 
```

##### 修改patch/put

```
// 修改 patch / put
axios
.patch('http://localhost:3000/todos/3',{
  name:'养发'
})
.then(res=>{
  console.log('修改成功',res.data)
  
});

axios.put('http://localhost:3000/todos/3',{
  name:'理发'
}).then(res=>{
  console.log('使用put修改成功',res.data)
});
```

##### 删除delete

    // 删除delete
    axios.delete('http://localhost:3000/todos/3').then(res=>{
      console.log('删除任务成功',res.data)
    });

#### 使用模板拼接字符串

字符串模板拼接字符串

​	利用字符串模板来拼接字符串：

​	${} 作用相当于原来的字符串拼接

​	${} 中可以使用任意的JS表达式

​	const msg = `年龄:${age},姓名:${name},是否为成年人:${age>18?'是':'否'} `

#### 过滤器的使用

过滤器的语法：通过 | 管道符号，来使用过滤器

作用：使用 date 过滤器，来格式化 curTime 这个数据，最终，将格式化后的数据输出

```
  //html
  <div id="app">
      <!-- 过滤器的语法：通过 | 管道符号，来使用过滤器 -->
      <!-- 
        作用：使用 date 过滤器，来格式化 curTime 这个数据，最终，将格式化后的数据输出 -->
      <p>{{ curTime | date }}</p>
      <p>{{ curTime | date }}</p>
      <p>{{ curTime | date }}</p>
      <p>{{ curTime | date }}</p>
    </div>
```

回调函数第一个参数：表示要格式化的数据

后面可以有任意多个参数，这些参数都是在 使用过滤器 的时候传入的

```
Vue.filter('date', input => {
	return moment(input).format('YYYY-MM-DD HH:mm:ss')
})
```

##### 全局过滤器

调用本地方法格式化时间

    Vue.filter('data',(input)=>{
      //调用本地方法格式化时间
      console.log(input.toLocaleString())
      return input.toLocaleString()
      
    });
    const vm = new Vue({
      el: '#app',
      data: {
        currDate : new Date
      }
    })


 使用moment格式化时间
     //使用moment格式化时间
    Vue.filter('data',(input)=>{
    //调用comment格式化时间
     input = moment(input).format('YYYY-MM-DD HH:mm:ss');
      return input;
      // return input.toLocaleString()
    });
    const vm = new Vue({
      el: '#app',
      data: {
        currDate : new Date
      }
    })

##### 局部过滤器

注意点：

定义局部过滤器，必须在vue的实例当中

```
//局部过滤器
filters:{
    data(input,type){
    	return moment(input).format(type)
    }
}
```

  全局过滤器 和 局部过滤器的不同之处？？？

​          全局过滤器可以在任意 Vue实例（组件） 中使用

​          局部过滤器，只能在当前 Vue实例（组件）中使用



