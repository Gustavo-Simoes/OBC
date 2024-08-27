const PrimeirNumero = prompt("Digite um numero qualquer:")
const SegundoNumero = prompt("Digite um numero qualquer")

const x = parseFloat(PrimeirNumero)
const y = parseFloat(SegundoNumero)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert("Resultados :\n" +
    "n\Soma :" + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )
