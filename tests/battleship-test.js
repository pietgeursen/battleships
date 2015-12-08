const test = require('tape')
const startGame = require('../lib/battleships.js').startGame
const receiveFire = require('../lib/battleships.js').receiveFire
const sendFire = require('../lib/battleships.js').sendFire
const hasLost = require('../lib/battleships.js').hasLost
const isOpponentsTurn = require('../lib/battleships.js').isOpponentsTurn

test('startGame', function (t) {
  const game = startGame([])
  t.equals(game.get('incoming').count(), 0, 'Has an empty list of incoming shots')
  t.equals(game.get('outgoing').count(), 0, 'Has an empty list of outgoing shots')
  t.end()
})

test('sendFire', function (t) {
  let game = startGame([])
  t.equals(game.get('outgoing').count(), 0, 'Has an empty list of incoming shots')
  game = sendFire(game, 'A1')
  t.equals(game.get('outgoing').count(), 1, 'Has a list with 1 incoming shots')
  game = sendFire(game, 'A3')
  t.equals(game.get('outgoing').count(), 2, 'Has a list with 2 incoming shots')
  t.end()
})

test('receiveFire', function (t) {
  let game = startGame([])
  t.equals(game.get('incoming').count(), 0, 'Has an empty list of outgoing shots')
  game = receiveFire(game, 'A1')
  t.equals(game.get('incoming').count(), 1, 'Has a list with 1 outgoing shots')
  game = receiveFire(game, 'A3')
  t.equals(game.get('incoming').count(), 2, 'Has a list with 2 outgoing shots')
  t.end()
})

test('hasLost', function (t) {
  let game = startGame(['A1', 'A2', 'A3'])
  t.false(hasLost(game), 'game is not over')
  game = receiveFire(game, 'A1')
  t.false(hasLost(game), 'game is not over')
  game = receiveFire(game, 'A2')
  t.false(hasLost(game), 'game is not over')
  game = receiveFire(game, 'A4')
  t.false(hasLost(game), 'game is not over')
  game = receiveFire(game, 'A3')
  t.true(hasLost(game), 'game is over')
  t.end()
})

test('isOpponentsTurn', function (t) {
  let game = startGame(['A1', 'A2', 'A3'])
  t.true(isOpponentsTurn(game), 'is opponents turn')
  game = receiveFire(game, 'A1')
  t.false(isOpponentsTurn(game), 'is not opponents turn')
  t.end()
})
