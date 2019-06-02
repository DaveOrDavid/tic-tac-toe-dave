'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
    // everything we need to pass to the API
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // everything we need to pass to the API
  })
}

const signOut = formData => {
  // console.log('from api signOut')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // everything we need to pass to the API
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
