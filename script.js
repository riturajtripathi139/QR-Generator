let imgbox = document.querySelector(".imgbox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");

function generateQR(){
    if(qrText.value.length > 0){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgbox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}

document.querySelector("#generate").addEventListener("click", generateQR)