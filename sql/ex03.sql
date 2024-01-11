SELECT
  A.nome AS Aluno,
  R.nome AS Responsavel,
  P.parentesco
FROM
  Aluno A
  JOIN Parentesco P ON A.id = P.idAluno
  JOIN Responsavel R ON P.idResponsavel = R.id;
