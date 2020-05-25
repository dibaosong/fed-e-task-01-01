// 1、
var a = [];
for(var i = 0; i < 10; i++){
    a[i] =  function(){
        console.log(i);
    }
}
//a[6]();

var a = [];
for(let i = 0; i < 10; i++){
    a[i] =  function(){
        console.log(i);
    }
}
//a[6]();

var a = [];
for(var i = 0; i < 10; i++){
    a[i] =  (function(i){
        return function(){
            console.log(i)
        }
    })(i)
}
//a[6]();


//2、
var tmp = 123;
if(true){
    //console.log(tmp);
    let tmp;
}

//3、
var arr = [12, 34, 32, 89, 4];
//console.log(Math.min(...arr));

//5、
var a = 10;
var obj = {
    a: 20,
    fn(){
        setTimeout(() => {
            //console.log(this.a)
        })
    }
}
obj.fn();

//8、
// setTimeout(() => {
//     console.log('3')
// }, 0)
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
// console.log(1);

//9、
setTimeout(function(){
    var a = "hello";
    setTimeout(function(){
        var b = "lagou";
        setTimeout(function(){
            var c = "I ♥ U";
            //console.log(a + b + c)
        }, 10)
    }, 10)
}, 10)

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

 
