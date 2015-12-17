var through = require('through2')
var filter = require('through2-filter').ctor
var map = require('through2-map').ctor
var split = require('split2')

import {startGame, validMove, sendFire} from './battleships'

let game = startGame()

const upperCase = map({wantStrings: true}, (str) => {
  return str.toUpperCase()
})

const recordFire = map({wantStrings: true}, (str)=>{
  const position = str.split(' ')[1]  
  game = sendFire(game, position)
  return "FIRED " + position
})

const filterValidShots = filter({wantStings: true}, validMove)

const filterresults = filter({wantstrings: true}, (str) => {
  return str.split(' ')[0] == "HIT" 
})

const filterIncomingShots = filter({wantStrings: true}, (str) => {
  return str.split(' ')[0] == "FIRED" 
})

const filterOutgoingShots = filter({wantStrings: true}, (str) => {
  return str.split(' ')[0] == "FIRE" 
})



exports.upperCase = upperCase
exports.filterOutgoingShots = filterOutgoingShots
exports.filterIncomingShots = filterIncomingShots
exports.filterValidShots = filterValidShots
exports.recordFire = recordFire;
