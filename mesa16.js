
let FizzBuzz = (f, B) => {
    for (let i=1; i<=100; i++)  {
        if ( i % f === 0 && i % B === 0){
            console.log("fizz")
        } else if(i % f=== 0){
            console.log("Buzz");

        } else if(i % B=== 0){
            console.log("fizzBuzz");
        } else {
            console.log(i);
        }
    }
}
console.log(FizzBuzz(7, 7));

