'use strict'
// config is important - contains the prod or dev URL.
// Need it to have access to API's url
const config = require('../config.js')
// we import `store` so we can store data between different files, such as the token.
// ...but can be used to store OTHER THINGS LIKE WHERE PEOPLE PLAYED EACH TIC TAC TOE MOVE
const store = require('../store.js')

const create = formData => {
  console.log('from api create')
  console.log('store is', store)
  console.log('Hey here is the ', formData)
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }, // accessing the `user` object in store `store.user`
    data: '' // then accessing the token located on our `user`
  })
}

// const index = () => {
//   console.log('from api create')
//   console.log('store is', store)
//   return $.ajax({
//     url: config.apiUrl + '/games/',
//     method: 'GET', // If no data supplied, GET is default and implied
//     // data: formData, //no need for formData
//     headers: { // we still need auth token since we are working with auth API
//       Authorization: 'Token token=' + store.user.token
//     }, // accessing the `user` object in store `store.user`
//     data: '' // then accessing the token located on our `user`
//   })
// }

const show = (formData) => {
  console.log('from api show')
  console.log('store is', store)
  // const id = formData.game.id
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: { // we still need auth token since we are working with auth API
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = (formData) => {
  console.log('from api show')
  console.log('store is', store)
  const id = formData.game.id
  return $.ajax({
    url: config.apiUrl + '/onStartGameSuccess/' + id,
    method: 'DELETE',
    headers: { // we still need auth token since we are working with auth API
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = formData => {
  console.log('from api create')
  console.log('store is', store)
  const id = store.game.id
  console.log(store.game.id)

  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  show,
  destroy,
  update
}
