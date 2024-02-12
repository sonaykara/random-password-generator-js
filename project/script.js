const btnGenerate = document.querySelector(".btn-generate");
const input = document.getElementById("password")
const copy = document.getElementById("copy")
const alertPass = document.getElementById("alert-pass")
const passwordCharacters = document.getElementById("password-characters")



btnGenerate.addEventListener("click", createPassword );
copy.addEventListener("click" , copyPass)

function createPassword() {

    const passwordLength = parseInt(passwordCharacters.value);
    const char = '0123456789abcedfghijklmnoprstuvyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = ""; 

    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random()* char.length)
        password += char[randomNumber]
        
    }
    
    input.value = password
    passwordCharacters.value = ""
}

function copyPass () {
   if(input.value) {
    input.select()
    navigator.clipboard.writeText(input.value)
    input.value = ""
    alertPass.classList.remove("active")
    setTimeout(() => {
        alertPass.classList.add("active")
    }, 1000);
   } else {
    alert("")
   }
}