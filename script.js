var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDesencriptar = document.querySelector(".btn-desencriptar");
var penguim = document.querySelector(".container_penguim");
var containerTexto = document.querySelector(".container_texto");
var resultado = document.querySelector(".texto_resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarFrente();
    var caixaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(caixaTexto);
}

function desencriptar(){
    ocultarFrente();
    var caixaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(caixaTexto);
}

function recuperarTexto(){
    var caixaTexto = document.querySelector(".caixa_texto");
    return caixaTexto.value;
}

function ocultarFrente(){
    penguim.classList.add("ocultar");
    containerTexto.classList.add("ocultar");
}

function encriptarTexto(menssagem){
    var texto= menssagem;
    var textoFinal = "";

    for(var i=0;i<texto.length;i++){
        if(texto[i]=="a"){
            textoFinal= textoFinal + "ai";
        }else if(texto[i]=="e"){
            textoFinal= textoFinal + "enter";
        }else if(texto[i]=="i"){
            textoFinal= textoFinal + "imes";
        }else if(texto[i]=="o"){
            textoFinal= textoFinal + "ober";
        }else if(texto[i]=="u"){
            textoFinal= textoFinal + "ufat";
        }else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(menssagem){
    var texto = menssagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("teste"); 
});