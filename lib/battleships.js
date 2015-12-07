"use strict";

var _immutable = require("immutable");

var _stream = require("stream");

const startGame = shipConfig => {
  return (0, _immutable.Map)({
    ships: (0, _immutable.List)(createBoard(shipConfig)),
    incoming: (0, _immutable.List)(),
    outgoing: (0, _immutable.List)()
  });
};

const createBoard = shipConfig => {
  return [];
};

const sendFire = (game, position) => {
  return game.updateIn(["incoming"], incoming => {
    return incoming.concat(position);
  });
};

const receiveFire = (game, position) => {
  s.push('hit\n');
  s.push(null);
};

exports.startGame = startGame;
exports.sendFire = sendFire;
exports.receiveFire = receiveFire;