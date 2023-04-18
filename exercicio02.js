/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

const students = [
  {
    name: "Danielle",
    n1: 5,
    n2: 7,
  },
  {
    name: "Marcella",
    n1: 10,
    n2: 8,
  },
  {
    name: "Nathalia",
    n1: 9,
    n2: 9,
  },
  {
    name: "Michael",
    n1: 3,
    n2: 5,
  },
];

function media(n1, n2) {
  return ((n1 + n2) / 2).toFixed(1);
}

function printStudentMedia(student) {
  if (media(student.n1, student.n2) >= 7) {
    return `
       A média do(a) aluno(a) ${student.name} é:
       ${media(student.n1, student.n2)} \n 
       Parabéns, ${student.name}! Você foi aprovado(a).
     `;
  } else {
    return `
       A média do(a) aluno(a) ${student.name} é:
       ${media(student.n1, student.n2)} \n 
       Não foi dessa vez, ${student.name}! Tente novamente.
      `;
  }
}

for (let student of students) {
  let mediamessage = printStudentMedia(student);
  alert(mediamessage);
}
