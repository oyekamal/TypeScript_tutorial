function id_detail(id, name, mail) {
    console.log(id);
    console.log(name);
    if (mail != undefined) {
        console.log(mail);
    }
}
id_detail(123, "kamal");
id_detail(54, "jamal", "gmail.com");
//           adding numbers                 //
var sum = 0;
function adding() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}
console.log(adding(1, 2, 3));
console.log(adding(1, 2, 3, 23, 5, 5, 723));
///////////////////////        Recursion                ////////////////////////////////////
function factorial(num) {
    if (num <= 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(5));
//////////////////////////            Lambda Functions                  /////////////////////////////
var foo = function (x) { return 10 + x; };
console.log("lambda functions " + foo(100));
////////////////////          another example           ////////////////////////////////////
var detal = function (name, mail) {
    return "my name is" + name + "my email is " + mail;
};
console.log(detal("kamal", "oykamal@gmail.com"));
var display = function (x) {
    console.log("display number " + x);
};
display(12);
/////////////////////////   if present then display   ////////////////////////////////////
var show = function (x, y) {
    console.log(x);
    console.log(y);
};
show(112);
show('kamal', 23);
