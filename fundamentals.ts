// interface
// tell typescript what a shape of object is
interface Person {
  name: string
  teacher: boolean
  // sometimes its there its not required
  hungry?: boolean
}

let person: Person = {
  name: "Harry",
  teacher: true
}
let person2: Person = {
  name: "Harry",
  teacher: true,
  hungry: false
}



// strings
let str: string = 'hello to you'
let str2 = null

// numbers
let age: number = 231

// booleans
let hungry: boolean = true

// null
let notHere: null = null

// undefined
let neverHere: undefined = undefined

//Symbol
// let symb: Symbol = Symbol('sweet')

// object
let obj: object = {
  name: "Harry"
}