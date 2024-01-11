## Exercício 01 [JS]
```
var clientes = {
    {
    ‘id’: 1,
    ‘nome’: ‘Luis Santos Silveira’,
    ‘idade’: 18
    },
    {
    ‘id’: 2,
    ‘nome’: ‘Ricardo Lopes Alves,
    ‘idade’: 30
    },
    {
    ‘id’: 3,
    ‘nome’: ‘Gustavo Silva Junior’,
    ‘idade’: 26
    }
};
```

A disposição dos clientes acima está incorreta.
Imagino que a intenção era que a variável clientes fosse um array.
De toda forma, o exercício foi resolvido considerando 2 possibilidades: 
#### Com array (https://github.com/xflprflx/exercicios-DE/blob/main/js/ex01-01.js)

```
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
```

#### Adicionando uma chave para cada cliente (https://github.com/xflprflx/exercicios-DE/blob/main/js/ex01-02.js)
```
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
```

## Exercício 02 [JS]
```
var numero = "5(1)9-876-543-21";

var numerosApenas = numero.replace(/\D/g, '');

var numeroFormatado = `(${numerosApenas.slice(0, 2)})_${numerosApenas[2]}_${numerosApenas.slice(3, 7)}-${numerosApenas.slice(7)}`;

console.log(numeroFormatado);
```

## Exercício 03 [JS]
```
A função é: c
A função é: d
```

## Exercício 04 [JS]
Há um ```return``` antes do comando ```alertUser('b');```.
Em outras palavras o comando ```alertUser('b');``` nunca será executado não havendo necessidade de o mesmo existir.

## Exercício 01 [SQL]
```
INSERT INTO Aluno (id, nome) VALUES
(1, 'Lucas');

INSERT INTO Responsavel (id, nome) VALUES
(1, 'Pablo'),
(2, 'Brenda');

INSERT INTO Parentesco (id_responsavel, id_aluno, parentesco) VALUES
(1, 1, 'Pai'),
(2, 1, 'Mãe');
```

## Exercício 02 [SQL]
```
SELECT
    aluno.id AS aluno_id,
    aluno.nome AS aluno_nome,
    parentesco1.id_responsavel AS responsavel1_id,
    parentesco1.parentesco AS responsavel1_parentesco,
    parentesco2.id_responsavel AS responsavel2_id,
    parentesco2.parentesco AS responsavel2_parentesco
FROM
    aluno
INNER JOIN parentesco AS parentesco1
    ON parentesco1.id_aluno = aluno.id
INNER JOIN parentesco AS parentesco2
    ON parentesco2.id_aluno = aluno.id
ORDER BY
    aluno.id
LIMIT
    2;
```

## Exercício 03 [SQL]
```
SELECT
  A.nome AS Aluno,
  R.nome AS Responsavel,
  P.parentesco
FROM
  Aluno A
  JOIN Parentesco P ON A.id = P.idAluno
  JOIN Responsavel R ON P.idResponsavel = R.id;
```


