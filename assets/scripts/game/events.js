'use strict'

// Require these, to have access to:
// 1) the ability to get data from a form.
const getFormFields = require('../../../lib/get-form-fields.js')
// '../' used to pop up one directory area
// 2) to send an AJAX request to our API
const api = require('./api.js')
// 3) to update our webpage (and change what the end user sees)
const ui = require('./ui.js')
const cells = ["","","","","","","","",""]

const onPlay = event => {
  event.preventDefault()
  const form = event.target
  let player = function() {
      if count($().on('click' event.target.gameboard)) === 0) {
        ($().text('X', event.target))
    } else if count($().on('click' event.target.gameboard)) % 3) {
        ($().text('O', event.target))
    } else if count($().on('click' event.target.gameboard)) % 2) {
        ($().text('X', event.target))
    } else
  }
}

  for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('Fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else
    console.log(i);
  }


const onCreate = event => { // event is the event, and then target is what we want the event to point to
  // if we submitted a form, this prevents the form from refreshing the page
  // Note: the default is to refresh the page
  event.preventDefault()
  const form = event.target // <-- property
  // event.target is html element that sent our event.
  // In this case, it was `#examples-create`
  // because $(#examples-create').on('submit', exampleEvents.onCreate)
  console.log('Hi here is the ', form)
  // if we give `getFormFields` a form, it will give us the form's data.
  const formData = getFormFields(form)
  // we make our API call, give it whatever data it needs to make the call.
  // if it only needs ID, we pass just that.
  api.create(formData)
  // when request is successful, we get a 200 based response
    .then(ui.onCreateSuccess)
  // when request fails, we get a 400 || 500 based response
    .catch(ui.onCreateFailure)
}

const onPlay = event => {
  event.preventDefault()
  const form = event.target



  console.log('Hi here is the ', form)
  console.log('you clicked the box')
  const formData = getFormFields(form)
  api.update(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
//
// const onIndex = event => { // event is the event, and then target is what we want the event to point to
//   event.preventDefault()
//   // const form = event.target
//   // const formData = getFormFields(form)  // no need for data, so remove input forms.
//   api.index()
//     .then(ui.onIndexSuccess)
//     .catch(ui.onIndexFailure)
// }
//
// const onShow = event => { // event is the event, and then target is what we want the event to point to
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.show(formData)
//     .then(ui.onShowSuccess)
//     .catch(ui.onShowFailure)
// }
//
// const onDestroy = event => { // event is the event, and then target is what we want the event to point to
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.destroy(formData)
//     .then(ui.onDestroySuccess)
//     .catch(ui.onDestroyFailure)
// }
//
// const onUpdate = event => { // event is the event, and then target is what we want the event to point to
//   event.preventDefault()
//   const form = event.target
//   console.log('Hi here is the ', form)
//   const formData = getFormFields(form)
//   api.update(formData)
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onDestroy,
  onUpdate,
  onPlay
}
