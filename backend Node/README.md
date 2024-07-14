///////////////////////////////////////////////BACKEND///////////////////////////////////////////////

-> Para conseguir compilar a parte backend:

baixe as dependencia do projeto:

-> npm i express

-> npm i firebase-admin

CONEXÃO FIREBASE:

PASSO1: Precisa do arquivo de conexão do Firestore Database(firebase),nesse caso precisa criar um projeto no firebase e gerar um banco.

PASSO2: Conseguindo o arquivo do firebase, basta criar um arquivo dentro da pasta "backend Node" com o nome "serviceAccountKey.json" e inserir os dados do arquivo que o firebase gerou.

INFORMAÇÕES DA TABELA DO BANCO QUE PRECISA CRIAR:

nome da tabela: cep

atributos da tabela:

bairro: String

cep: String

logradouro: String

uf: String

A aplicação se encontra na porta http://localhost:3001

Rodar a aplicação:

-> node server.js

/////////////////////////////////////////////////////////////////////////////////////////////////////
