'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  $('#message').text('Signed up failed! :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Signed in failed! :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Change password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change password failed! :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignOutFailure = () => {
  $('#message').text('Signed out failed! :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
