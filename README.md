# format-gh-users [![Build Status](https://travis-ci.org/RichardLitt/format-gh-users.svg?branch=master)](https://travis-ci.org/RichardLitt/format-gh-users)

> Format an array of GitHub users into named links


## Install

```
$ npm install --save format-gh-users
```

You also need to get a GitHub application token: https://github.com/settings/tokens. Provide it in the CLI or set it as `$GITHUB_OGN_TOKEN` somewhere in your bash_profile.

## Usage

```js
const formatGhUsers = require('format-gh-users');

formatGhUsers('RichardLitt');
//=> [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
```


## API

### getGithubUser(input)

#### input

Type: `string` or `array` or path

The user or array of users you want user objects for.

## CLI

```
$ npm install --global format-gh-users
```

```
$ format-gh-users --help

  Usage
    get-github-user [input]

  Examples
    $ get-github-user RichardLitt
    [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
    $ get-github-user test
    [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
```


## License

MIT © [Richard Littauer](http://burntfen.com)
