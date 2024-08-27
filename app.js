function encrypt(text){
    if (text.trim() === ""){
        alert ("Ningún mensaje fue encontrado.");
        return "";
    }
    const spcar = /^[a-z\s]+$/;
    if (!spcar.test(text)) {
        alert ("El texto no puede incluir mayúsculas ni caracteres especiales.");
        return "";
    }
    const reglasEncript ={
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncript = text.split('').map(char=> {
        return reglasEncript [char] || char;
    }) .join('');
    return textoEncript;

}

function decrypt(text){
    if (text.trim() === ""){
        alert ("Porfavor ingrese texto a desencriptar.");
        return "";
    }

const reglasDecript = {
    'enter' : 'e',
    'imes' : 'i',
    'ai' : 'a',
    'ober' : 'o',
    'ufat' : 'u'
};

    let textoDecript = text;
    for(let llave in reglasDecript){
        let regex = new RegExp (llave, 'g');
        textoDecript = textoDecript.replace(regex, reglasDecript[llave]);
    }

    return textoDecript;
}

function encryptText(){
    let inputTexto = document.getElementById('miTextarea').value;
    let resultTextElement = document.getElementById('result__text');
    let noMessageTitle = document.getElementById('noMessageTitle');
    let noMessageText = document.getElementById('noMessageText');
    let copyButton = document.getElementById('copiarBtn');
    let searchImg = document.getElementById('searchImg');

    if (inputTexto.trim() === ""){
        resultTextElement.innerText = "Ningún mensaje fue encontrado.";
        noMessageTitle.classList.remove('hidden');
        noMessageText.classList.remove('hidden');
        copyButton.classList.add('hidden');
        searchImg.classList.remove ('hidden');
    } else {
        let textoEncript = encrypt(inputTexto);
        resultTextElement.innerText =textoEncript;
        resultTextElement.classList.remove('hidden');
        noMessageTitle.classList.add('hidden');
        noMessageText.classList.add('hidden');
        copyButton.classList.remove('hidden');
        searchImg.classList.add('hidden');
     }
}

function decryptText(){
    let inputTexto = document.getElementById('miTextarea').value;
    let resultTextElement = document.getElementById('result__text');
    let noMessageTitle = document.getElementById('noMessageTitle');
    let noMessageText = document.getElementById('noMessageText');
    let copyButton = document.getElementById('copiarBtn');
    let searchImg = document.getElementById('searchImg');

    if(inputTexto.trim () === ""){
        resultTextElement.innerText = "Ningún mensaje fue encontrado.";
        noMessageTitle.classList.remove('hidden');
        noMessageText.classList.remove('hidden');
        copyButton.classList.add('hidden');  
        searchImg.classList.remove ('hidden');  
    } else { 
        let textoDecript = decrypt (inputTexto);
        resultTextElement.innerText = textoDecript;
        resultTextElement.classList.remove('hidden');
        noMessageTitle.classList.add('hidden');
        noMessageText.classList.add('hidden');
        copyButton.classList.remove('hidden');
        searchImg.classList.add('hidden');
    }
}

function copyClipboard() {
    let resultTextElement = document.getElementById('result__text');
    let textCopy = resultTextElement.innerText;
    let tempInput = document.createElement ('textarea');
    tempInput.value = textCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput); 
}

document.getElementById('encriptarBtn').addEventListener('click', function(event) {
    event.preventDefault();
    encryptText();
});

document.getElementById('desencriptarBtn').addEventListener('click', function(event) {
    event.preventDefault();
    decryptText();
});

document.getElementById('copiarBtn').addEventListener('click', function(event){
    event.preventDefault();
    copyClipboard();    
});