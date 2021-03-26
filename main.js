
var primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
var segundoValor = parseInt(prompt('Digite o segundo valor: ')) 



var operacao = prompt("Digite 1- divisão, 2- multiplicação, 3- somar, 4- subtrair: ")

if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + ' / ' + segundoValor + ' = ' + resultado + "</h2>")
}else if( operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + ' * ' + segundoValor + ' = ' + resultado + "</h2>")
}else if( operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + ' + ' + segundoValor + ' = ' + resultado + "</h2>")
}else if( operacao == 4){
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + ' - ' + segundoValor + ' = ' + resultado + "</h2>")
}else{
    document.write('opção invalida')
}


