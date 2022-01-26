// usando a notação literal 
const obj1 = {}
console.log(obj1)

//Objeto em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto ('Caneca', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())


//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalatio(){
            return (salarioBase /30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario ('Joao', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalatio(), f2.getSalatio())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função que retorna um objeto com json
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)