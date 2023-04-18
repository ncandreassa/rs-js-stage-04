/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; 
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let firstNumber = prompt("Digite o primeiro número");
let secondNumber = prompt("Digite o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("A Soma dos dois números é: " + sum);
alert("A Subtração dos dois números é: " + sub);
alert("A Multiplicação dos dois números é: " + multi);
alert("A Divisão dos dois números é: " + div);
alert("O Resto da divisão dos dois números é: " + restDiv);

if (sum % 2 === 0) {
  alert("A Soma dos dois números é um número par!");
} else {
  alert("A Soma dos dois números é um número ímpar!");
}

if (firstNumber === secondNumber) {
  alert("Os números inseridos são iguais!");
} else {
  alert("Os números inseridos são diferentes!");
}
