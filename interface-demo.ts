interface Person {
  firstName: string;
  lastName: string;
}

function sayHello(person: Person) {
  return `interface: Hello ${person.firstName} ${person.lastName}`;
}

let userPanpan = { firstName: 'Panpan', lastName: 'Han' };

document.getElementById('interface').innerHTML = sayHello(userPanpan);