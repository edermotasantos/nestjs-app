# Nest.js App

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>

---
## Contexto

Esse projeto foi desenvolvido para uma vaga de Back End na empresa Beon Tecnologia.

A proposta era desenvolver uma aplicação Back End para enviar atividades agendadas para computação em Nuvem. Essa aplicação deve ter a possibilidade de utilizar criação, leitura, atualização, e remoção de uma ou mais atividades. 

Foi proposto que o desafio técnico fosse disponibilizado no Github e fosse trabalhado com boas práticas, tendo como enfâse especial os seguintes itens:
- Separação de responsabilidades
- Clareza e leitura do código 
- Organização da arquitetura do projeto
- Detalhes de workflow do projeto

Os Dados deve ser recebido em formato `JSON` da seguinte forma:

```json
{
    "nome": "segunda tarefa",
    "data_de_execucao": "2022-06-22",
    "situacao": "pendente",
    "prioridade": "baixa",
    "data_de_conclusao": "2022-06-30"
}
```

E será armazenado no banco de dados no formato `JSON`, dessa maneira:

```json
{
  "_id": "62b3c85555a1cb218e5bce6c",
    "nome": "segunda tarefa",
    "data_de_execucao": "2022-06-22T00:00:00.000Z",
    "situacao": "pendente",
    "prioridade": "baixa",
    "data_de_conclusao": "2022-06-30T00:00:00.000Z",
    "__v": 0
}
```

Os dados podem ser armazenados e manipulados através dos Métodos:
- Create
- Read
- Update (PATCH)
- Delete

Foi proposto o uso de Node.js, AWS, Lambda, Redis, além do uso do Framework Serverless. E para pontuação extra foi solicitado o uso do Typescript e Docker para gerenciar os recursos. Mas devido a dificuldades de acesso e o prazo, foi decidido a não utilização de AWS, Lambda, Redis como o Serverless. Como alternativa foi utilizado o Nest.js e uma tentativa de utilizar o MongoDB Atlas, que foi logo descartada também por apresentar erro ao tentar acessar. Com o uso do Nest.js, consequentemente foi utilizado Typescript e o desenvolvimento da aplicação correu sem muitos problemas, exceto após o deploy feito no Heroku.  


### Tecnologias

* `Nest.js`
* `Node.js`
* `Typescript`
* `Jest`
* `Mongoose`
* `MongoDB`
* `Heroku`

## Desenvolvimento

O desenvolvimento da aplicação foi feito no `VSCODE`, e o projeto teve que ser reiniciado após constatar que não seria possível trabalhar com `AWS` dentro do prazo estabelecido. Após isso foi implementado uma nova aplicação utilizando `Nest.js` de forma simples. Foi utilizado o `POSTMAN` para testar se a a aplicação estava populando corretamente e o `MongoDB Compass` para visualizar o banco de dados. Logo após foi feito o Deploy no Heroku e mais tarde alguns testes utilizando Jest.

## Como instalar

Pre-requisitos para rodar o projeto: 
- `mongoDB`
- `Node.js`

Copie o ssh do projeto `git@github.com:edermotasantos/nestjs-app.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:edermotasantos/nestjs-app.git`
  * `cd nestjs-app`
  * `yarn install`
  * `yarn run start`

* Para testar, basta ditarar o comando:
* `yarn run test`
  
Localmente foi utilizado um arquivo `.env` (não enviado para o github) para as configurações locais, mas as funções estão configuradas para que também possa ser utilizadas sem esse arquivo.

---

## Modo de utilização

A API consta com 2 rotas: 
* `/tasks` [`POST`] Insere uma atividade
* `/tasks` [`GET`]  Pegar a lista de atividades
* `/tasks/:id` [`GET`] Pega uma atividade
* `/tasks/:id` [`PATCH`] Atualiza uma atividade
* `/tasks/:id` [`DELETE`] Deleta uma atividade
*  
---

### Deploy Heroku

Apesar do deploy ter sido feito sem nenhum contratempo, não consegui acesso ao App através do link abaixo. No terminal apresentou um erro no Port, mas que aparentemente estava solucionado. Como não consegui resolver, segui para outros terminar outros requisitos. 

Para acesso ao App: https://nestjs-app-heroku.herokuapp.com/
Heroku git url: https://git.heroku.com/nestjs-app-heroku.git



### Banco de dados

Foi utilizado o `MongoDB` pela fácil inserção e extração de dados.

---

## Próximos passos

* Implementação de mais Testes
* Implementação de `Token` de acesso e `login`

---


# Entre em contato:

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>
