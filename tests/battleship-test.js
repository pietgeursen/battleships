const test = require('tape');
const startGame = require("../lib/battleships.js").startGame
const receiveFire = require("../lib/battleships.js").receiveFire

test('startGame', function (t) {
    const game = startGame({})
    t.equals(game.get('incoming').count(), 0, 'Has an empty list of incoming shots');
    t.equals(game.get('outgoing').count(), 0, 'Has an empty list of outgoing shots');
    t.end()
});

test('readable stream publishes true when hit', function (t) {
    const game = startGame({})
    const stream = game.get('readableStream')
    stream.pipe(process.stdout)
    receiveFire(game)
    t.end()
});
