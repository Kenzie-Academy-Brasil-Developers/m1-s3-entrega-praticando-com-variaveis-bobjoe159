let firstName = 'Pedro'
let secondName = 'Feitosa'
let yearBorn = '1997'
let city = 'Belo Horizonte'

let date = new Date()
let actualAge = date.getFullYear()
let age = actualAge - yearBorn

console.log(
  `Olá, meu nome é ${firstName} ${secondName}, tenho ${age} anos e moro em ${city}.`
)
