import {List} from "immutable"

const startGame = (shipConfig) => {
  let ships = List([])
  let incoming = List([])
  let outgoing = List([])

  return {
    getShips: () => {return ships},
    getIncoming: () => {return incoming},
    getOutgoing: () => {return outgoing}
  }
}

module.exports = startGame

