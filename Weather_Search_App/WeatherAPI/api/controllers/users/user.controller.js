'use strict';

const userModel = require('./users.json');
const HttpError = require('./../../lib/utils/http-error');
const fs = require('fs');

// GET ALL USERS
async function getUsers() {
  try {
    return userModel;
  } catch (err) {
    throw new HttpError('Bad request', 'Users cannot be fetched', 500);
  }
}

// GET SINGLE USER BY ID
async function getUserById(id) {
  let userToReturn = {};

  try {
    userModel.forEach((ele) => {
      if (ele.id == id) userToReturn = ele;
    });
    if (userToReturn.hasOwnProperty('id'))
      return userToReturn;
    else
      throw new Error('not found');
  } catch (err) {
    if (err.message === 'not found')
      throw new HttpError('Bad request', 'User not found for id ' + id, 404);
  }
}

// ADD USER TO DB
async function addUser(body) {
  // getting the latest id
  const users = await getUsers();
  const lastId = users[users.length - 1].id;

  // new user object
  const newUser = {
    id: lastId + 1,
    name: body.name,
    surname: body.surname,
    username: body.username,
    password: body.password
  };
  try {
    fs.readFile(__dirname + '/users.json', (err, data) => {
      if (err) console.log(err);

      let json = JSON.parse(data);
      json.push(newUser);

      fs.writeFile(__dirname + '/users.json', JSON.stringify(json));
    });
  } catch (err) {
    console.log(err);
    throw new HttpError('Bad request', 'Cannot add user', 500);
  }
  return newUser;
}

async function deleteUser(id) {
  try {
    fs.readFile(__dirname + '/users.json', (err, data) => {
      if (err) console.log(err);

      let json = JSON.parse(data);
      for (let i = 0; i < json.length; i++) {
        if (json[i].id == id) {
          json.splice(i, 1);
          fs.writeFile(__dirname + '/users.json', JSON.stringify(json));
          break;
        }
      }
    });
    return true;
  } catch (err) {
    console.log(err);
  }
}

async function editUser(body) {

  try {
    fs.readFile(__dirname + '/users.json', (err, data) => {
      // log error if exists
      if (err) console.log(err);

      let json = JSON.parse(data);
      for (let i = 0; i < json.length; i++) {
        if (json[i].id == body.id) {
          if (body.name) json[i].name = body.name;
          if (body.surname) json[i].surname = body.surname;
          if (body.username) json[i].username = body.username;
          if (body.password) json[i].password = body.password;

          fs.writeFile(__dirname + '/users.json', JSON.stringify(json));
          break;
        }
      }
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  addUser: addUser,
  deleteUser: deleteUser,
  editUser: editUser
};
