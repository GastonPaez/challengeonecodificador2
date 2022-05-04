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
    desencrypt.textContent = listText;   
    
    var hideH1 = document.querySelector("#text_h1");    
    if (desencrypt.value.length > 0){
        hideH1.classList.add("invisible");        
    }
    else{
        hideH1.classList.remove("invisible");
    }
    // Limpiar text area
    document.getElementById("input_text_encrypt").value = ""
} )