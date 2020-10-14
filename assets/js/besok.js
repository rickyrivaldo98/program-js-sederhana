const prompt = require('prompt-sync')();

let hari = prompt("Masukkan Hari: ");
let x = "";
let jhari = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu","senin"];
let a = jhari.includes(hari,0);

function cekhari(hari){
    if(a !== true){
    x = "false";
    }else{
    x = String(hari);
    };
    return x;
};

function besok(){    
    if(cekhari(hari) == "false"){
        return console.log("Inputan Tidak Termasuk Hari, silahkan mengulangi input")
    }else{
        return console.log("Hari Selanjutnya yaitu: "+jhari[jhari.indexOf(cekhari(hari))+1]);
    }
};

besok();