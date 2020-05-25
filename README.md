# 一、简答题
## 1、
执行结果：10  
因为按js代码的执行顺序，for循环会优先执行完，这时变量 i 已经是10了，然后无论执行数组中保存的哪个事件输出都会是10.  
如果想执行第几个就输出几，如下代码所示，可以使用闭包把i保存到内存中或者使用es6的let来定义i  
```
var a = [];
for(let i = 0; i < 10; i++){
    a[i] =  function(){
        console.log(i);
    }
}
a[6]();

var a = [];
for(var i = 0; i < 10; i++){
    a[i] =  (function(i){
        return function(){
            console.log(i)
        }
    })(i)
}
a[6]();   
```

## 2、
会报错  
因为 let 是块级作用域，且必须先定义，后使用，console.log放在了与let同一块级作用域下，且放到了let之前，所以会报错。  

## 3、
可以使用扩展运算符...
```
Math.min(...arr)
```

## 4、
1. var 存在变量提升，可以先使用，后定义，且可重复定义，后面的会覆盖前面的  
2. let与const 是块级作用域，都必须先定义，后使用，否则会抛出错误,不同块级作用域下互不影响  
3. let 不能重复定义  
4. const 只能用来定义常量，定义后不能改变，但定义对象或者数组时，可以改变里面的值，内存地址不发生改变即可

## 5、
输出结果：20  
1. obj调用的自身里面的fn函数，所以this指向的是obj本身  
2. setTimeout用的是es6的箭头函数，箭头函数没有this，所以其中的this指向的是执行环境的上下文，也就是obj对象，所以this.a取到的是obj对象中的a，也就是20.

## 6、
1. 为对象添加Symbol类型的key，这类key是不能通过Object.keys或者for in枚举，这样就很方便的定义了一些自己需要使用的key值， 在最终把数据提交到接口时就可以选择性的不让Symbol类型的数据提交了  
2. 可以使用Symbol来定义常量  
```
const a = Symbol(); 
const b = Symbol();
```
3. 定义方法中的私有属性，继承后的实例对象上访问不到该Symbol属性

## 7、
1. 浅拷贝：只拷贝了引用数据类型如对象指针，并不会拷贝其本身，新旧对象还是共用的同一内存地址，这就导致在一个对象发生变化后，会影响另一对象。  
2. 深拷贝：会拷贝创建一个相同的对象，开辟一个新的内存地址，新旧对象不在是同一内存地址，所以改变任何一个对象，都不会影响另外一个对象。

## 8、
1. 因为js是单线程，所有任务会同步排队执行，有些任务耗时比较长，就会产生阻塞，所以js提供了一些异步方法，遇到异步任务会先挂到任务队列，等待所有同步任务完成，在执行异步任务。
2. Event Loop是为了解决js单线程阻塞问题而加入的事件运行循环机制，先执行同步代码，然后在去执行任务队列中的异步代码，异步任务是先进先出，直到所有异步任务执行完成为止。
3. 异步任务又分宏任务和微任务，同步代码执行完成后，会优先执行所有微任务，然后在一个一个的执行宏任务，比如setTimeout、setInterval,ajax都是异步中的宏任务，Promise.then是微任务
```
setTimeout(() => {
    console.log('3')
}, 0)
Promise.resolve(2).then((res) => {
    console.log(res)
})
console.log(1);
```
如上代码执行输出顺序为 1 2 3

## 9、
```
function promiseLog (str) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(str);
        }, 10)
    })
}
let str = '';
promiseLog("hello").then((res) => {
    str += res;
    return promiseLog("lagou")
}).then((res) => {
    str += res;
    return promiseLog("I ♥ U")
}).then((res) => {
    str += res;
    console.log(str);
})
```
## 10、
TypeScript是JavaScript的超集，包含了JavaScript的所有属性，支持所有最新的ESMAScript的特性，并扩展了JavaScript的语法，比如泛型定义、interface等，最终可以编译为JavaScript在js环境中运行。

## 11、
优点：
1. 增加了代码的可读性和可维护性，比如定义强类型，有利于代码重构与语法的补全
2. 在编译阶段就会抛出代码的错误，会比运行到哪在报错更利于开发
3. 生态非常健全完善  

缺点：
1. 小项目使用会增加开发成本，有一定的学习成本，不过应用到大型项目这些成本就不算什么了