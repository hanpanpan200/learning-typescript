class Student {
  fullName: string;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}

function helloStudent(student: Student) {
  return `class: Hello ${student.fullName}`;
}

let student = new Student('Panpan', '', 'Han');

document.getElementById('class').innerHTML = helloStudent(student);