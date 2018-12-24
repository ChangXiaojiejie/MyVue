#### TodoMVC1.0

实现的思路：

1.首先引入vue.js，创建vue的实例对象vm

2.在实例vm的data属性中设置遍历的数组，数组的每一项都是一个对象

3.使用v-for(item in list)遍历li标签，生成多个标签

4.通过item中的status的属性值来控值当前标签的选中状态（v-model="item.status"），同时控制着选中样式的改变（是否添加completed 类）

html的操作

```
<li :class="{completed : item.flag}" v-for="item in list">
    <div class="view">
        <input class="toggle" type="checkbox" v-model="item.flag">
        <label>{{item.name}}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>
```

​	js的操作

```
;(function(window) {
	// Your starting point. Enjoy the ride!
	// 1.首先引入vue.js，创建vue的实例对象vm

	// 2.在实例vm的data属性中设置遍历的数组，数组的每一项都是一个对象

	// 3.使用v-for(item in list)遍历li标签，生成多个标签

	// 4.通过item中的status的属性值来控值当前标签的选中状态（v-model="item.status"），同时控制着选中样式的改变（是否添加completed 类）
	const vm = new Vue({
		el:'#app',
		data:{
			list:[{id:1,name:'羽毛球',flag:true},{id:2,name:'篮球',flag:false},{id:3,name:'排球',flag:true},{id:4,name:'乒乓球',flag:true},{id:5,name:'桌球',flag:false},]
		}
	});
})(window)
```



#### TodoMVC1.1

##### 删除操作

思路：

​    1.给删除按钮注册事件

​    2.获取删除的索引值

​    3.通过数组的splice方法删除

```
//html中
<button class="destroy" v-on:click="delItem(index)"></button>

//methods中
delItem(index) {
	this.list.splice(index, 1);
},
```



##### 添加操作

思路：

​	1.首先给输入框添加 v-model = "ItemName" 和 @click.enter = "addItem($event)"

​	2.给data中添加属性 ItemName ，同时在methods中添加方法addItem(e)

​	3.将数据添加到this.list中

​	4.非空校验

​	5.输入框清空

​	6.id自动获取并累加

```
//html
	<input 
    class="new-todo" 
    placeholder="What needs to be done?" 
    //1.首先给输入框添加 v-model = "ItemName" 和 @click.enter = "addItem($event)"
    v-model="ItemName"
    @keyup.enter="addItem($event)"
    autofocus>

//data
	ItemName: '',



//methods
addItem(e) {
    //添加操作
    //1.首先给输入框添加 v-model = "ItemName" 和 @click.enter = "addItem($event)"

    //2.给data中添加属性 ItemName ，同时在methods中添加方法addItem(e)
	//4.非空校验
    if(this.ItemName===""){
   		return ;
    }	
    //6.id自动获取并累加
    let id = this.list[this.list.length-1].id+1;

    //3.将数据添加到this.list中
    this.list.push({id:id,name:this.ItemName,status:false});
 
    //5.输入框清空
    this.ItemName = " ";
},
```

##### 编辑操作

思路：

1.双击任务信息，出现编辑输入框

​	1.1给li添加类editing则可以显示编辑框，类名的设置与移除 edId === item.id

​	1.2修改编辑框中的默认值为item.name

​	1.3给label标签设置双击事件

 	1.4在methods中添加方法 showEdit显示编辑框 修改 edId 的值为 当前编辑的任务的id

​	 1.5在menthod中添加方法 hideEdit隐藏编辑框 修改 edId 的值为 -1

 2.在输入框中修改信息

 3.修改完成，回车键关闭编辑输入框

```
//编辑实现的思路

//html
	//1.1给li添加类editing则可以显示编辑框，类名的设置与移除 edId === item.id
	<li :class="{completed : item.status,editing:edId ===item.id}" v-for="(item,index) in list">
	//1.2修改编辑框中的默认值为item.name
	<input class="edit" v-model="item.name" @keyup.enter="hideEdit()">
	//1.3给label标签设置双击事件
	<label @dblclick="showEdit(item.id)">{{item.name}}</label>


//methods
//1.双击任务信息，出现编辑输入框

//1.1给li添加类editing则可以显示编辑框，类名的设置与移除 edId === item.id
//1.2修改编辑框中的默认值为item.name
//1.3给label标签设置双击事件

// 显示编辑框
showEdit(id){
    //1.4在methods中添加方法 showEdit显示编辑框 修改 edId 的值为 当前编辑的任务的id
    this.edId = id;
},

//隐藏编辑框
hideEdit(){
    //1.5在menthod中添加方法 hideEdit隐藏编辑框 修改 edId 的值为 -1
    this.edId = -1;
},
```

##### footer的显示和未完成条数

思路：

1. 根据任务数组的长度决定尾部是否显示  true为显示，false为隐藏
2. 计算当前还有多少未完成任务  filter过滤符合条件的元素，求其长度即可

```
//html
//根据任务数组的长度决定尾部是否显示 
<footer class="footer" v-show="isShowFooter">

//计算当前还有多少未完成任务
<span class="todo-count"><strong>{{leftCont}}</strong> item left</span>


//computed
//根据任务数组的长度决定尾部是否显示 
isShowFooter(){
	return this.list.length>0;
},
//计算当前还有多少未完成任务
leftCont(){
	return this.list.filter(item=>!item.status).length;
},
```

##### 清除所有已完成的任务

思路：

1.给按钮添加v-if属性，通过数组的some方法判断是否有已完成任务 ，true显示，false隐藏

2.给清除的按钮注册点击事件，通过数组的filter方法，过滤掉已完成的任务，然后将过滤后的结果赋值给this.list

```
//html
//给按钮添加v-if属性
//清除的按钮注册点击事件
<button class="clear-completed" v-if="isClear" @click="clearOk">Clear completed</button>


//methods
//当点击了清除已完成的按钮，将未完成的数据过滤出来，并赋值给之前的数组
clearOk(){
	this.list = this.list.filter(item=>!item.status);
}


//computed
//判断当前是否还有已完成的任务
isClear(){
	return this.list.some(item=>item.status);
}

```











#### TodoMVC2.0

将数据保存到localStrong中

1.只要数据发生改变，就要将变化后的数据，保存到localStong 

需要保存的操作：/添加 /删除 /切换任务状态/清除已完成/修改任务名称

实现：1.1在每个操作中都写一份

​	    1.2保存数据只写一次

可以通过Vue的中提供的watch配置型，来监视数据的改变

	watch:{
		对象的键是要监视的数据
		第一个参数：当前的最新值
		第二个参数：表示上一次的值
		list:{
		deep：true,
			handler(newVal,oldVal){
				console.log('username改变了');
			}
		}
	}	
进入页面中，就从localStrong中取出数据，赋值给list

注意点：如果localStrong中没有数据，手动设置值[]

const list = JSON.parse(localStrong.getItem('todos'))||[];

2.刷新页面的时候，将数据从localStrong

