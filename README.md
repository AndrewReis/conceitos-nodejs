<h1 align="center">
    <h1 align="center"><img src="https://github.com/AndrewReis/conceitos-nodejs/blob/master/src/assets/desafio02.png" alt="GoStack desafio 02"/></h1>
</h1>
<p align="center"> **Desafio 02 GO Stack**🚀: Conceitos de nodeJs </p>

<p align="center">
 <a href="#objetivo">Objetivo</a> 
 <a href="#tecnologias">Tecnologias</a>  
 <a href="#autor">Autor</a> 
</p>

<h4 align="center"> 
	🚀  Projeto finalizado.  🚀
</h4>



<h1 id='objetivo'> 🎯 Objetivo </h1>


<p align="center">
    Nesse desafio, eu tive que criar uma aplicação para treinar oque aprendi até o momento sobre o nodeJS,
    conceitos vistos até agora no GoStack:
        Middlewares, HTTP code, API Rest, 
</p>

<p align="center">
    Objetivo do desafio:
    copiar o template de codigo preparado pelo time da Rocketseat, e desenvolver as rotas de: GET, POST, PUT e DELETE. com as seguintes **regras de negocio:** 

    **POST /repositories:** A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

    **GET /repositories:** Rota que lista todos os repositórios;

    **PUT /repositories/:id:** A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

    **DELETE /repositories/:id:** A rota deve deletar o repositório com o id presente nos parâmetros da rota;

    **POST /repositories/:id/like:** A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;



    O desafio aborda conceitos sobre construção de uma API Rest, utilizando a lib Jest para fazer os testes automatizados de cada rota. Cada teste segue uma regra que deve ser seguida para satisfazer as regras de negocio. 

    **should be able to update repository:** Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos url, title e techs.

    **should not be able to update a repository that does not exist:** Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

    **should not be able to update repository likes manually:** Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

    **should be able to delete the repository:** Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

    **should not be able to delete a repository that does not exist:** Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

    **should be able to give a like to the repository:** Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

    **should not be able to like a repository that does not exist:** Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

</p>
	



<h1 id='tecnologias'> 🤖 Tecnologias </h1>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Jest](https://reactnative.dev/)
- [Supertest]()


<h1 id='autor'> 🙋🏽‍♂️ Autor </h1>

---

 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/60078687?s=460&u=83742fab7b35f433986c6fbe25df935441b6a743&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Andrew Reis</b></sub></a> 🚀


Feito com ❤️ por Andrew Reis 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Andrew-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andrew-reis/)](https://www.linkedin.com/in/andrew-reis/) 
