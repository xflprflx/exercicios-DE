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