// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const Workout = require('../db').import('../models/workout');

// router.get('/', (req,res) =>  
//     res.send('I love pie')
// );
router.get('/', (req, res) => {
    Workout.findAll()
        .then(workout => res.status(200).json(workout))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.post('/', (req, res) => {
    const workoutFromRequest = {
        nameOfWorkout: req.body.nameOfWorkout,
        description: req.body.description,
        result: req.body.result,
        owner: req.body.owner,
    }
    Workout.create(workoutFromRequest)
        .then(workout => res.status(200).json(workout))
        .catch(err => res.json(req.errors));
})
// Grabs an object by name using the /:name and params
router.get('/:name', (req, res) => {
    Workout.findOne({ where: { nameOfWorkout: req.params.name}})
      .then(workout => res.status(200).json(workout))
      .catch(err => res.status(500).json({ error: err}))
  })

router.put('/:id', (req, res) => {
    Workout.update(req.body, { where: { id: req.params.id }})
      .then(workout => res.status(200).json(workout))
      .catch(err => res.json({
          error :err 
  }))
})

//Delete by ID
router.delete('/:id', (req, res) => {
    Workout.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(workout => res.status(200).json(workout))
    .catch(err => res.json({
        error: err
    }))
})

  module.exports = router;