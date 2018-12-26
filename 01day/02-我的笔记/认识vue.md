#### 什么叫库？ 代表是jQuery

​	库本质是就是一些函数的集合，就是将一些函数放到一个独立的js文件中

​	在使用库的时候，是由开发人员说的算，也就是开发人员起到了主导作用，而jQuery是辅助完成相应的功能

#### 什么是框架？

​	代表：vue
	是一套完整的解决方案，项目中的用到的一些功能在框架的内部都已经提供好了，在

使用框架的时候，只要将我们自己写的代码，放到框架合适的地方，框架会在合适的时机

主动调用我们写好的代码。

​	框架制定了一套规则，我们开发人员，就按照这套规则写代码，也就是说：在使用

vue的时候，是由就框架说的算，就是框架起到了主导作用

#### 库和框架的区别？

​	**本质区别**：**控制翻转**，也就是起到了主导作用

​	在使用库 的时候，由开发人员到主导作用

​	在时用 框架 的时候，由框架起到了主导作用



#### mvc设计模式

​	**m:数据模型**，操作数据，CRUD
	常见处理事务：根据用户输入的用户名和密码来和数据库的用户名和密码进行匹配，来判断登录是否成功

​	**v：视图模型**，数据的渲染用户在页面中看到的页面内容

​	**c：控制模型**，是处理业务逻辑，数据模型和视图模型

​	常见的处理业务：
	1.格式校验

​	2.将用户名和密码交给数据模型，由数据模型判断用户名和密码是否正确

mvc的优点：将应用程序划分为三大部分，实现了职责的分离

![](D:\黑马学习\vue\images\mvc模式.png)

#### MVVM

##### mvvm=====> m / v /vm

**M：数据模型**

**V：视图模型**

**VM：ViewModel视图模型**

mvvm的特点： **数据的双向绑定**

数据驱动视图的思想，**数据是核心**

v(修改视图)---->数据也会改变

M(修改数据)---->视图也会发生改变

注意点：

**不推荐直接手动操作DOM！！！**
	学习Vue要转换的思想：数据驱动视图：不要想着怎么去操作DOM，而是想着如何去操作数据

**Vue可以看做一个MVVM模式的框架，内部实现了数据的双向绑定**

**双向绑定的两个方向**

1 视图- >数据 内容发生改变了，那么对应的数据也会自动跟着改变

2 数据- >视图 数据发生改变了，那么对应的数据也会自动跟着改变

说明：vue中不推荐直接操作DOM的，但是Vue的底层还是Dom操作，只是不需要我

们手动操作DOM，在框架的底层封装好了DOM操作

保持视图和数据的同步

#### MVVM的应用

MVVM适合带有视图的应用，比如前端（页面），桌面daunt的应用

这个模式最早出现在微软的 WPF技术中


​	
#### vue的使用步骤

1.安装 ：npm i vue

2.引入vue.js（未压缩版本）

3.使用vue

4.创建vue的实例

构造函数的内部是vue的配置项

	const vm = new Vue({
		//element
		//作用：指定视图中的哪块内容作为Vue的视图
		el:"#app",
		//数据
		data:{
			msg:'Hello Vue'
		}
	
	});



​	{{}}  插值表达式：将data中的值插入到{{}}的位置

**注意点：**
	1.构造函数的首字母大写

​	2.vm是一般约定使用的Vue的实例名称

​	3.只有el操作的范围内，才能被vue解析，超出范围无效

​	4.el 不能指定到body或者html中，否则会报错

​	5.内部的关键字属性名不能自定义，只能使用定义好的属性和方法



#### vue的生命周期

​        学什么？？？

​          1 Vue生命周期的整个流程

​          2 生命周期钩子函数

​        Vue生命周期分为三个阶段：

​          1 挂载阶段： 第一次进入页面的时候（ new Vue() 代码执行的时候 ）

​            1.1 数据响应式（ 数据双向绑定 ）

​            1.2 编译（解析）模板

​              $0.outerHTML => "<div id="app"><h1>Hello Vue 生命周期</h1></div>"

​            1.3 渲染DOM（页面）

