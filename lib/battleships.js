"use strict";

var _immutable = require("immutable");

const startGame = shipConfig => {
  let ships = (0, _immutable.List)([]);
  let incoming = (0, _immutable.List)([]);
  let outgoing = (0, _immutable.List)([]);

  return {
    getShips: () => {
      return ships;
    },
    getIncoming: () => {
      return incoming;
    },
    getOutgoing: () => {
      return outgoing;
    }
  };
};

module.exports = startGame;