const prompt = require('prompt-sync')();

function printGanjil(){
let a = [];
let i = parseInt(prompt("Masukkan Nilai: "));
let b = 0;

while(b <= i ){
    if(b%2 == 1){
    a.push(b);
    b++;
    }else{
        b++;
    };
};

console.log(a);
};

printGanjil();