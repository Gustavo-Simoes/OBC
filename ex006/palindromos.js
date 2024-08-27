const palavra = prompt("Escreva uma palavra qualquer e verifique se ela é Palíndromos: ")

const palavraInvertida = palavra.split('').reverse().join('');


if ( palavra === palavraInvertida) { 
    alert("A palavra é um Palíndromo:  " + palavra)
} else if ( palavra != palavraInvertida) {
  alert("A palavra não é um palindromo.  \nPalavra original " + palavra + "\nPalavra invertida: " + palavraInvertida)
    
}