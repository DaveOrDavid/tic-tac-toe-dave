'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
// '../' used to pop up one directory area
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
store.user = ''

const onSignUp = event => { // event is the event, and then target is what we want the event to point to
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => { // event is the event, and then target is what we want the event to point to
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => { // event is the event, and then target is what we want the event to point to
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    // .then(store.game = true)
    // .then(store.canPlay = false)
    // .then(store.canPlay) = false takes a successful action and changes boolean.
    // kept on events.js auth page with '.then' since this is not a visible ui action,
    // therefore, not adding to ui.js page.
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => { // event is the event, and then target is what we want the event to point to
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .then(store.canPlay = false)
    .then(store.user = false)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
