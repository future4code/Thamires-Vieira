
const tarefas = ["estudar", "lavar roupa", "fazer a tarefa"]
const novaTarefa = process.argv[2]
const novaLista = tarefas.push(novaTarefa)
console.log("nova lista:", tarefas) 