/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const textArea = document.querySelector(".user__input");
//const mensajeEncontrado = document.querySelector(".encrypted__unencrypted__text");
const mensajeEncontrado = document.querySelector(".copy");
const imgMuneco = document.querySelector(".img__muneco");
const noMessageH4 = document.querySelector(".h4");
const noMessageH5 = document.querySelector(".h5");
const copy = document.getElementById("button__copiar");
const botonEncriptar = document.querySelector(".button__encriptar");
const botonDesencriptar = document.querySelector(".button__desencriptar");
const textoCopiado = document.querySelector(".copy").value;
const messageWrapper = document.querySelector(".no__message__wrapper");

function encriptar(stringEncriptado){
    if (stringEncriptado.trim() === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return ""; 
    }
let miMatriz=[["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
stringEncriptado = stringEncriptado.toLowerCase();
for(let i = 0; i < miMatriz.length; i++){
if(stringEncriptado.includes(miMatriz[i][0])){
    stringEncriptado=stringEncriptado.replaceAll(miMatriz[i][0], miMatriz[i][1]);
};
};
return stringEncriptado;

 };

function btnEncriptar(){
   
    const textoEncriptado =encriptar(textArea.value);
    mensajeEncontrado.textContent= textoEncriptado;
    textArea.value ="";
    imgMuneco.style.display = "none";
    noMessageH4.style.display="none";
    noMessageH5.style.display="none";
    messageWrapper.style.display="none";
    copy.style.display="flex";
    //copy.classList.add("visible");
    
};




    function desencriptar(stringDesencriptado) {

        if (stringDesencriptado.trim() === "") {
            alert("Por favor, ingresa un texto para desencriptar.");
            return ""; 
        }
        let miMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptado = stringDesencriptado.toLowerCase();
        for (let i = 0; i < miMatriz.length; i++) {
            if (stringDesencriptado.includes(miMatriz[i][1])) { // Aquí cambia de [i][0] a [i][1]
                stringDesencriptado = stringDesencriptado.replaceAll(miMatriz[i][1], miMatriz[i][0]);
            }
        }
        return stringDesencriptado;
    }
    
    function btnDesencriptar() {
        const textoDesencriptado = desencriptar(textArea.value);
        mensajeEncontrado.textContent = textoDesencriptado;
        textArea.value = "";
    imgMuneco.style.display = "none";
    noMessageH4.style.display="none";
    noMessageH5.style.display="none";
    copy.style.display="flex";
    //copy.classList.add("visible")
    }
    

    copy.addEventListener("click", () => {
        const textoCopiado = mensajeEncontrado.textContent;
        navigator.clipboard.writeText(textoCopiado)
            .then(() => {
                //alert('Texto copiado al portapapeles');
                textArea.value = textoCopiado;
                botonDesencriptar.disabled = false;
                // copy.style.display="none";
                copy.classList.remove("visible");
            })
            .catch(err => {
                alert('Error al copiar el texto: ', err);
            });
    });
    


  



  
