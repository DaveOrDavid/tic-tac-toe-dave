'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('.in-game').hide()
  $('#user-change').empty()
  $('.col-3').html('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#user-change').empty()
  $('.col-3').html('')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.in-game').show()
  $('#user-change').empty()
  $('.col-3').html('')
  store.user = responseData.user
  store.canPlay = true
  console.log('onSignInSuccess ran')
  console.log('store is', store)

  // setTimeout(function () {
  //   $('#message').hide()
  // }, 6000)
}

const onSignInFailure = responseData => {
  $('#message').text('Signed in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-in').trigger('reset')
  $('#user-change').empty()
  $('.col-3').html('')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Change password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  $('#user-change').empty()
  $('.col-3').html('')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change password failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#change-pw').trigger('reset')
  $('#user-change').empty()
  $('.col-3').html('')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').show()
  $('#sign-up').show()
  $('.in-game').hide()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#user-change').empty()
  $('.col-3').html('')
  // store.user.token = ''
  store.canPlay = false
  // store.isPlaying = true
}

const onSignOutFailure = () => {
  $('#message').text('Signed out failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#user-change').empty()
  $('.col-3').html('')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
