const express = require('express');
const router = express.Router();
const users = require('./users');

// Endpoint for GET request
router.get('/users', users.getAllUsers);

// Endpoint for POST request
router.post('/users', users.createUser);

// Endpoint for PUT request
router.put('/users/:id', users.updateUser);

// Endpoint for DELETE request
router.delete('/users/:id', users.deleteUser);

module.exports = router;
