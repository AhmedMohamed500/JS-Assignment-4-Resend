var verifyPassword = document.querySelector("#loginPassword")
var loginButton = document.querySelector(".loginButton")
var verifyEmail = document.querySelector("#loginEmail")

function verifyLogin(){
    if(verifyEmail.value == "" || verifyPassword.value == ""){
        document.querySelector('#hel').innerHTML =`<p class="text-center fw-bold text-danger mt-3">All Inputs Are Required</p>`
    }else if(accountantsBox[i].Email == verifyEmail.value && accountantsBox[i].Password == verifyPassword.value){
        enterAccountsLogin ()
        document.querySelector('#hel').innerHTML =`<p class="text-center fw-bold text-success mt-3">Login Succeed</p>`

    }
}
function enterAccountsLogin (){
    var accountInfoLogin = {
        Email : verifyEmail.value,
        Password : verifyPassword.value
    }
}

loginButton.addEventListener("click",function(){
    verifyLogin()
})

