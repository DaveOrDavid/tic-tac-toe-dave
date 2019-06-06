'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = () => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const index = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const show = (formData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = (formData) => {
  const id = formData.game.id
  return $.ajax({
    url: config.apiUrl + '/onStartGameSuccess/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const update = function (index, value) {
const update = function (index) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index
          // 'value': value
        },
        // 'over': false,
        'value': store.currentPlayer
      },
      'over': store.game.over
    }
  })
}
// removed 'value': value; 'over': false ; const update = function (index, value)
// this will patch over API game over to 'true'
// this is being completed post-project submission 6/6/19

module.exports = {
  create,
  show,
  destroy,
  update,
  index
}
