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
        document.getElementById("output1").innerText = "Inputan Tidak Termasuk Hari, silahkan mengulangi input"
    }else{
        // console.log("Hari Selanjutnya yaitu: "+jhari[jhari.indexOf(cekhari(hari))+1]);
        document.getElementById("output1").innerText = "Hari Selanjutnya yaitu: " + jhari[jhari.indexOf(cekhari())+1];
    }
};