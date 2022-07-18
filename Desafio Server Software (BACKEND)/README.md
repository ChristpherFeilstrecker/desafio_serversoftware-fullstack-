<h1 align="center" id="top">Desafio Server Softwares (BACK): </h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#documentacao">Documentação</a> &#xa0; | &#xa0;
  <a href="#heroku">Deploy</a> &#xa0; | &#xa0;
  <a href="#desenvolvedor">Desenvolvedor</a> | &#xa0;
<a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
<a href="#comousar">Como Testar esta API</a>

</p>
<h2 id="sobre"> Descrição do desafio - Backend</h2>

Fazer um backend em Node.js ou PHP, acessando um banco de dados (MySQL, Postgres ou MongoDB). Criar um banco de dados com uma única tabela, produtos, com os seguintes campos:

codigo
descricao
preco
data_cadastro

O backend tem que expor uma API Rest/JSON com suporte para um CRUD simples (inserção, atualização, consulta e exclusão). 

<h2 id="documentacao"> Documentação API: </h2>

 [https://documenter.getpostman.com/view/18385085/UzQuQ6RN]


 <h2 id="heroku"> Deploy:</h2>

 [https://desafioserversoftwares.herokuapp.com]


<h2 id="funcionalidades"> Funcionalidades:</h2>

* Retornar todos produtos; (url+/produtos/showAllProducts)
* Retornar 1 produto; (url+/produtos/showProduct)
* Adicionar produto; (url+/produtos/addProduct)
* Editar Produto; (url+/produtos/editProduct)
* Deletar produto; (url+/produtos/deleteProduct)


<h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>

<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2>Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>


<h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>

- Typescript
- Node
- SQL
- MySQL
- Express
- Cors
- Dotenv
- Knex
- React
- Axios
- json
- jest





<h2 id="comousar"> Como usar </h2>

Teste o código pelo postman ou programa de sua preferência seguindo a documentação <a href="#documentacao">AQUI</a> ou pelo seu computador:

- Clone o código para seu computador.
- Pelo terminal na pasta raiz rode o comando npm instal.
- Crie um arquivo com nome .env (para acessar seu banco de dados).
Com as seguintes informações:
  
   Ex.: 
   
        DB_USER = seu_usuario
  
        DB_PASSWORD = sua_senha
  
        DB_HOST = host
  
        DB_PORT = port
  
        DB_DATABASE_NAME = nome_database
  
- Rode o comando "npm run dev" ou "npm run start" para testar os endpoints

<a href="#top">Voltar para o topo</a> 