​              不管有没有指定 tepmlate 选项，页面中的 #app 也就是我们自己写的模板内容，都会被替换掉。

​              如果指定了 template ，就使用 template 编译后的内容，替换 #app

​              如果没有指定 template，就是用 #app 模板内容编译后结构，替换 #app

​            说明： Vue 会读取到我们写好的模板内容，在内存中对模板内容进行拷贝，然后，将内存中的内容进行编译（ 注意：我们自己写的模板没有被编译 ），最终，将编译后的内容，渲染到页面中，替换掉了我们写的模板内容

​          2 更新阶段： 数据发生改变的时候

​          3 卸载阶段： 主动调用 vm.$destory() 方法

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <div id="app">
    <!-- 俺有注释 -->
    <p>{{text}}</p>
    <input type="text" v-model="text">


  </div>
  <script src="./vue.js"></script>
  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        text: "这是文本",
        setId : null,
        num : 0
      },

      // template:`
      // <p>我是template的模板</p>
      // `,

      // 创建Vue实例前的函数 修改无效 在此处设置的事件，销毁vue实例的时候，无法解绑和清除定时器
      beforeCreate(){
        this.text = "beforeCreate修改了"
        console.log('创建Vue实例前的函数,触发了',this.text)
      },

      // 创建了Vue的实例 可以发送ajax请求
      created(){
        // console.log(this.text)
        this.text = "created修改了"
        console.log('创建Vue实例的函数触发了',this)
        this.setId = setInterval(() => {
          this.num++;
          console.log(this.num)
          
        }, 500);
      },

       // 渲染DOM前，执行的钩子函数
      beforeMount(){
        console.log('渲染DOM前，执行的钩子函数')
        console.dir(this)
        console.log(this.$el)
      },

      // 渲染DOM后，执行的钩子函数
      mounted(){
        console.log('渲染DOM后，执行的钩子函数')
        console.dir(this)
        console.log(this.$el)
      },

      //更新前的生命周期的钩子
      beforeUpdate(){
        console.log('更新前的数据',this.text,this.$el.children[0].innerText);       
      },
      //更新后的声明周期的钩子
      updated(){
        console.log('更新后的数据',this.text, this.$el.children[0].innerText);
      },
      //销毁前的生命周期钩子函数
      beforeDestroy(){
        console.warn('生命周期钩子函数： beforeDestroy')
      },
      //销毁前的生命周期钩子函数
      destroyed(){
        console.warn('生命周期钩子函数： destroyed')
        clearInterval(this.setId);
        
      }
    })
  </script>
</body>

