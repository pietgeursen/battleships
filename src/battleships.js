import { List, Map } from 'immutable'

const Shot = (position) => {
	return Map({
		result: false,
		position: position
	})
}

const startGame = (shipConfig) => {
  return Map({
    ships: List(createBoard(shipConfig)),
    incoming: List(),
    outgoing: List()
  })
}

const createBoard = (shipConfig) => {
  return List(shipConfig)
}

const sendFire = (game, position) => {
  return game.updateIn(['outgoing'], (list) => {
    return list.push(Shot(position))
  })
}

const receiveFire = (game, position) => {
  return game.updateIn(['incoming'], (list) => {
    return list.push(position)
  })
}

const hasLost = (game) => {
	const ships = game.get("ships").toSet()
	const shots = game.get("incoming").toSet()	
	return ships.subtract(shots).count() === 0
}

const isOpponentsTurn = (game) => {
  const myTurnsCount = game.get('incoming').count()
  const theirTurnsCount = game.get('outgoing').count()
  return myTurnsCount <= theirTurnsCount
}

exports.startGame = startGame
exports.sendFire = sendFire
exports.receiveFire = receiveFire
exports.hasLost = hasLost
exports.isOpponentsTurn = isOpponentsTurn
