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

const update = function (index, value) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": value
        },
        "over": false
      }
    }
  })
}

module.exports = {
  create,
  show,
  destroy,
  update,
  index
}
