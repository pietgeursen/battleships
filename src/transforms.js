var through = require('through2')
var filter = require('through2-filter')
var map = require('through2-map')
var split = require('split2')

import {startGame, validMove, sendFire} from './battleships'

let game = startGame()

const upperCase = map({wantStrings: true}, (str) => {
  return str.toUpperCase()
})

const recordFire = through.obj((chunk, enc, cb)=>{
  game = sendFire(game, chunk)
  
  cb(null, chunk)
})

const filterValidShots = filter({wantStings: true}, validMove)

const filterresults = filter({wantstrings: true}, (str) => {
  return str.split(' ')[0] == "HIT" 
})

const filterIncomingShots = filter({wantStrings: true}, (str) => {
  return str.split(' ')[0] == "FIRED" 
})

const filterOutgoingShots = filter.ctor({wantStrings: true}, (str) => {
  return str.split(' ')[0] == "FIRE" 
})



exports.upperCase = upperCase
exports.filterOutgoingShots = filterOutgoingShots
exports.filterIncomingShots = filterIncomingShots
exports.recordFire = recordFire;
