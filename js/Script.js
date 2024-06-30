
var signupButton = document.querySelector(".signupButton")
var userName = document.querySelector("#userName")
var newEmail = document.querySelector("#first");
var newPassword = document.querySelector("#second")
var accountantsBox = []

if(localStorage.getItem("accountantsDetails") != null){
    accountantsBox = JSON.parse(localStorage.getItem("accountantsDetails"))
}

function enterAccounts(){
    var accountInfo = {
        userName : userName.value,
        Email : newEmail.value,
        Password : newPassword.value
    }
    accountantsBox.push(accountInfo)
    localStorage.setItem('accountantsDetails',JSON.stringify(accountantsBox))
    location.href = 'index.html'
}


function verify(){
    if(userName.value == "" || newEmail.value == "" || newPassword.value == "" ){
        document.querySelector('#helloWorld').innerHTML =`<p class="text-center fw-bold text-danger mt-3">All Inputs Are Required</p>`

    } else{
        enterAccounts()
        document.querySelector('#helloWorld').innerHTML =`<p class="text-center fw-bold text-success mt-3">Success</p>`

    }
}

function verifyEntryData(){
    if(accountantsBox[i].Email == newEmail.value){
        document.querySelector('#helloWorld').innerHTML =`<p class="text-center fw-bold text-danger mt-3">Email Already Exist</p>`

    }
}
signupButton.addEventListener("click",function(){
    verify()
    verifyEntryData()
})




