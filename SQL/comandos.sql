-- database
SELECT * FROM aluno WHERE matricula = 1

SELECT nome, materia, cpf FROM professor

SELECT * FROM aulas

SELECT * FROM aluno WHERE nome like 'j%'

SELECT matricula, cpf FROM aluno WHERE nome like '%G%'

SELECT * FROM aluno WHERE cpf = 45678945645

SELECT * FROM aluno WHERE nome like 'Jakeliny Gracielly'

SELECT * FROM aluno WHERE responsavel like 'Josefina Gracielly'

SELECT * FROM aluno WHERE responsavel like 'Josefina%'

SELECT * FROM aluno WHERE matricula > 2

SELECT * FROM aluno WHERE matricula < 2

SELECT * FROM aluno WHERE matricula >= 2

SELECT * FROM aluno WHERE matricula <= 2

SELECT * FROM aluno WHERE matricula <> 1

SELECT * FROM aluno WHERE matricula != 3

SELECT * FROM aluno WHERE matricula = 1 + 1

SELECT * FROM aluno WHERE matricula = 3 - 1

SELECT * FROM aluno WHERE matricula = 2 * 1

SELECT * FROM aluno WHERE matricula = 2 / 1

SELECT * FROM aluno WHERE matricula = 4 % 3 

SELECT * FROM aluno WHERE matricula = 2 / 1

SELECT * FROM aluno WHERE nome like 'j%' AND matricula < 2

SELECT * FROM aluno WHERE matricula > 1 OR nome like 'j%'

-- unindo_tabelas

SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 and 7

SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 and 7

SELECT * FROM funcionarios WHERE id_departamento IN (1, 2, 5)

SELECT * FROM funcionarios WHERE id_departamento NOT IN (1, 2, 5)

SELECT * FROM funcionarios WHERE id_departamento IS NULL

SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL

-- database

INSERT INTO aluno (nome, cpf, responsavel) VALUES ('Maria Luiza', 45678912345, 'Wantuil Soares')

UPDATE aluno SET nome='Mariano Soares', responsavel='Marcio Soares' WHERE matricula = 2

UPDATE aluno SET nome='Mariano Garcia', responsavel='Marcio Garcia', cpf = 12345678985 WHERE matricula = 2

DELETE FROM aluno WHERE matricula = 3