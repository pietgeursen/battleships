const test = require('tape');
const startGame = require("../lib/battleships.js").startGame
const receiveFire = require("../lib/battleships.js").receiveFire
const sendFire = require("../lib/battleships.js").sendFire

test('startGame', function (t) {
    const game = startGame({})
    t.equals(game.get('incoming').count(), 0, 'Has an empty list of incoming shots');
    t.equals(game.get('outgoing').count(), 0, 'Has an empty list of outgoing shots');
    t.end()
});

test('sendFire', function (t) {
    let game = startGame({})
    t.equals(game.get('incoming').count(), 0, 'Has an empty list of incoming shots');
    game = sendFire(game, "A1")
    t.equals(game.get('incoming').count(), 1, 'Has an list with 1 outgoing shots');
    t.end()
});
