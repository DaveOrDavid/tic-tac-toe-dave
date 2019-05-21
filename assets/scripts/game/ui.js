'use strict'

const store = require('../store.js')
const playerChange = require('./events.js')
// responseData is whatever data our API sends back to us.
// when we make a successful request.
const onPlaySuccess = responseData => {
  event.preventDefault()
  store.game = responseData.game
  store.user.token = responseData.user
}

const onStartGameSuccess = responseData => {
  store.game = responseData.game
  $('#message').text('Created new game!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onStartGameFailure = responseData => {
  $('#message').text('Create failed! :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
//  $( "div.demo-container" ).text( "<p>This is a test.</p>" )
// get the array length of the request.

const onIndexSuccess = responseData => {
  $('#message').html('You\'ve played ' + responseData.games.length + ' games')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onIndexFailure = responseData => {
  $('#message').text('Failed to Index and get all examples!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onDestroySuccess = () => {
  $('#message').text('game deleted successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onDestroyFailure = () => {
  $('#message').text('Failed to delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = responseData => {
  $('#message').text('')
}

const onUpdateFailure = responseData => {
  $('#message').text('Failed to update')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onPlaySuccess,
  onStartGameSuccess,
  onStartGameFailure,
  onIndexSuccess,
  onIndexFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
