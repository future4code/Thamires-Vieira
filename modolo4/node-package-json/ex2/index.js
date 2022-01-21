const operacao = process.argv[2]


const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

if(operacao && numero1 && numero2){
    switch (operacao) {
        case "soma":
            return console.log( `Resposta: ${numero1 + numero2}`);
        case "subtracao": 
            return console.log(`Resposta: ${numero1 - numero2}`);
        case "multiplicacao":
            return console.log(`Resposta: ${numero1 * numero2}`);
        case "divisao":
            return console.log (`Resposta: ${numero1 / numero2}`);
        default:
            return console.log("Digite : soma, subtracao, mutiplicacao ou divisao.")
    }
}else{
    console.log("Informe a operação seguido de dois números")
}