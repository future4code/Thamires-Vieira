//Exercício 1
// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
//R: É o método padrão para criar uma instância de classe. Pode receber parâmetros, que devem ser passados no
//momento de criar a instância. 

//>> dentro da classe - método
//  constructor (nome:string) {
//     this.nome = nome
//      }
//>>intaciar uma classe
// const novaInstancia = new Instancia("nome2")

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
//(dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` 
//foi impressa no terminal?*
//R: const pessoa = new UserAccount("40692517856", "Thamires", 29)

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
//R: Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this)
// public getCpf(): string {
// 	return this.cpf
// }


//Exercício 2
//Crie uma instância dessa classe e adicione à instância já criada de UserAccount 
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
}

const transaction1 = new Transaction("14/02/2022", 55, "pagamento conta de luz")

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    insertTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }
}

const pessoa = new UserAccount("406.925.178-56", "Thamires", 29)



//Exercício 3
//Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. 
//Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
 