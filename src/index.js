var through = require('through2')
var split = require('split2')

// import { startGame, sendFire } from './battleships'

// let game = startGame()

process.stdin
  .pipe(split('\n'))
  .pipe(through(function (chunk, enc, cb) {
    console.log(chunk)
    this.push(chunk)
  }))
