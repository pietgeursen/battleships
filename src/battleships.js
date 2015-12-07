import {List, Map} from "immutable"
import {Readable} from "stream"

const startGame = (shipConfig) => {
  return Map({
    ships: List(createBoard(shipConfig)),
    incoming: List(),
    outgoing: List(),
  })
}

const createBoard = (shipConfig) => {
  return []
}

const sendFire = (game, position) => {
  return game.updateIn(["incoming"], (incoming) =>{
    return incoming.concat(position)
  })
}

const receiveFire = (game, position) => {
   s.push('hit\n')
   s.push(null)
}
 
exports.startGame = startGame
exports.sendFire = sendFire
exports.receiveFire = receiveFire
