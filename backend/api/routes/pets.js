// routes/pets.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new pet
router.post('/', async (req, res) => {
  const pet = new Pet({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    location: req.body.location,
    description: req.body.description,
  });

  try {
    const newPet = await pet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
