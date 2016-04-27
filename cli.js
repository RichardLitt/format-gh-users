#!/usr/bin/env node
'use strict'

const formatGhUsers = require('./')
const meow = require('meow')
const Promise = require('bluebird')
const ghauth = Promise.promisify(require('ghauth'))
const authOptions = {
  configName: 'formatGhUsers',
  note: 'Format an array of GitHub users into named links',
  userAgent: 'ghUser',
  scope: ['user']
}
const readFile = Promise.promisify(require('fs').readFile)

var cli = meow([`
  Usage
    $ format-gh-users [input]

  Examples
    $ format-gh-users RichardLitt
    [{ login: 'RichardLitt',  ... }]
    $ format-gh-users RichardLitt jbenet
    [{...}, {...}]
`])

Promise.try(function () {
  return ghauth(authOptions)
}).then((authData) => {
  return readFile(cli.input[0]).then(function (data) {
    return formatGhUsers(data.toString().split('\n'), authData.token)
  }).catch(function (err) {
    if (err.code === 'ENOENT') {
      return formatGhUsers(cli.input, authData.token)
    } else if (err) {
      throw err
    }
  })
}).map(function (response) {
  console.log(response)
})
