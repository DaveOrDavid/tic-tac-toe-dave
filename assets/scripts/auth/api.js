'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = formData => {
  console.log('from api signUp')

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
    // everything we need to pass to the API
  })
}
const signIn = formData => {
  console.log('from api signIn')

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
    // everything we need to pass to the API
  })
}

const changePassword = formData => {
  console.log('from api changePassword')
  console.log('store is', store)

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

const signOut = () => {
  console.log('from api signOut')

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
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
