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
