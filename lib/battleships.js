'use strict';

var _immutable = require('immutable');

const Shot = position => {
  return (0, _immutable.Map)({
    result: false,
    position: position
  });
};

const validMove = move => {
  let reg = /\b[A-L]((10)|[1-9])\b/;
  return reg.test(move);
};

const startGame = shipConfig => {
  return (0, _immutable.Map)({
    ships: (0, _immutable.List)(createBoard(shipConfig)),
    incoming: (0, _immutable.List)(),
    outgoing: (0, _immutable.List)()
  });
};

const createBoard = shipConfig => {
  return (0, _immutable.List)(shipConfig);
};

const sendFire = (game, position) => {
  return game.updateIn(['outgoing'], list => {
    return list.push(Shot(position));
  });
};

const receiveFire = (game, position) => {
  return game.updateIn(['incoming'], list => {
    return list.push(position);
  });
};

const hasLost = game => {
  const ships = game.get('ships').toSet();
  const shots = game.get('incoming').toSet();
  return ships.subtract(shots).count() === 0;
};

const isOpponentsTurn = game => {
  const myTurnsCount = game.get('incoming').count();
  const theirTurnsCount = game.get('outgoing').count();
  return myTurnsCount <= theirTurnsCount;
};

exports.startGame = startGame;
exports.sendFire = sendFire;
exports.receiveFire = receiveFire;
exports.hasLost = hasLost;
exports.isOpponentsTurn = isOpponentsTurn;
exports.validMove = validMove;