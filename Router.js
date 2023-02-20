const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/user', userController.getAll);

router.get('/user/:id', userController.getOne);

router.post('/user',  userController.postUser);

router.put('/user', userController.putUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;