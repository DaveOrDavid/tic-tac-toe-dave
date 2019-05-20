'use strict'

// Require these, to have access to:
// 1) the ability to get data from a form.
const getFormFields = require('../../../lib/get-form-fields.js')
// '../' used to pop up one directory area
// 2) to send an AJAX request to our API
const api = require('./api.js')
// 3) to update our webpage (and change what the end user sees)
const ui = require('./ui.js')
const store = require('../store.js')

// const game = ['', '', '', '', '', '', '', '', '']

let player = 'X'
// checks for empty boxes
const onPlay = event => {
  // event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  if ($(event.target).text() === '') {
    // api.onUpdateGame(formData)
    $(event.target).html(player)
    const index = $(event.target).data('cell-index')
    store.game.cells[index] = player
    api.update(index, player)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  }
}

const onStartGame = event => { // event is the event, and then target is what we want the event to point to
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const onCheckForWin = function (onPlay) {
  for (let i = 0; i < store.game.cells.length; i++) {
    if (((store.game[0]) === (store.game[1])) && (store.game[2])) {
      console.log('Winner!')
    } else if (((store.game[3]) === (store.game[4])) && (store.game[5])) {
      console.log('Winner!')
    } else if (((store.game[6]) === (store.game[7])) && (store.game[8])) {
      console.log('Winner!')
    } else {
      console.log('Draw!')
    }
  }
}

module.exports = {
  onPlay,
  onStartGame,
  onCheckForWin
  //game
}
