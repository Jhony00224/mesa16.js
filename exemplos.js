function soma(a, b){
    return a + b;
}
/*
let soma1 = function (a, b){
    return a + b
}

let soma2 = (a, b) => {
    return a + b; 
}


let soma3 = (a, b) => a+b

let ola = () => 'hello word'

let ola1 = nome => 'hello'+nome
console.log(soma(5,5));
console.log(soma1(5,5));
console.log(soma2(5,5));
console.log(soma3(5,5));
console.log(ola());
console.log(ola1(hello));
*/
// callback

function resultado(msg, a, b, callback){
console.log(msg + callback(a, b))
}
resultado('O resultado é ', 5, 15, soma);

resultado('O resultado é ', 15, 15, function (a, b){
    return a + b;
});

resultado('O resultado é ', 5, 15, (a, b) => a + b);