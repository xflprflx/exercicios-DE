var clientes = [
    {
      'id': 1,
      'nome': 'Luis Santos Silveira',
      'idade': 18
    },
    {
      'id': 2,
      'nome': 'Ricardo Lopes Alves',
      'idade': 30
    },
    {
      'id': 3,
      'nome': 'Gustavo Silva Junior',
      'idade': 26
    }
  ];
  
  function formatarNome(nome) {
    var partes = nome.split(' ');
    var primeiroNome = partes[0];
    var ultimoSobrenome = partes[partes.length - 1];
    return ultimoSobrenome + ', ' + primeiroNome;
  }
  
  for (var i = 0; i < clientes.length; i++) {
    var nomeFormatado = formatarNome(clientes[i].nome);
    console.log(nomeFormatado);
  }