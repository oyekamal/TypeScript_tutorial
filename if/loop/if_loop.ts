let num:number =0;
while (num<5){
    console.log(num);
    num++;
    
}

console.log("for loop")

for(num=0;num<=20;num++) {
    if (num % 2==0) {
        console.log("skip 2")
       continue
       
    }
    console.log(num)
 }