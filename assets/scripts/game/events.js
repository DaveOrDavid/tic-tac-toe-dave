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
store.canPlay = false
// store.canPlay sets game to false until SignIn is clicked
store.isPlaying = false
// store.isPlaying sets game to false until StartGame is clicked

const switchPlayers = function () {
  if (store.game.over === false) {
    if (store.currentPlayer === 'X') {
      store.currentPlayer = 'O'
      $('#user-change').text('It is O\'s turn')
    } else {
      store.currentPlayer = 'X'
      $('#user-change').text('It is X\'s turn')
    }
  }
}

const onPlay = event => {
  // if (responseData.user === '') { // current idea for trying to stop errors from clicking game board when not signed in.
  console.log('store.canPlay is ' + store.canPlay)
  console.log('store.user is ' + store.user)
  // console.log('store.game.over is ' + store.game.over)
  if (store.canPlay === false & store.isPlaying === false) {
    ui.onClickSignInRemindSuccess()
    // if statements based on signing in or not
  } else if (store.canPlay === true & store.isPlaying === false) {
    ui.onClickStartGameRemindSuccess()
    // if else statement for being signed in button hasn't click StartGame
  } else {
    if ($(event.target).text() === '' && store.game.over === false) {
      // added conditional to even.target.text with store.game.over
      // so game board can not be played after win.
      $(event.target).html(store.currentPlayer)
      const index = $(event.target).data('cell-index')
      store.game.cells[index] = store.currentPlayer
      onCheckForWin()
      api.update(index)
        .then(ui.onUpdateSuccess)
        .then(switchPlayers)
        .catch(ui.onUpdateFailure)
    }
  }
}
// if (store.canPlay === false & store.isPlaying === false) {
//   ui.onClickSignInRemindSuccess()
// } else if (store.canPlay === true & store.isPlaying === false) {
//   ui.onClickStartGameRemindSuccess()
// }

const onStartGame = event => {
  event.preventDefault()
  api.create()
    .then(ui.onStartGameSuccess)
    .then(store.isPlaying = true)
    // clicking StartGame flips store.isPlaying to true
    // allowing else function of onPlay to run and user to click board
    .catch(ui.onStartGameFailure)
}

const onPlayerStats = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCheckForWin = function () {
  if ((store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[1]) && store.game.cells[1] === store.game.cells[2]) ||
  (store.game.cells[3] !== '' && (store.game.cells[3] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[5]) ||
  (store.game.cells[6] !== '' && (store.game.cells[6] === store.game.cells[7]) && store.game.cells[7] === store.game.cells[8]) ||
  (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[3]) && store.game.cells[3] === store.game.cells[6]) ||
  (store.game.cells[1] !== '' && (store.game.cells[1] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[7]) ||
  (store.game.cells[2] !== '' && (store.game.cells[2] === store.game.cells[5]) && store.game.cells[5] === store.game.cells[8]) ||
  (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[8]) ||
  (store.game.cells[2] !== '' && (store.game.cells[2] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[6])) {
    $('#user-change').text(store.currentPlayer + ' is the winner!')
    store.game.over = true
    store.canPlay = false
    store.isPlaying = false
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8]) {
    $('#user-change').text('It\'s a Draw!')
    store.game.over = true
    store.canPlay = false
    store.isPlaying = false
  }
}

module.exports = {
  onPlay,
  onStartGame,
  onCheckForWin,
  onPlayerStats
}
