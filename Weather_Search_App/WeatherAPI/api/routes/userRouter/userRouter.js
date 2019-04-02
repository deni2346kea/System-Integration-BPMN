'use strict';
const express = require('express');
const router = express.Router();

const userController = require('../../controllers/users/user.controller');

router.get('/', (req, res, next) => {
  userController.getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  userController.getUserById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

router.post('/', (req, res, next) => {
  userController.addUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  userController.deleteUser(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

router.patch('/', (req, res, next) => {
  userController.editUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
