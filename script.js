function qtdVogais(string) {
    var vogais = string.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0; // retorna o número de vogais presentes na string, senão, retorna zero.
  }
  
  var entrada = document.getElementById("entrada");
  var saida = document.getElementById("saida");
  
  entrada.addEventListener("input", function() {
    var texto = entrada.value;
    var qtd = qtdVogais(texto);
    saida.value = qtd;
  });
  