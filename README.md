[TOC]

## 前言

本文面向人群是有编程经验，但是对js, rn 都不太了解的同学。主要介绍了入门RN所需的知识图谱和相关资料，帮助大家快速入门，可结合Demo进行训练，Demo内通过打开注释来展示不同效果



## DEMO

[RN入门简要知识图谱Demo](https://github.com/waterfly/RNHelloDemo)



## RN开发知识图谱

RN开发大致需要掌握以下知识：

* JS, ES6
* JSX
* Flex布局
* RN常用组件


其中 JS 大致了解基本语法即可，后续边开发边参考《高级开发指南》与《权威指南》，随着开发的深入，再加深了解，不建议一上来就开始翻着很厚的书看，这样比较费时，效果也不好，而且容易放弃

## 开发环境搭建

- 参考[搭建开发环境](https://reactnative.cn/docs/getting-started/) 搭建RN开发环境，可使用VSCode 或 WebStorm 进行开发，或直接Clone Demo


## JS

### 基本语法

* var let const class

### **基本类型**

* number
* string
* boolean
* object
  * 狭义对象 object
  * array
  * function
* undefined
* null

### **基本语句**

* if else
* switch case

### **除以下六个值，都会被转为false**

- undefined
- null
- false
- 0
- NaN
- '' / "" （空字符串）

### **函数**

* 函数
* 箭头函数
  * 避免this 问题
  * 由于绑定是在render中执行，而render是会执行多次的，每次bind和箭头函数都会产生一个新的函数，因而带来了额外的开销，简单来说就是避免额外开销
  * 小结一下，有了箭头函数，就可以像OC里使用self一样，this也可以使用的飞起

### **其他补充说明：**

* 无

### **参考资料：从入门到放弃系列**

- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)
- 《JavaScript权威指南第6版》
- 《JavaScript高级程序设计（第3版）》


### 代码示例

见Demo



## Flex布局

RN采用的是Flex布局，可参考以下文档进行学习，可结合Demo进行修改训练

- [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [React Native布局详细指南](https://github.com/crazycodeboy/RNStudyNotes/blob/master/React%20Native%E5%B8%83%E5%B1%80/React%20Native%E5%B8%83%E5%B1%80%E8%AF%A6%E7%BB%86%E6%8C%87%E5%8D%97/React%20Native%E5%B8%83%E5%B1%80%E8%AF%A6%E7%BB%86%E6%8C%87%E5%8D%97.md)
- **官方文档翻译** [使用Flexbox布局](https://reactnative.cn/docs/0.46/layout-with-flexbox.html#content)
- **官方文档翻译** [布局样式属性](https://reactnative.cn/docs/0.46/layout-props.html#content)
- 官方文档翻译 [颜色](https://reactnative.cn/docs/0.46/colors.html#content)
- 官方文档翻译 [样式](https://reactnative.cn/docs/0.46/style.html#content)
- [CSS 参考手册](http://www.w3school.com.cn/cssref/index.asp) 用于查找对应的CSS详细定义
- RN Layout FlexBox.xmind





## JSX

JSX 就是在JS中包括标签或组件的一种写法，大致

* 基本语法，参考Demo

* State props，这两个概念比较重要，要详细了解

* 条件渲染

* 引入其他文件

  ```jsx
  import Jsx from "./Jsx";
  ```

* 回调函数，回调函数的写法，从cell 触发事件 回调到 FlatList 所在的 class ，然后由class处理时间，比如修该cell高度等

  ```jsx
  //在FlatList calss 内，渲染 Item 的时候 ,传入一个 func ,该函数为本class的函数
  <Item data={item} func={this._pressedCell} displayMore={displayMore}></Item>

  _pressedCell = (object) => {
      
  }
      
  //在 cell 内 就可以拿到该 func，然后触发该函数就，同时传参
  _pressEvent = () => {
      this.props.func(this.props.data);
  }

  ```

* 关闭警告

  ```jsx
  console.disableYellowBox = true;
  console.warn('YellowBox is disabled.');
  ```

* 原生Bridge写法

* 参考文档  [React 官方文档翻译](https://doc.react-china.org/docs/hello-world.html)





### **其他补充说明：**

- console.log
- alert



## 关于 js jsx

**Js:**

* [ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)
* 《JavaScript权威指南第6版》《JavaScript高级程序设计（第3版）》

**Jsx:**

* [React 官方文档翻译](https://doc.react-china.org/docs/hello-world.html)



## RN常用组件

常用组件比如View, Image, Text等等，具体使用参见官方文档翻译 [RN文档中文站点](https://reactnative.cn/docs/getting-started.html) 



## 调试

* 断点调试、log 输出、alert 弹框
* 官方文档翻译 [调试](https://reactnative.cn/docs/0.46/debugging.html#content)



## 参考文档

* [RN文档中文站点](https://reactnative.cn/) 
* [ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)
* [React-Native学习指南](https://github.com/reactnativecn/react-native-guide) 本指南汇集React-Native各类学习资源
* [awesome-react-native](https://github.com/jondot/awesome-react-native)  Awesome React Native components, news, tools, and learning material!



## 参考书单

* 《JavaScript权威指南第6版》
* 《JavaScript高级程序设计（第3版）》
* [ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)
* 《React Native入门与实战》 （大致翻一遍了解下，不用细看，以后遇到问题可以再细翻）
* 《Reactive Native 开发指南》（这本书有点过时，大致翻一遍就好）


