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
  // game board listeners
  $('#box0').on('click', gameEvents.onPlay)
  $('#box1').on('click', gameEvents.onPlay)
  $('#box2').on('click', gameEvents.onPlay)
  $('#box3').on('click', gameEvents.onPlay)
  $('#box4').on('click', gameEvents.onPlay)
  $('#box5').on('click', gameEvents.onPlay)
  $('#box6').on('click', gameEvents.onPlay)
  $('#box7').on('click', gameEvents.onPlay)
  $('#box8').on('click', gameEvents.onPlay)
})
