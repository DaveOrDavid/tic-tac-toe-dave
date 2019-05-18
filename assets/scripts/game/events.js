'use strict'

// Require these, to have access to:
// 1) the ability to get data from a form.
const getFormFields = require('../../../lib/get-form-fields.js')
// '../' used to pop up one directory area
// 2) to send an AJAX request to our API
const api = require('./api.js')
// 3) to update our webpage (and change what the end user sees)
const ui = require('./ui.js')

let player = 'X'
// checks for empty boxes
const onPlay = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  if ($(event.target).text() === '') {
    $(event.target).html(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
    api.update(formData)
      .then(ui.onPlaySuccess)
      .catch(ui.onPlayFailure)
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
  for (let i = 0; i < array.length; i++) {
    if ((store.game.cells[0]) === (store.game.cells[1] && (store.game.cells[2]) {
      console.log("Winner!")
    } else if {
      ((store.game.cells[3]) === (store.game.cells[4]) && (store.game.cells[5]) {
      console.log("Winner!")
    } else if {
      ((store.game.cells[6]) === (store.game.cells[7]) && (store.game.cells[8]) {
      console.log("Winner!")
    } else {
      console.log("Draw!")
    }
  }
}
}

module.exports = {
  onPlay,
  onStartGame,
  onCheckForWin
}
