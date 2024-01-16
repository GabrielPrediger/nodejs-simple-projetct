# Projeto Node.js - CRUD simples sobre videos

Este projeto foi desenvolvido como parte de um curso simples de Node.js, visando a prática e aprimoramento dos conhecimentos na linguagem.

## Configuração do Banco de Dados

Dentro do projeto, oferecemos a flexibilidade de utilizar um banco de dados local. Para isso, basta realizar a substituição no arquivo `server.js`:

```javascript
const db = new DatabasePostgress();
```

por

```javascript
const db = new DatabaseMemory();
```

## Testando as Rotas

Caso deseje testar as rotas, recomendamos o uso da extensão "REST Client" do VSCode. Você pode interagir com as rotas utilizando o arquivo denominado `routes.http`.

Ao lidar com rotas que possuem identificadores (IDs), lembre-se de substituir no arquivo `routes.http` o `:id` pelo ID gerado ao criar um vídeo.

## Rota de Listagem com Parâmetro de Busca

Destacamos que a rota de listagem de vídeos conta com um parâmetro de busca, utilizando a sintaxe `search=`. Para testar, basta adicionar um título após o sinal de igual.

Exemplo:

```http
GET http://localhost:3000/videos?search=SeuTituloAqui
```

Este projeto oferece uma oportunidade prática de manipulação de rotas em Node.js, permitindo a exploração e aprendizado da linguagem de forma interativa. Sinta-se à vontade para experimentar e personalizar conforme suas necessidades de aprendizado.
