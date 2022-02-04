Exercício 1

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
DATE - informa valores de data YYYY/MM/DD
VARCHAR - informa valor de string de no máx 255 caracteres
PRIMARY KEY - restrição, informa uma chave primária, valor único que não pode repetir
NOT NULL - informa que não pode ser um valor nulo.
*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
SHOW DATABASES - mostra a descrição do que tem na tabela
SHOW TABLES - mostra a tabela
*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
Mostra a tabela completa com as informações de tipo, restriçoes e valores.

Exercício 2
*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

*b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
INSERT INTO Ator (id, nome, salário, data_nascimento, sexo)
   VALORES(
     "002",
     "Fernanda Montenegro",
     50000000,
     "1940-09-23",
     "fêmea"
   ) Código de erro: 1062. Entrada duplicada '002' para chave 'PRIMARY' 0,203 seg
Erro de entrada duplicada, pelo valor da chave primária que não pode ser igual.


INSERT INTO Ator (id, salário, data_nascimento, sexo)
  VALORES(
    "004",
    400000,
    "1949-04-18",
    "macho"
  ) Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,140 seg

INSERT INTO Ator (id, nome, salário, data_nascimento, sexo)
  VALORES(
    "005",
    "Juliana Paes",
    719333.33,
    26-03-1979,
    "fêmea"
  ) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 0,250 seg

Exercicio 3

a) *Escreva uma query que retorne todas as informações das atrizes*
SELECT * from Actor WHERE gender = "female"
b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
SELECT salary from Actor WHERE name = "Tony Ramos" 
c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
SELECT * from Actor WHERE gender = "invalid"
Apareceu NULL para todas as informações da tabela.
d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
SELECT id, name, salary from Actor WHERE salary < 500000;
e) *Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*
O nome da coluna foi passado diferente, ao invés de name, estava nome
Coluna desconhecida 'nome' na 'lista de campos'

Exercicio 4 

a) *Explique com as suas palavras a query acima*
Mostra um ator, cujo nome tenha a letra A ou J e o salário maior do que R$300.000
b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

Exercicio 5
CREATE TABLE Filme (
id INT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
sinopse TEXT,
data_de_lançamento DATE NOT NULL,
avaliação INT
);

INSERT INTO Filme (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
	001,
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-06-01",
    7
);

#DROP TABLE Filme;

INSERT INTO Filme (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
	004,
    "Cidade de Deus",
    "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento",
    "2002-08-30",
    10
);

Exercicio 6
Escreva uma query que:

*a) Retorne o id, título e avaliação a partir de um id específico;*
SELECT id, nome, avaliação FROM Filme WHERE id = "004";

*b) Retorne um filme a partir de um nome específico;*
SELECT * FROM Filme WHERE nome = "Se Eu Fosse Você";
*c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`*
SELECT id, nome, avaliação FROM Filme WHERE avaliação > 7;

Exercicio 7
Escreva uma query que:

*a) Retorna um filme cujo título contenha a palavra `vida`*
SELECT * FROM Filme
WHERE nome LIKE "%vida%";
*b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.*
SELECT * FROM Filme
WHERE nome LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%";
*c) Procure por todos os filmes que já tenham lançado*
SELECT * FROM Filme
WHERE data_de_lançamento < "2020-05-04";
*d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.*
WHERE data_de_lançamento < "2020-05-04" AND 
      (nome LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%") AND avaliação > 7;