</html>
```





#### 插值表达式

​	作用：将msg数据插入到当前的位置

​	插值表达式中，能够使用任意的js的表达式(不能出现语句)

​	表达式都是有值的，能作为方法参数都是表达式，
	{{1}} {{"1111"}} 

input 中的 v-model 是一个指令

```
<input type="text" v-model="name">
```

指令：就是Vue给HTML元素添加的一些特殊的标记，这些标记就是Vue提供的

作用：让HTML元素具备了原来没有的功能



#### 数据的双向绑定实现

数据的双向绑定的原理：数据劫持

Vue中通过Object.defineProperty()方法实现了数据劫持的功能
通过这个方法，可以在 访问属性或给属性赋值时，添加一些额外的操作进来

Object.defineProperty()的使用

const obj = {}；
let temp;

第一个参数：表示给哪个对象添加属性

第二个参数：表示要填加的属性名称

第三个参数：是一个对象，对象有两个方法，get和set

Object.defineProperty(obj,'name',{

​	在Object.defineProperty中，get和set名称固定

​	get的作用：当读取对象的属性的时候，会调用get方法

​	get 方法的返回值，就是当前的属性的值

	get:function(){
		return temp;
	}
	
	//set的作用：当设置对象的属性的时候，会调用set方法
	//参数 value表示给属性的设置的值
	set:function(value){
		console.log（value）
		
		temp = value;
	}
	})


shim指的是，可以通过代码的方式，去实现无法兼容的方法的功能

为什么vue不兼容ie8，及其以下？
Object.defineProperty是ES5中无法shim的特性

##### 如何实现数据的双向绑定

M->V 修改数据，视图发生改变
	1.1通过defineProperty定义一个数据obj.name
	1.2在set方法中，直接修改对应的DOM内容即可

V->M 修改视图，数据发生改变
	2.1给文本框绑定input事件
	2.2在事件通过事件对象e 获取到当前的文本框的值 e.target.value
	2.3因为要让数据改变，所以，直接给数据obj.name赋值

vue会遍历data配置中的所有属性，内部调用Object.defineProperty()方法，将所有的属性都转化为getter/setter的形式
	并且，要添加vm实例中，所以可以直接通过vm.name来访问data：{name：'true'}

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <input type="text" id="txt" />
      <h1 id="title"></h1>
    </div>

    <script>
      /* 
        模拟实现双向数据绑定：
        1 数据 -> 视图：(先实现)
          1.1 通过 defineProperty 定义一个数据 obj.name
          1.2 在 set 方法中，直接修改对应DOM的内容即可

        2 视图 -> 数据：（再实现）
          2.1 给文本框绑定input事件
          2.2 在事件中通过事件对象 e 获取到当前文本框的值 e.target.value
          2.3 因为要让数据改变，所以，直接给 数据obj.name 赋值
      */

      //1.获取元素
      let txt = document.querySelector('#txt');
      let title = document.querySelector('#title');
      
      //2.创建一个空对象和中间变量保存
      let obj = {};
      let temp = '';
      //3.调用  Object.defineProperty 方法
      Object.defineProperty(obj,'name',{
        get(){
          // //给h1设置值
          // title.innerText = temp;
          // //给input设置值
          // txt.value = temp;
          return temp;
        },

        set(value){
          //给h1设置值
          title.innerText = value;
          //给input设置值
          txt.value = value;
          //使用中间变量将值保存下来
          temp = value;
        }
      });

      //4.给input注册input事件
      txt.oninput=function(e){
        //通过事件对象将当前input的值取出 e.target.value
        //将值同步到obj.name中
        //由于给obj.name赋值，就会触发set事件，那么h1的值也会同步
        obj.name = e.target.value;

      }
    </script>
  </body>
</html>

```



#### 指令操作

指令的作用：实现数据的双向绑定，也就是说让文本框的值 和数据的name双向绑定到一起。只要任意一个改变，另一个都会发生改变

M->V 修改数据，视图发生改变

V->M 修改视图，数据发生改变

如果想要获取文本框的值，只要获取对应的数据即可

1.在文本框 中 添加一个指令： v-model="name"
2.name 数据就是文本框的值了
3.所以，想要获取文本框的值，直接获取name数据的值即可



**问题一：**

设置指令的时候，什么时候添加单花括号？

​	当设置类名的添加和移除操作,需要添加{}

​	当设置直接样式操作,需要添加{}

```
	v-bind：class = "{completed : item.status}"
	v.bind:style = "{'background-color':bgc}"
```

​	当属性只需要一个参数时,不需要添加单花括号{}

```
 v-model = "item.status"
```
##### v-model

作用：用于实现数据的双向绑定功能

特点：

1.只能用于表单元素中

2.在不同的表单元素中功能不同

在<input type="text">中，表示的是value的值

在<input type="checkbox">中，表示的是checkbox

```
  //html设置
  <input type="text" v-model="isCheck">
  <input type="checkbox" v-model="isCheck">
  
  //js
   const vm = new Vue({
       el:'#app',
       data:{
       name:'快带你呀',
       isCheck:'true'
       }

    });
  
```

##### v-text

作用：相当于innerText的功能，如果元素中有默认的内容，那么默认内容会被覆盖

##### v-html

作用：相当于innerHTML的功能。

