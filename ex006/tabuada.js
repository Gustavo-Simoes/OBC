const numero = parseFloat(prompt("Forneça uma numero de 1 a 20: "));

let conta = "";

for (indice = 1; indice <= 20; indice++)
  conta += " -> " + numero + " x " + indice + " = " + numero * indice + "\n";

alert("O resultado da tabuada do " + numero + conta)