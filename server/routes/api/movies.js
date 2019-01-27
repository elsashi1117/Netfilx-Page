const express = require('express');
const router = express.Router();

const Movie = require('../../model/movie');

router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(404).json(err))
})

router.put('/:id', (req, res) => {
   Movie.findByIdAndUpdate(
       {_id: req.params.id},
       {$set:{category: req.body.category}},  
       (err, movie) => {
           if (err){
            res.status(400).json(err)
           } else {
               console.log('req.body:',req.body)
               movie.save()
               .then(Movie.find()
                            .then(movies => res.json(movies))
                            .catch(err => res.status(404).json(err)))
               .catch(err => res.send(err))
           }
       }
   )
})

module.exports =  router;