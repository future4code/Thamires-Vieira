//EXERCÍCIO 1

*a) Explique o que é uma chave estrangeira*
Pode ser nula (NOT NULL);
É um campo em uma tabela que faz referência a um campo que é chave primária em outra tabela;
É possível ter mais de uma (ou nenhuma) em uma tabela.

*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
INSERT INTO Rating (id, nome, avaliação, id_filme) 
VALUES (
	"001",
    "Filme",
    8,
	"004"
);

*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
Não foi possível criar porque falta o id da tabela de referência.

*d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
ALTER TABLE Filme DROP COLUMN avaliação;

*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
Não é possível deletar a tabela (pai) por estar ligada a uma outra tabela(filho).

//EXERCÍCIO 2

*a) Explique, com as suas palavras, essa tabela*
Está sendo criada uma tabela relacionando os filmes com os atores.
*b) Crie, ao menos, 6 relações nessa tabela* 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
)
*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

Não achou a chave de referência.
*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

//EXERCÍCIO 3
*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*
o ON serve para relacionar a coluna de uma tabela a coluna de outra tabela
*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;