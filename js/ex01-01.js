var clientes = {
  1: {
    id: 1,
    nome: "Luis Santos Silveira",
    idade: 18,
  },
  2: {
    id: 2,
    nome: "Ricardo Lopes Alves",
    idade: 30,
  },
  3: {
    id: 3,
    nome: "Gustavo Silva Junior",
    idade: 26,
  },
};

function formatarNome(nome) {
  var partes = nome.split(" ");
  var primeiroNome = partes[0];
  var ultimoSobrenome = partes[partes.length - 1];
  return ultimoSobrenome + ", " + primeiroNome;
}

for (var key in clientes) {
  if (clientes.hasOwnProperty(key)) {
    var nomeFormatado = formatarNome(clientes[key].nome);
    console.log(nomeFormatado);
  }
}
