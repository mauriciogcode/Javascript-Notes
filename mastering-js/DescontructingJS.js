//nextlecture  js 095 Hoisting and TDZ in Practice
/// scope practice
function calcAge(birthYear){
  const age = 2037 - birthYear

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`
    console.log(output)


if (birthYear >= 1981 && birthYear <= 1996){
  var millenial = true 
  const str = `Oh you are a millenial, ${firstName}`

  console.log(str)
}
// console.(str)
console.log(millenial)
  }
  printAge()
}

const firstName = 'Jonas';
calcAge(1991)

///  