'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  console.log('sign UP submit button click for ' + authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn) // create onSignIn event
  console.log('sign IN submit button click for ' + authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  console.log('change pw submit button click for ' + authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  console.log('sign OUT submit button click for ' + authEvents.onSignOUT)
})
