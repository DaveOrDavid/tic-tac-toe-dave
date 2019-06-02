'use strict'

const store = require('../store.js')
// const playerChange = require('./events.js')
// responseData is whatever data our API sends back to us.
// when we make a successful request.
const onPlaySuccess = responseData => {
  event.preventDefault()
  store.game = responseData.game
  store.user.token = responseData.user
  $('#message').text('')
  // console.log('onPlaySuccess ran' + ' responseData.user is ' + responseData.user + ' responseData.game is ' + responseData.game)
  // console.log('store is', store)
  // so far nothing comes from onPlaySuccess, not used at all.
}

const onStartGameSuccess = responseData => {
  store.game = responseData.game
  store.currentPlayer = 'X' // variable to store 'X' as first player
  // console.log('store is', store)
  $('#message').text('Created new game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#user-change').empty()
  $('.col-3').html('')
}

const onStartGameFailure = responseData => {
  $('#message').text('Create failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#user-change').empty()
  $('.col-3').html('')
}
// ClickStartRemind functions part of store.canPlay to stop playing from board
const onClickSignInRemindSuccess = responseData => {
  // console.log('onClickSignInRemindSuccess has run')
  $('#message').text('Sign In to Begin Playing')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#user-change').empty()
  // $('.col-3').html('')
}
//
// const onClickSignInRemindFailure = responseData => {
//   $('#message').text('Click Sign In game failure')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('#user-change').empty()
//   // $('.col-3').html('')
// }
//
const onClickStartGameRemindSuccess = responseData => {
  // console.log('onClickStartGameRemindSuccess has run')
  $('#message').text('Click Start Game to begin a game')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#user-change').empty()
}
//
// const onClickStartGameRemindFailure = responseData => {
//   $('#message').text('Click start game failure')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('#user-change').empty()
//   // $('.col-3').html('')
// }

const onIndexSuccess = responseData => {
  // console.log('store is', store)
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
  // console.log('onUpdateFailure ran')
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
  onUpdateFailure,
  onClickSignInRemindSuccess,
  onClickStartGameRemindSuccess
  // onClickStartGameRemindFailure
}
