'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('.in-game').hide()
  $('#user-change').empty()
  $('.col-3').html('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Signed up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#user-change').empty()
  $('.col-3').html('')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.in-game').show()
  $('#user-change').empty()
  $('.col-3').html('')

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Signed in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
