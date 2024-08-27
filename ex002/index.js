const veiculo1 = prompt("Digite o nome do veiculo 1: ")
const velocidade1 = prompt("Digite a velocidade do veiculo 1")

const veiculo2 = prompt("Digite o nome do veiculo 2: ")
const velocidade2 = prompt("Digite a velocidade do veiculo 2")

const x = parseFloat(velocidade1)
const y = parseFloat(velocidade2)

if (velocidade1 > velocidade2) {
    alert(veiculo1 + "é mais rapido do que" + veiculo2)
} else if(velocidade2 > velocidade1){
    alert( veiculo1 + "é mais rapido do que" + veiculo2  )
} else {(velocidade1 === velocidade2)
    alert(veiculo1 + veiculo2 +  "possuem velocidades iguais.")}