应用场景：如果字符串内容中，包含了HTML字符串，此时应该使用v-html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div id="app">
      <!-- v-text 用来设置文本内容 -->
      <!-- <p v-text="msg"></p>
      <p>内容为： {{ msg }} ！！！</p> -->

      <div v-text="html">

      </div>

      <div v-html="txt">

      </div>

     
    </div>

    <script src="./vue.js"></script>
    <script>
      /* 
        v-text：作用相当于 innerText 的功能
          注意：如果 元素中有默认内容，那么，默认内容，就会被覆盖掉

        v-html：作用相当于 innerHTML 的功能
          如果字符串内容中，包含了 HTML字符串， 此时，应该使用 v-html
      */

      const vm = new Vue({
        el:'#app',
        data:{
          txt:'<h1>春春走啦，不开心呢</h1>',
          html:"<h2>不得不说，玺哥唱歌挺好听的</h2>"
        }
      });
     
    </script>
  </body>
</html>

```

##### v-bind

作用：如果要给HTML的属性动态设置内容要使用v-bind命令

说明：

​	v-bind：href表示要给当前的元素添加href属性，v-bind属性的前缀表示要使用data中的数据，来实现动态绑定

简写的方式：    

​	：href

```
  //HTML设置
  	<a :href="url"></a>   
    <img :src="src" :alt="alt">
      
  //js设置
  const vm = new Vue({
      el:'#app',
      data:{
          url: 'www.baidu.com',
          src:'./imgs/1.png',
          alt:'涵涵'
      }
  });

```

应用：

  样式操作的两种方式：

​        1 class （推荐！！！）

```
 //html设置  xm是类名 fs是类名
 <div v-bind:class="{xm:isTrue,fz:isTrue}">小马哥的专属</div>
 
 //js设置
 const vm = new Vue({
     el:'#app',
     data:{
     	isTrue:true
     }
 });
```

​        2 style 行内样式

​	**注意点：**

​       1.属性名如果带有-的字符，可采用驼峰命名法，或者加上单引号

​       2.设置直接样式，如果有多个

​       3.多个属性之间用逗号隔开

​	4.设置直接样式必须加上单花括号{}

```
//HTML
 	<div v-bind:style="{color:isColor,'font-size': fz + 'px'}">
        你是我的小星星
     </div>
//JS设置
const vm = new Vue({
    el:'#app',
    data:{
        isColor:'#f0f0f0',
        fz: 50
    }
});
```

##### **v-for**

作用：

能够遍历指定的数据（数组或对象），重复生成指令的标签

语法： 

​	v-for = “item in arr”

item：表示数据中的每一项

arr：表示遍历的数组（对象）

获取数组中的每一项以及索引号

```
//html设置
 <div v-for="(item,index) in list">{{index}}=========>{{item.name}}</div>

//js设置
const vm = new Vue({
    el:'#app',
    data:{
    	list:['red','green','yellow','blue']
    }
});
```

遍历数组中的对象

```
//html设置
 <div v-for="(item,index) in list">{{index}}=========>{{item.name}}</div>

