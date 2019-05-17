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
  if ($(event.target).text() === '') {
    console.log('Nothing in box, player played X' + event.target)
    $(event.target).html(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
    api.update()
      .then(ui.onPlaySuccess)
      .catch(ui.onPlayFailure)
  }
}

const onStartGame = event => { // event is the event, and then target is what we want the event to point to
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

module.exports = {
  onPlay,
  onStartGame

}
