'use strict'

// responseData is whatever data our API sends back to us.
// when we make a successful request.
const onCreateSuccess = responseData => {
  console.log('success', responseData)

  // in this case, the data sent back is the example
  // we created, so we access to its text
  const text = responseData.example.text

  // we select our message, and give a user friendly message.
  $('#message').text('Created ' + text)

  // then we remove all classes, and style our message
  // and turn it green)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onCreateFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Create failed! :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onIndexSuccess = responseData => {
  console.log('success', responseData)
  $('#message').html('')

  // index actions, give us back an array of resources
  const examples = responseData.examples

  // so we loop through all of them
  examples.forEach(example => {
    // then append them to the bottom of our message
    $('#message').append(`<p>${example.id}: ${example.text}</p>`)
  })
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onIndexFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to Index and get all examples!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onShowSuccess = responseData => {
  console.log('success', responseData)
  const text = responseData.example.text
  $('#message').text('Showing example ' + text)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onShowFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Showing/getting failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onDestroySuccess = () => {
  console.log('success')
  // you can use 'store' and enter the ID as an object to return what was deleted to the user
  $('#message').text('Example deleted successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onDestroyFailure = () => {
  $('#message').text('Failed to delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = responseData => {
  console.log('success', responseData)
  const text = responseData.example.text
  $('#message').text('Updated example ' + text)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onUpdateFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to update!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
