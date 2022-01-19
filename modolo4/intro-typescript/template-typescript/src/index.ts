// Exercício 1

function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(2, 4, 4))

// Exercício 2

// function imprimeTresCoresFavoritas():void {
//     const cor1:string = process.argv[2]
//     const cor2:string = process.argv[3]
//     const cor3:string = process.argv[4]
//     console.log([cor1, cor2, cor3])
//  }
// imprimeTresCoresFavoritas()

// Exercício 3

function checaAnoBissexto(ano:number):boolean {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
console.log(checaAnoBissexto(2022))

// Exercício 4

function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero:number;
    let menorNumero:number;

    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }

    const diferenca = maiorNumero - menorNumero;

    return diferenca 
  }

  console.log(comparaDoisNumeros(20,8))

  // Exercício 5