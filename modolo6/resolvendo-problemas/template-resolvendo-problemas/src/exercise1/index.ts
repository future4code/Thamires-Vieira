/*Verificar se é one edit
Ex:
"banan" é 'one edit' de `"banana"` (remoção de um caracter)
"bananak" é 'one edit' de `"banana"` (adição de um caracter)
"panana" é 'one edit' de `"banana"` (troca de um caracter)
"bananaaa" **não** é 'one edit' de `"banana"` (adição de dois caracteres)

// Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
// Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
// Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
// Nesse caso, varremos as strings contando quantas letras diferentes tem
// Retorna true se a diferença é 1, false caso contrário
*/

const checkOneEdit = (stringA: string, stringB: string): boolean => {
    if (Math.abs(stringB.length - stringA.length) > 1) return false

    if (stringA.length > stringB.length) return stringA.includes(stringB)
    if (stringB.length > stringA.length) return stringB.includes(stringA)
    
    let charsDiffCount = 0
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) charsDiffCount++
    }
    return charsDiffCount === 1
}

checkOneEdit("banana", "bananaaa")