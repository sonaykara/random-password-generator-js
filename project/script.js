const btnGenerate = document.querySelector(".btn-generate");
const input = document.getElementById("pass")
const copy = document.getElementById("copy")
const alertPass = document.getElementById("alert-pass")



btnGenerate.addEventListener("click", createPassword );
copy.addEventListener("click" , copyPass)

function createPassword() {
    const passworLength = 14;
    const char = '0123456789abcedfghijklmnoprstuvyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = ""; 

    for (let index = 0; index < passworLength; index++) {
        const randomNumber = Math.floor(Math.random()* char.length)
        password += char[randomNumber]
        
    }
    
    input.value = password
    
}

function copyPass () {
   if(input.value) {
    input.select()
    navigator.clipboard.writeText(input.value)
    alertPass.classList.remove("active")
    setTimeout(() => {
        alertPass.classList.add("active")
    }, 1000);
   } else {
    alert("")
   }
}