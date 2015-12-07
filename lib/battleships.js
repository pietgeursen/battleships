"use strict";

var _immutable = require("immutable");

var _stream = require("stream");

var through = require('through2');

const startGame = shipConfig => {
  let rs = (0, _stream.Readable)();
  return (0, _immutable.Map)({
    ships: (0, _immutable.List)(createBoard(shipConfig)),
    incoming: (0, _immutable.List)(),
    outgoing: (0, _immutable.List)(),
    readableStream: rs
  });
};

const createBoard = shipConfig => {
  return [];
};

const sendFire = (game, position) => {};

const receiveFire = (game, position) => {
  let s = game.get('readableStream');
  s.push('hit\n');
  s.push(null);
};

exports.startGame = startGame;
exports.receiveFire = receiveFire;