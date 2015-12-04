import {List, Map} from "immutable"

const startGame = (shipConfig) => {
  return Map({
    ships: List(),
    incoming: List(),
    outgoing: List()
  })
}

const createBoard = (shipConfig) => {
  return {}
}

module.exports = startGame

