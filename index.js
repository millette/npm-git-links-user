'use strict'

// npm
const { ret, Doit } = require('npm-git-links')

console.log('RET:', ret)

const x = new Doit(ret.repository, ret.headHash)
console.log(x.browse)

x.clearVersion()
console.log(x.browse)

x.version = ret.versionHash
console.log(x.browse)