//js设置
const vm = new Vue({
    el:'#app',
    data:{
    	list:[{name:'red'},{name:'green'},{name:'yellow'},{name:'blue'}]
    }
});
```

##### v-on

- 作用：绑定事件

- 语法：`v-on:click="say"` or `v-on:click="say('参数', $event)"`

- 简写：`@click="say"`

- 说明：绑定的事件从`methods`中获取

- 事件中的this表示当前Vue实例

  特点：

  

  **如何传递参数**

  ​	添加小括号就表示要传递参数，此时，如果要在事件处理程序中获取到事件对象，就必须手动指定$event

  ```
  @click = "fn(123)"
  
  @click = "fn()"
  ```

  

  **如何获取事件处理参数**

  

  1.@click = "fn",这种获取事件处理函数，默认第一个参数就是事件处理函数

  2.@click = "fn(123)"或者@click = "fn()"必须手动设置$event才能获取到事件处理函数，约定将事件处理函数作第一个参数

  ```
  //html
  @click = "fn($event,123)"
  
  @click = "fn($event)"
  
  //methods
  fn(e){
  //这里的e就是事件处理函数
      console.log(e);
      
  }
  
  ```

#### 计算属性

​	只有计算属性的依赖项发生改变的时候，计算属性才会被重新计算，如果是不相关的数据改变，是不会引起计算属性重新计算

​	在加法计算器中，num1和num2是result的依赖项，当num1的值发生改变时，result会被触发

**注意点**

​	1.计算属性的在使用的时候，不要加小括号调用，否则会报错。

​	2.计算属性的值是由方法的返回值决定的

​	3.计算属性中的名称不要与data中的数据名称重名，否则会报错

**使用的场景：**
	根据data中的现有的数据，得到一个新的数据，此时就应该使用计算属性

```
computed：{
	result(){
		//获取到的值是String类型的值
		return this.num1-0 +(this.num2-0)
	}
}
```

#### vue的更新特点：

​	data的中的数据发生改变时，页面中的所有的指令和表达式都会重新计算一次，事件处理函数除外。
	产生的问题：所有的指令和表达式重新计算，会造成资源浪费？

#### key 属性

v-for中的key的属性

特点：只要使用v-for这个属性就要添加key属性，且key属性是唯一的
	

##### **为什么要加key？**

如果不加key的会出现临时状态错乱

##### **什么叫就地复用？**

​	在插入数据的过程中，标签没有改动，仅仅是标签的内容发生改变，就是所谓的就地复用，也就是复用了每个P标签，而在前面三个标签的后面添加了一个新的标签

​	同样的内容文本框中的内容也是一个临时状态，插入数据后，Vue采用了就地复用的策略

**根本原因**：不添加key属性采用了索引号作为key的值

![](D:\黑马学习\vue\images\key的问题说明.png)

##### 解决就地复用的问题：

​	默认情况下不添加key实际上以每一项的索引号作为key的值，但是每项的索引值后动

态改变的，所以，插入数据，vue就地复用标签，就会发生数据错乱

​	但是有id作为key的属性后，以id作为唯一的标识，就地复用还会保持绑定的状态

##### **最佳实现：**

​	0.只要使用v-for就添加key属性

​	1.如果有id就会用id作为key的属性

​	2.如果没有id就是用能作为唯一标示的属性作为key值

​	3.如果不依赖于临时状态，index也可以作为key的值

```html
//html
<ul id="app">
    <li v-for="(item,index) in list" :key="item.id">
        {{index}}=====>{{item.name}} <input type="text">
    </li>
</ul>

//js
const vm = new Vue({
    el:'#app',
    data:{
    list:[
            {id:1,name:'常小杰'},
            {id:2,name:'李大想'},
            {id:3,name:'丁申阳'},
            {id:4,name:'谢新旺'}
        ]
    }
});

```

##### v-if 和 v-show

- [条件渲染](https://cn.vuejs.org/v2/guide/conditional.html)
- `v-if`：根据表达式的值的真假条件，销毁或重建元素
- `v-show`：根据表达式之真假值，切换元素的 display CSS 属性

v-show

​	控制元素的展示和隐藏，如果值为true则显示该元素，如果为false则隐藏该元素

​	**实现的原理**：通过css中的dispaly：none实现的

v-if

​	控制元素的展示和隐藏，如果值为true表示显示该元素，如果值为false表示隐藏该元素

​	**实现的原理**：移除元素，也就是从HTML结构中将这个标签删除来隐藏

​	**应用场景：**

​		频繁操作元素的展示和隐藏，用v-show（性能高）

​		要么显示要么隐藏，用v-if

```html
<p v-show="isShow">这个元素展示出来了吗？？？</p>
<p v-if="isShow">这个元素，在HTML结构中吗？？？</p>
```

##### 提升性能：v-pre

- 作用：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

**编译指的是：**
	将模板中的{{text}}解析成对应的内容
	将模板中@click=”fn”转化为绑定事件

```html
<p v-pre>{{text}}</p> //{{text}}
```

##### 提升性能：v-once

- 作用：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```html
<p v-once>{{text}}</p> //显示的内容为：这是文本文字
```

---

##### 事件修饰符

- **`.prevent` 阻止默认行为，调用 event.preventDefault()**

  默认行为：

  ​	a标签的跳转的行为

  ```
  <a href="http://itcast.cn" @click.prevent></a>
  ```

  ​	form表单的默认提交行为

  ```
  <form action="./01-其他指令（v-else和v-else-if）.html">
  
        <input type="submit" value="提交" @click.prevent="fn()">
  
  </form>
  ```

  

- `.stop` 阻止冒泡，调用 event.stopPropagation()

- `.capture` 添加事件侦听器时使用事件`捕获`模式

- `.self` 只当事件在该元素本身触发时，才会触发事件

- `.once` 事件只触发一次

##### 异步 DOM 更新



- 作用：Vue 异步执行 DOM 更新，监视所有数据改变，一次性更新 DOM
- 优势：可以去除重复数据，对于避免不必要的计算和避免重复 DOM 操作上，非常重要
- `Vue.nextTick(callback)`：在 DOM 更新后，执行某个操作（DOM 操作）
  - `vm.$nextTick(function () {})`
  - `$el`：表示 Vue 管理区域的根元素，是一个 DOM 对象（<div id="app">...</div>）

```js
const vm = new Vue({
      el: '#app',
      data: {
        text : 1
      },
      methods:{
        fn(){
          //修改text的值
          this.text = 100;
          //获取text的值
          console.log('打印当前的text的值',this.text)

          //获取到的还是修改之前的数据
          console.log('打印当前p的值',vm.$el.children[0].innerText)
          // 通过 vue 中的 $nextTick() 来获取更新后的DOM
          this.$nextTick(()=>{
            //获取到的还是修改的数据
            console.log('打印当前p的值',vm.$el.children[0].innerText)
            
          });
        }
      }
    })
