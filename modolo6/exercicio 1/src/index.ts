/*
### Exercício do dia - Número Faltante

Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. Você sabe que, nesse array, está faltando apenas **um** número dentro desse intervalo. A sua função deve retornar o número faltante. 
Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função!

- Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
- Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

Além disso, faça, ao menos, **dois testes automatizados** da sua função.

*/

export const findANumber = (array: number[]): number => {
    const expectedSum = 5050;
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return expectedSum - sum;
};

/*
### Exercício do dia - **indexOf**

O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: `.indexOf`. 
Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), 
que receba uma string `source` e um caracter que se deseja encontrar nela `query` e devolva o index em que 
esse caracter aparece pela primeira vez.

*/

export const indexOf = (
    source: string,
    query: string,
    mainIndex: number = 0,
    sourceIndex: number = 0,
    queryIndex: number = 0
): number => {
    if (sourceIndex > source.length) {
        return -1;
    }

    if (queryIndex >= query.length) {
        return mainIndex;
    }

    if (source[sourceIndex] === query[queryIndex]) {
        return indexOf(source, query, mainIndex, sourceIndex + 1, queryIndex + 1);
    } else {
        return indexOf(source, query, mainIndex + 1, mainIndex + 1, 0);
    }
};