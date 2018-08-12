'use strict'

// npm
const { ret, Doit } = require('npm-git-links')

console.log('DEV:', ret.dev)

const x = new Doit(ret.repository, ret.headHash)
console.log('headHash:', x.browse)

x.clearVersion()
console.log('default:', x.browse)

x.version = ret.versionHash
console.log('versionHash:', x.browse)
