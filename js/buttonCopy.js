// Funcion para boton web dimension pc
function copy() {
    let copyText = document.querySelector("#input_text_desencrypt");
    copyText.select();
    document.execCommand("copy");    
  }
  
  document.querySelector("#copy").addEventListener("click", copy);

 