'use strict'

// Require these, to have access to:
// 1) the ability to get data from a form.
// const getFormFields = require('../../../lib/get-form-fields.js')
// '../' used to pop up one directory area
// 2) to send an AJAX request to our API
const api = require('./api.js')
// 3) to update our webpage (and change what the end user sees)
const ui = require('./ui.js')
const store = require('../store.js')

let player = 'X'
const onPlay = event => {
  if ($(event.target).text() === '') {
    $(event.target).html(player)
    const index = $(event.target).data('cell-index')
    store.game.cells[index] = player
    api.update(index, player)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
    if (player === 'X') {
      player = 'O'
      $('#user-change').text('It is O\'s turn')
    } else {
      player = 'X'
      $('#user-change').text('It is X\'s turn')
    }
  }
  onCheckForWin()
}

const onStartGame = event => {
  event.preventDefault()
  $('.col-3').html('')
  api.create()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const onPlayerStats = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCheckForWin = function (player) {
  if (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[1]) && store.game.cells[1] === store.game.cells[2]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[3] !== '' && (store.game.cells[3] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[5]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[6] !== '' && (store.game.cells[6] === store.game.cells[7]) && store.game.cells[7] === store.game.cells[8]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[3]) && store.game.cells[3] === store.game.cells[6]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[1] !== '' && (store.game.cells[1] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[7]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[2] !== '' && (store.game.cells[2] === store.game.cells[5]) && store.game.cells[5] === store.game.cells[8]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[8]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[2] !== '' && (store.game.cells[2] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[8]) {
    $('#user-change').text('3 in a row, you win!')
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8]) {
    $('#user-change').text('It\'s a Draw')
  } else {
  }
}

module.exports = {
  onPlay,
  onStartGame,
  onCheckForWin,
  onPlayerStats
}
