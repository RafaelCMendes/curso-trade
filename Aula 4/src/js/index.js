

// function Pessoa() {
//     var nome;

//     this.getNome = function () {
//         return nome;
//     };

//     this.setNome = function (value) {
//         nome = value;
//     };
// }

// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }
// }


// let teste = [];

// teste.push(new Hero('Lejon', 2,'123'));
// teste.push(new Hero('Lejon', 2,'123'));

// console.log(teste[0].nome);



let edtEmail = document.getElementById('email');
let edtSenha = document.getElementById('senha');
let btnEntrar = document.getElementById('btn-entrar');

let userLogin = 'Rafael';
let userSenha = '123';

btnEntrar.addEventListener("click", function () {
    let email = edtEmail.value.trim();
    let senha = edtSenha.value.trim();

    if (!email || !senha) {
        alert("Login ou senha vazio!");

    } else {

        
            console.log('logado');

            firebase.auth().signInWithEmailAndPassword(email, senha)
              .then(function(result) {
                alert("Seu id é: " + result.user.uid);
               
                if (firebase.auth().currentUser !== null) 
                console.log("user id: " + firebase.auth().currentUser.uid);
          

              }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);

              });

              
 
    }
});


