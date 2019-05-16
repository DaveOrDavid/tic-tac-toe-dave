'use strict'
// config is important - contains the prod or dev URL.
// Need it to have access to API's url
const config = require('../templates/config.js')
// we import `store` so we can store data between different files, such as the token.
// ...but can be used to store OTHER THINGS LIKE WHERE PEOPLE PLAYED EACH TIC TAC TOE MOVE
const store = require('../templates/store.js')

const create = formData => {
  console.log('from api create')
  console.log('store is', store)
  console.log('Hi here is the ', formData)

  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'POST',
    data: formData,
    // include any metadata in headers, since there could be
    // multiple headers, we use an object (like Authorization)
    headers: {
      Authorization: 'Token token=' + store.user.token // accessing the `user` object in store `store.user`
      // then accessing the token located on our `user`
    }
    // everything we need to pass to the API
  })
}

const index = () => {
  console.log('from api create')
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'GET', // If no data supplied, GET is default and implied
    // data: formData, //no need for formData
    headers: { // we still need auth token since we are working with auth API
      Authorization: 'Token token=' + store.user.token
    }
    // everything we need to pass to the API
  })
}

const show = (formData) => {
  console.log('from api show')
  console.log('store is', store)
  const id = formData.example.id
  return $.ajax({
    url: config.apiUrl + '/examples/' + id,
    method: 'GET',
    headers: { // we still need auth token since we are working with auth API
      Authorization: 'Token token=' + store.user.token
    }
    // everything we need to pass to the API
  })
}

const destroy = (formData) => {
  console.log('from api show')
  console.log('store is', store)
  const id = formData.example.id
  return $.ajax({
    url: config.apiUrl + '/examples/' + id,
    method: 'DELETE',
    headers: { // we still need auth token since we are working with auth API
      Authorization: 'Token token=' + store.user.token
    }
    // everything we need to pass to the API
  })
}

const update = formData => {
  console.log('from api create')
  console.log('store is', store)
  const id = formData.example.id

  return $.ajax({
    url: config.apiUrl + '/examples/' + id,
    method: 'PATCH', // change to patch
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // everything we need to pass to the API
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}
