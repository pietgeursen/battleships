"use strict";

var _immutable = require("immutable");

const startGame = shipConfig => {
  return (0, _immutable.Map)({
    ships: (0, _immutable.List)(),
    incoming: (0, _immutable.List)(),
    outgoing: (0, _immutable.List)()
  });
};

const createBoard = shipConfig => {
  return {};
};

module.exports = startGame;