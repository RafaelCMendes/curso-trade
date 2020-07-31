// var valor = prompt('digite um numero');
// var numero  = parseInt(numero);

// if(isNaN(numero)){
//     alert('Você não digitou um numero - ' + valor);
// } else if(numero%2 != 0){
//     alert('Impar');
// }else{
//     alert('Par');
// }

// Resolver esse problema e explicar 
// aonde esta o bug e porque estava ocorrendo. ;)

// var txtValor1 = prompt('digite o número que será multiplicado');
// var numero1 = parseInt(txtValor1);

// var txtValor2 = prompt('digite até quanto deseja multiplicar');
// var numero2 = parseInt(txtValor2);

// for (var m = 0; m <= numero2; m++) {
//     var resultado = numero1 * m;
//     document.write(numero1 + ' x ' + m + ' = ' + resultado + '<br>');
// }

var nome = 10;

function teste(){
    var nome = 9;
    document.write(nome + '<br>');
    document.write(this.nome + '<br>');
}

if(true){
    let  nome = 9;
    document.write(nome + '<br>');
    document.write(this.nome + '<br>');  
}

document.write(nome + '<br>');  






