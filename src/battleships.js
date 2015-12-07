import {List, Map} from "immutable"
import {Readable} from "stream"
var through = require('through2')

const startGame = (shipConfig) => {
  let rs = Readable()
  return Map({
    ships: List(createBoard(shipConfig)),
    incoming: List(),
    outgoing: List(),
    readableStream: rs
  })
}

const createBoard = (shipConfig) => {
  return []
}

const sendFire = (game, position) => {

}

const receiveFire = (game, position) => {
   let s = game.get('readableStream')
   s.push('hit\n')
   s.push(null)
}
 
exports.startGame = startGame
exports.receiveFire = receiveFire
