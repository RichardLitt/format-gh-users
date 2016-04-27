'use strict'

const Promise = require('bluebird')
const _ = require('lodash')
const getGithubUser = require('get-github-user')
const sortAlphabetically = require('sort-alphabetic')

// const users =

module.exports = function (users, opts) {
  return Promise.resolve().then(() => {
    return users
  }
  ).map((user) => getGithubUser(user))
  .then(_.flatten.bind(_))
  .map((user) => {
    var str = '- [@' + user.login + '](//github.com/' + user.login + ')'
    if (user.name) {
      str += ' (' + user.name + ')'
    }
    return str
  }).then((arr) => sortAlphabetically(arr))
}
