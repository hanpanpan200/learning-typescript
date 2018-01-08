function greeter(person: string) {
  return `type definition: Hello ${person}`
}

let user = 'Panpan Han' // Argument of type number is not assignable to parameter of type string for [1,2,3,4]

document.getElementById('greeter').innerHTML = greeter(user);
