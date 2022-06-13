alert('Sistema iniciado.')

// let firstName = 'Pedro'
// let secondName = 'Feitosa'
// let yearBorn = '1997'
// let city = 'Belo Horizonte'

// Recebendo as varíaveis

let firstName = prompt('Digite seu primeiro nome')
let secondName = prompt('Digite seu sobrenome')
let yearBorn = prompt('Digite seu ano de nascimento')
let city = prompt('Digite sua cidade')

let date = new Date()
let actualAge = date.getFullYear()
let age = actualAge - yearBorn

// Imprimindo as varíaveis em alert e console

alert(
  `Meu nome é ${firstName} ${secondName}, tenho ${age} anos e moro em ${city}.`
)

console.log(
  `Meu nome é ${firstName} ${secondName}, tenho ${age} anos e moro em ${city}.`
)
