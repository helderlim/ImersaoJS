var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3


while (tentativas > 0){
    var chute = parseInt(prompt("Digte um numero entre 0 e 10 "))

    if (numeroSecreto == chute){
        console.log('acertou')
        break;
    }else if (chute > numeroSecreto){
        console.log("O numero secreto é menor ");
        tentativas--;
    }else if (chute < numeroSecreto){
        console.log("o numero secreto é maior ");
        tentativas--;
    }
    
}

if( chute != numeroSecreto){
    console.log("Suas tentativas acabaram o numero secreto era: " + numeroSecreto);
}