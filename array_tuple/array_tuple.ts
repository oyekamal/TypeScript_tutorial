var num:number[]=[1,2,3,4,5,2,6,7]

console.log(num)

var arr_names:number[] = new Array(4,3,2,3,2)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
   console.log(names[i]);
}
//////////////   tuples        //////////////////
var mytuple = [10,"Hello"];

for (let i=0;i<mytuple.length;i++){
    console.log(mytuple[i])
}