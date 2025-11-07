function calculadora() {
    var operacao = prompt("Deseja fazer qual operação?")
    var num1 = parseFloat(prompt("Informe o primeiro número: "))
    var num2 = parseFloat(prompt("Informe o segundo número: "))
    
    if (operacao == 'soma') {
        alert(num1 + num2);
    } else {
        if (operacao == 'subtracao') {
            alert(num1 - num2);
        } else {
            if (operacao == 'multiplicacao') {
                alert(num1 * num2);
            } else {
                if (operacao == 'divisao') {
                    alert(num1 / num2); 
                    } else {
                        alert('Operação Invalida')
                }
            }
        }
    }
}


function calculadora2() {
    var operacao = prompt("Deseja fazer qual operação?")
    var num1 = parseFloat(prompt("Informe o primeiro número: "))
    var num2 = parseFloat(prompt("Informe o segundo número: "))

    switch (operacao) {
        case 'soma':
            alert(num1 + num2);
            break;
        case 'subtracao':
            alert(num1 - num2);
            break;
        case 'multiplicacao':
            alert(num1 * num2);
            break;
        case 'divisao':
            alert(num1 / num2);
            break;
        default:
            alert('Operação Inválida')
            break;
    }
}

    /*CRIANDO VETOR*/
function vetor(){
    var vetorNum = [1,2,3];
    /*
    1. Inicia o contador
    2. Condição de parada
    3. Incremento do contador
    4. Se atentar 'ao (var cont = 0) é referente aos números do vetorNum'
    */
    var soma = 0;
    for(var cont = 0; cont < vetorNum.length; cont++){
        soma += vetorNum[cont];
    }
    alert('some de ' + vetorNum.length + ' elementos: ' + soma);
}

function lerVetor(){
    var vetor = [];
    do {
        var valor = parseInt(prompt("Informe um valor: "));
        vetor.push(valor);    
    } while (valor != -1);


    return vetor;
}

function ultimaPosicaoVetor(){
    var a = lerVetor();

    alert(a[a.length - 2]);
}

function tabuada7(){
    var cont = 0; //Variavel Contadora
    while (cont < 11){
        var multiplicacao = 7 * cont;
        alert("7 x " + cont + ' = ' + multiplicacao);
        cont++;
    }
}

function tabuada(valor){ 
    //Tabuada generica usando DO - WHILE//

    var cont = 0;
    do {
        var multiplicacao = cont * valor;
        alert(valor + ' x ' + cont + ' = ' + multiplicacao);
        cont++;
    }while(cont < 11);
} 

function testeTabuada(){
    tabuada(parseInt(prompt('Informe um valor de 1 a 10:')))
}

function exibirFrutas(){
    var frutas = ['Nabana', 'Çama', 'Avu', 'Mango'];
    for (var  cont = 0; cont < frutas.length; cont++){
        alert(frutas[cont]);
    }
}

function inverteVetor(vetor){
    var vetorInvertido = [];

    for(var cont = vetor.length - 1; cont > -1; cont--){
        vetorInvertido.push(vetor[cont]);
    }

    return vetorInvertido;
}

function testeInverteVetor(){
    var vetor = ["banana","maça","pera"];
    var vetorInvertido = inverteVetor(vetor);
    for(var cont = 0; cont < vetor.length;cont++){
        alert(vetorInvertido[cont]);
    }
}

function testeInverteVetor2(){
    var vetor = ["banana","maça","pera"];
    vetor.reverse();
    for(var cont = 0; cont < vetor.length; cont++){
        alert(vetor[cont]);
    }
}

function alteraValorH1(){
    //var valorTag = document.getElementById("titulo").innerHTML;
    //alert(valorTag);
    document.getElementById("titulo").innerHTML = "Cabeçalho Alterado!";
}

function criarTagH2 (){
    var cabecalho2 = document.createElement("h2");
    cabecalho2.setAttribute("id", "cabecalho2");
    document.getElementsByTagName("body")[0].appendChild(cabecalho2);
    document.getElementById("cabecalho2").innerHTML = "relou :";
}


