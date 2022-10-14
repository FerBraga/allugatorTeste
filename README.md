# Renter - App de aluguel de eletrônicos

# Contexto
Este projeto trata-se de uma ferramenta de back-office para armaze.

## Técnologias usadas

Front-end:
> Desenvolvido usando: React, ContextAPI, CSS3, HTML5, ES6

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6, JOI, JWT, Md5


## Instalando Dependências

> Backend
```bash
Após clonar este repositório em seu diretório local, acesse a pasta onde foi clonado, 
então rode o comando npm install para instalar todos os pacotes. de back-end.
``` 
> Frontend
```bash
cd src/
npm install
```
> Banco de dados
```bash
Após instalar back-end e front-end você deverá rodar o comando `docker-compose up` na pasta raíz allugatorFS/
para subir o contâiner docker que roda o banco MySql. Nâo precisa instalar o MySql em sua máquina. Após isso você
já poderá ter acesso ao servidor na `na porta 3306`. Na pasta `/database` dentro de `/back-end` tem o arquivo `db.sql`
com o script necessário para criar o banco de dados com as tabelas necessárias. Você pode utiliar o Workbench, por exemplo,
para acessar o servidor MySql e rodar a query para popular o banco.
``` 
## Executando aplicação

* Para rodar o back-end:

  ```
  cd api/ && npm start
  ```
* Para rodar o front-end:

  ```
    cd src/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```
