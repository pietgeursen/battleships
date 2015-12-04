const test = require('tape');
import startGame from "../lib/battleships.js"

test('startGame', function (t) {
    t.plan(1);
    let game = startGame({})
    t.equals(game.get('incoming').count(), 0);
});
