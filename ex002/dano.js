const personagem1 = prompt("Digite o nome do primeiro personagem: ")
const ataque = parseFloat (prompt("Digite o poder de ataque do pernosagem: "))

const pernosagem2 = prompt("Digite o nome do segundo personagem: ")
let quantidadeDeVida =  parseFloat (prompt("Digite a quantidade de pontos de vida do personagem: "))
const defesa = parseFloat (prompt("Digite o poder de defesa do personagem: "))
const escudo = prompt("O personagem possue escudo? (sim/não)")

let danoCausado = 0


 
if (ataque > defesa && escudo === "não") {
    danoCausado = ataque - defesa
  } else if (ataque > poderDeDefesa && escudo === "sim") {
    danoCausado = (ataque - defesa) / 2
  }
  quantidadeDeVida = danoCausado
  
  alert(personagem1 + " causou " + danoCausado + " pontos de dano em " + pernosagem2) 
alert(
    personagem1 + "\nPoder de ataque: " + ataque + "\n\n" +
    pernosagem2 + "\nPontos de vida: " + quantidadeDeVida +
    "\nPoder de defesa: " + defesa + "\nPossui escudo: " + escudo
)