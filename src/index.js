var through = require('through2')
var filter = require('through2-filter')
var map = require('through2-map')
var split = require('split2')

import {startGame, validMove, sendFire} from './battleships'

let game = startGame()

const upperCase = map({wantStrings: true}, (str) => {
  return str.toUpperCase()
})

const filterValidShots = filter({wantStings: true}, validMove)
const recordFire = through.obj((chunk, enc, cb)=>{
  game = sendFire(game, chunk)
  cb(null, chunk)
})

process.stdin
  .pipe(split())
  .pipe(upperCase)
  .pipe(filterValidShots)
  .pipe(recordFire)
  .on('data', function(data){
    console.log(data)  
    console.log(game)
  })
  //.pipe(process.stdout)
