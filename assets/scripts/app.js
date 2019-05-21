'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#start-game').on('submit', gameEvents.onStartGame)
  $('#restart').on('submit', gameEvents.onRestartGame)
  $('#game-stats').on('submit', gameEvents.onPlayerStats)
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