```

#### 动态添加数据的注意点

- 注意：只有`data`中的数据才是响应式的，动态添加进来的数据默认为非响应式

- 可以通过以下方式实现动态添加数据的响应式
  - 1 `Vue.set(object, key, value)` - 适用于添加单个属性

  - 2 `Object.assign()` - 适用于添加多个属性

    添加多个属性 Object.assign  能够将后边的对象（vm.stu 和 {...}）合并在一起，然后将合并的属性赋值给一个目标对象（{}），然后将这个目标对象返回，再将返回值赋值给源对象（vm.stu） 

  **{} 对象存在的意义？** 

  ​	作为目标对象的载体，将后面的对象的属性合并，返回{}中的属性值 ，因为拷贝会改变第一个对象的的数据，为了不影响其他对象的数据，设置空对象，接收拷贝的属性，然后再将这个空对象返回

```js
const vm = new Vue({
        el:'#app',
        data:{
          obj:{
            name:'常姐姐'
          }
        },

      });
      //动态添加单条数据
      vm.$set(vm.obj,'age',18);

      //动态添加多条数据
      vm.obj = Object.assign({},vm.obj,{
        sex:'m',
        deep:'ok'
      });
```

#### 监视对象

监视对象中的属性的变化

​	注意点：如果监听对象，需要添加deep属性，来实现深度的监听，可以监听到对象

的属性值的改变

​	监听对象的属性的数据改变，改变前的值和当前值是相等的，原因是newVal和

oldVal表示同一个对象

```
 
 const vm = new Vue({
      el: '#app',
      data: {
        obj: {
          name: 'changjie',
          age: 18
        }
      },
      watch: {
        obj: {
          deep: true,

          handler(newVal, oldVal) {
            console.log('最新值为：' + newVal.age, '之前的值为：' + oldVal.age)

          }

        }
      }
    })
```

#### 其他的指令

##### 	v-cloak指令

​	作用：解决在模板的渲染前后会出现闪烁的情况

​	实现的步骤：

​	1.首先给当前的需要处理的标签，添加v-cloak属性

​	2.然后给需要处理的元素设置css样式[v-cloak]:{display:none}

实现的原理：

​	给需要处理的元素添加v-cloak属性，然后在设置[v-cloak]:{display:none}，这样需要处理的元素就会被隐藏，那么等到数据模板渲染完成，那么在移除v-cloak属性，元素就会显示出来，当前元素的内容已经是渲染完成的了

```
//html
<div id="app">
    <div v-cloak>
        <p>{{text}}</p>
        <p>{{text}}</p>
        <p>{{text}}</p>
        <p>{{text}}</p>
    </div>
</div>

//js
alert('调皮一次啊');
    const vm = new Vue({
    el: '#app',
    data: {
    	text:'能看见我么'
    }
})
```



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

