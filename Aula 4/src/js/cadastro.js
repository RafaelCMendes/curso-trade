

let btnEntrar = document.getElementById('btn-confirmar');
let edtEmail = document.getElementById('email');
let edtSenha = document.getElementById('senha');

btnEntrar.addEventListener("click", function () {
    let email = edtEmail.value.trim();
    let senha = edtSenha.value.trim();
    
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(function(result) {
        alert("Seu id é: " + result.user.uid);

       
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

      });
});