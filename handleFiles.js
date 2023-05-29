'use strict'

const Players = require('./models/files');

const handleFiles = {};

handleFiles.getPlayers = function (req, res, next) {
  let queryObject = {};

  if(req.query.name){
    queryObject = {title: req.query.name};
  }

  Players.find(queryObject)
    .then(data=>{
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err=>next(err));
};

handleFiles.postPlayers = function (req, res, next){
  const data = req.body;
  console.log(data);
  Players.create(data)
    .then(createdPlayers => res.status(201).send(createdPlayers))
    .catch(err=>next(err));
};

handleFiles.deletePlayers = function (req, res, next){
  const {id} = req.params;
  Players.findByIdAndDelete(id)
    .then(deletePlayers => res.status(204).send
    (deletePlayers))
    .catch(err=>next(err));
}

module.exports = handleFiles;