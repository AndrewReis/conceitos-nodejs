const express = require("express");
const cors = require("cors");

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];


app.get("/repositories", (request, response) => {
   response.json(repositories);
});

app.post("/repositories", (request, response) => {
    const { title, url, techs } = request.body;

    const newRepository = {
      id: uuid(),
      title,
      url,
      techs,
      likes: 0
    }

    repositories.push(newRepository);

    return response.json(newRepository);

});

app.put("/repositories/:id",(request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;  

  const indexRepo = repositories.findIndex( repo => repo.id === id );

  if(indexRepo < 0 ){
    return response.status(400).json({ error: 'Repository not found.' });
  }

  
  const updateRepo = {
    title,
    url,
    techs,
  }

  repositories[indexRepo] = updateRepo;

  return response.send();

});

app.delete("/repositories/:id", (request, response) => {
    const { id } = request.params;

    const indexRepo = repositories.findIndex( repo => repo.id === id );

    if(indexRepo < 0){
      return response.status(400).json({ error: 'Repository not found.' });
    }

    repositories.splice(indexRepo, 1);

    return response.status(204).send();


});

app.post("/repositories/:id/like",(request, response) => {
    const { id } = request.params;
   

    const repository = repositories.find( repo => repo.id === id );

    if(!repository){
      return response.status(400).json({ error: 'Repository not found.' });
    }

    repository.likes  += 1;

    return response.json(repository);
});

module.exports = app;
