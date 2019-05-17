'use strict'

// Require these, to have access to:
// 1) the ability to get data from a form.
const getFormFields = require('../../../lib/get-form-fields.js')
// '../' used to pop up one directory area
// 2) to send an AJAX request to our API
const api = require('./api.js')
// 3) to update our webpage (and change what the end user sees)
const ui = require('./ui.js')
const boxes = ["","","","","","","","",""]

const onPlay = event => {
  event.preventDefault()
    const form = event.target
      if ($(event.target).text() === "") {
        console.log('Nothing in box' + event.target)
    } else if ($(event.target).text() === "X") {
        console.log('Player played X' + event.target)
    } else if ($(event.target).text() === "O") {
        console.log('Player played O' + event.target)
    } else {
        console.log('last else statement' + event.target)
    }
  }

//   const formData = getFormFields(form)
//   api.update(formData)
//     .then(ui.onCreateSuccess)
//     .catch(ui.onCreateFailure)
// }

module.exports = {
  onPlay
}
