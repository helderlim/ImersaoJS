var valorEmDolarTexto = prompt("Qual o valor em dolar que voce quer converter? ")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valoremRealDecimal = valorEmReal.toFixed(2)
alert(valoremRealDecimal)
