function id_detail(id:number, name:string, mail?:string){
    console.log(id);
    console.log(name);
    if (mail!=undefined){
        console.log(mail);
    }
}

id_detail(123,"kamal");
id_detail(54,"jamal","gmail.com")


//           adding numbers                 //


let sum:number=0;
function adding (...num:number[]){
    let i;
    for (i =0; i<num.length;i++){
        sum = sum + num[i];
    }
    return sum
}

console.log(adding(1,2,3))
console.log(adding(1,2,3,23,5,5,723))


///////////////////////        Recursion                ////////////////////////////////////


function factorial(num:number){
    if (num<=0){
        return 1
    }
    else{
        return (num * factorial(num -1))
    }
}

console.log(factorial(5))

//////////////////////////            Lambda Functions                  /////////////////////////////

let foo = (x:number)=> 10+x

console.log("lambda functions " +foo(100))

////////////////////          another example           ////////////////////////////////////


let detal = (name:string, mail:string) => {
    return "my name is" + name + "my email is " + mail
}


console.log(detal("kamal", "oykamal@gmail.com"))


var display = x => {
    console.log("display number "+ x)
}

display(12)

/////////////////////////   if present then display   ////////////////////////////////////


let show = (x:any, y?:any):void =>{
    console.log(x)
    console.log(y)
}

show(112)
show('kamal',23)