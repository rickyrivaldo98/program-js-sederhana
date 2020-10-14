const prompt = require('prompt-sync')();



// let a ="";
function grade(){
  let nilai = parseInt(prompt("Masukkan Nilai: "));
  let a;

  if (nilai >= 90){
    a = "A";
  }else if (nilai >= 75 && nilai <= 89){
    a = "B";
  }else if(nilai >= 60 && nilai <= 74){
    a = "C";
  }else if(nilai >= 50 && nilai <= 59){
    a = "D";
  }else if(nilai < 50){
    a = "Tidak Lulus";
    
  };

  console.log(a);
}

grade();