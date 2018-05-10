# JSDemo
1，原型链问题
```
* js中所有东西都是对象，函数也是对象，而且是一种特殊的对象
* js中所有的东西都是有object衍生而来，所以所有的对象原型终点都是 object.prototype
* 函数一定有prototype属性，但是对象不一定有
* js中对象都有一个隐藏的————proto————属性，他指向创建他的构造函数的原型,但是object.prototype.__proto__ === null
* funtion Function(){} 的 prototype 跟 __proto__ 都是 Funtion.prototype
```
### 函数声明，函数表达式，变量前置
函数声明
```
    // 函数声明
    function wscat(type){
        return type==="wscat";
    }
```
函数表达式
```
    // 函数表达式
    var oaoafly = function(type){
        return type==="oaoafly";
    }·
```
 - JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
 - 而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
代码：
```
        getName()//oaoafly
        var getName = function() {
            console.log('wscat')
        }
        getName()//wscat
        function getName() {
            console.log('oaoafly')
        }
        getName()//wscat
```
编译：
```
        var getName//变量被提升，此时为undefined
                
                getName()//oaoafly 函数被提升 这里受函数声明的影响，虽然函数声明在最后可以被提升到最前面了
		var getName = function() {
			console.log('wscat')
		}//函数表达式此时才开始覆盖函数声明的定义
		getName()//wscat
		function getName() {
			console.log('oaoafly')
		}
		getName()//wscat 这里就执行了函数表达式的值
```

