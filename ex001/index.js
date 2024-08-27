const primeiroNome = prompt("Digite o primeiro nome do recruta:")

const sobrenome = prompt("Digite o sobrenome do recruta:")

const campoDeEstudo = prompt("Digite a area de estudo do recruta:")

const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta:")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2022 - anoDeNascimento)
  )