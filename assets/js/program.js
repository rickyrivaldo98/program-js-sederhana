const jhari = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu","senin"];
function cekhari(){
    let hari = document.getElementById("input1").value;
    let x = "";
    let a = jhari.includes(hari,0);
    // console.log(hari);
    if(a !== true){
    x = "false";
    }else{
    x = String(hari);
    };
    return x;
};

function besok(){    
    if(cekhari() == "false"){
        // console.log("Inputan Tidak Termasuk Hari, silahkan mengulangi input")
        document.getElementById("output1").innerText = "This input not include in day in week, please re-enter the data"
    }else{
        // console.log("Hari Selanjutnya yaitu: "+jhari[jhari.indexOf(cekhari(hari))+1]);
        document.getElementById("output1").innerText = "Next day is: " + jhari[jhari.indexOf(cekhari())+1];
    }
};

function grade(){
    let nilai = parseInt(document.getElementById("input2").value);
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
  
    // console.log(a);
    document.getElementById("output2").innerText = "Your Grade: " + a;
  };

  function printGenap(){
    let a = [];
    let i = parseInt(document.getElementById("input3").value);
    let b = 0;
    
    while(b <= i ){
        if(b%2 == 0){
        a.push(b);
        b++;
        }else{
            b++;
        };
    };
    
    // console.log(a);
    document.getElementById("output3").innerText = "Here your even number: " + a;

    };

    function printGanjil(){
        let a = [];
        let i = parseInt(document.getElementById("input4").value);
        let b = 0;
        
        while(b <= i ){
            if(b%2 == 1){
            a.push(b);
            b++;
            }else{
                b++;
            };
        };
        
        // console.log(a);
        document.getElementById("output4").innerText = "Here your odd number: " + a;

        };