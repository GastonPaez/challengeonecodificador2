var botonEncriptar = document.querySelector("#encrypt")

botonEncriptar.addEventListener("click", function(){
    console.log("presiono el boton encriptar");
    var textArea = document.getElementById("input_text_encrypt").value;
    console.log(textArea);
    listText = "";
    
    for(var i in textArea){     
        if (textArea[i] == "a"){
            listText = listText + "ai";
        }         
        else if (textArea[i] == "e"){
            listText = listText + "enter";
        }         
        else if (textArea[i] == "i"){
            listText = listText + "imes";
        }         
        else if (textArea[i] == "o"){
            listText = listText + "ober";
        }         
        else if (textArea[i] == "e"){
            listText = listText + "ufat";
        }
        else{
            listText = listText + textArea[i]
        }    
        
    }
    
    
    var desencrypt = document.querySelector("#input_text_desencrypt");
    var desencrypt_responsive = document.querySelector("#output_p")
    desencrypt.textContent = listText;   
    desencrypt_responsive.textContent = listText; 
    
    var hideH1 = document.querySelector("#text_h1");    
    var hideH1Responsive = document.querySelector("#output_h1");
    var botonCopy = document.querySelector("#copy");
    var botonCopy2 = document.querySelector("#copy2");
    var hidePicture =document.querySelector(".muñeco")
    if (desencrypt.value.length > 0){
        hideH1.classList.add("invisible");  
        hideH1Responsive.classList.add("invisible");
        botonCopy.classList.remove("copy_off");
        botonCopy.classList.add("copy_on");
        botonCopy2.classList.remove("copy_off");
        botonCopy2.classList.add("copy_on2");
        hidePicture.classList.add("invisible");  
    }
    else{
        hideH1.classList.remove("invisible");
        hideH1Responsive.classList.remove("invisible");
        botonCopy.classList.remove("copy_on");
        botonCopy.classList.add("copy_off");
        botonCopy2.classList.remove("copy_on");
        botonCopy2.classList.add("copy_off");
        hidePicture.classList.add("invisible");  
    }
    // Limpiar text area
    document.getElementById("input_text_encrypt").value = ""
} )