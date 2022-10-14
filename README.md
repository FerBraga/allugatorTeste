# Renter - App de aluguel de eletrônicos. 

# Contexto
Este projeto trata-se de uma ferramenta de busca, filtragem de produtos eletrônicos para assinatura.


## rodando

<img src="/allugatorTeste/Gravação de tela de 14-10-2022 07_39_26.gif"/>
<img src="/allugatorTeste/Gravação de tela de 14-10-2022 07_44_52.gif"/>

## Desenvolvimento 

> Backend
```bash
API no padrão REST, que recebe requisições via HTTP. 

As requisições são recebidas pelo servidor, através dos endpoints criados para acesso no front, 
então o servidor faz um redirecionamento para um router que passa para a camada de controller da aplicação 

Na camada de controller, recebemos os dados do front-end via body, params ou query, então passamos para a 
camada service. 

Já a camada service faz verificações básicas dos dados recebidos pelo controller. Após o retorno da camada seguinte, a model, 
faz também uma verificação para retornar os dados em caso de sucesso, ou lançar um erro atravies de um middleware de
erro criado para capturar cada um deles, em casos de fracasso na requisição para o banco de dados. 

Exemplos de verificações são de comparação de senhas com criptografia (md5), criação de validação de token individual para usuário(jwt), 
e também validação de dados e campos pelo JOI. 

A última camada, model, faz a requisição/query com os dados vindo de service, caso tenham, para o banco de dados relacional 
MySql utilizando a lib mysql2/promise, e retorna para as camadas anteriores usa resposta.
``` 
> Frontend
```bash
Aplicação utilizando SPA em React. Componentes separados para facilitar a reutilização para diversas páginas. 

Requisições feitas via axios para o back-end.

Gestão de estado com as informações vinda das apis, ou campos das páginas dos componentes com ContextAPI. 
```
> Banco de dados
```bash
O servidor mysql está em um contâiner docker e dentro dele temos o banco que conterá as tabelas de produtos disponíveis,
dos usuários cadastrados e também uma tabela de vendas, que serve como ligação entre produto e usuário. 
``` 

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
Logo após a instalação de back-end acesse a pasta `/front-end` e rode o comando
npm install
```
> Banco de dados
```bash
Após instalar back-end e front-end você deverá rodar o comando `docker-compose up` na pasta raíz allugatorFS/
para subir o contâiner docker que roda o banco MySql. Nâo precisa instalar o MySql em sua máquina. Após isso você
já poderá ter acesso ao servidor na `na porta 3306`. Na pasta `/database` dentro de `/back-end` tem o arquivo `db.sql`
com o script necessário para criar o banco de dados com as tabelas necessárias. Você pode utiliar o Workbench, 
por exemplo, para acessar o servidor MySql e rodar a query para popular o banco.
``` 
## Executando aplicação

* Para rodar o back-end:

  ```
  Acesse a pasta raíz do projeto e rode npm run dev. Certifique-se de não estar utilizando a porta 3001, 
  pois ela será utilzada para rodar o servidor Node.
  ```
* Para rodar o front-end:

  ```
   Dentro da pasta `front-end` rode o comando npm start. Certifique-se de não estar utilizando a porta 3000, 
  pois ela será utilzada para rodar a aplicação React.
  ```
