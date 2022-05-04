var botonDesencriptar = document.querySelector("#desencript");

botonDesencriptar.addEventListener("click", function(){
    var desencrypt = document.querySelector("#input_text_desencrypt").value;
    console.log(desencrypt)
    
    textDesencrypt = desencrypt
    textDesencrypt = textDesencrypt.replace("ai", "a");
    textDesencrypt = textDesencrypt.replace("enter", "e");
    textDesencrypt = textDesencrypt.replace("imes", "i");
    textDesencrypt = textDesencrypt.replace("ober", "o");
    textDesencrypt = textDesencrypt.replace("ufat", "u");
    
    console.log(textDesencrypt)
    document.getElementById("input_text_encrypt").value = textDesencrypt;

} )