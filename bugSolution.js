function foo(a,b){
    a = parseInt(a);
    b = parseInt(b);
    if(isNaN(a) || isNaN(b)){
        return "Invalid input";
    }
    return a + b;}
console.log(foo(1, "2")); // Output: 3
console.log(foo(1,"a")); //Output: Invalid input