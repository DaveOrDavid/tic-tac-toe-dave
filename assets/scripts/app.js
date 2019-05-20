'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn) // create onSignIn event
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#start-game').on('submit', gameEvents.onStartGame)
  $('#restart').on('submit', gameEvents.onRestartGame)
  // game board listeners
  $('#cell0').on('click', gameEvents.onPlay)
  $('#cell1').on('click', gameEvents.onPlay)
  $('#cell2').on('click', gameEvents.onPlay)
  $('#cell3').on('click', gameEvents.onPlay)
  $('#cell4').on('click', gameEvents.onPlay)
  $('#cell5').on('click', gameEvents.onPlay)
  $('#cell6').on('click', gameEvents.onPlay)
  $('#cell7').on('click', gameEvents.onPlay)
  $('#cell8').on('click', gameEvents.onPlay)
})
