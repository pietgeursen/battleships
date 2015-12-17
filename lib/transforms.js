'use strict';

var _battleships = require('./battleships');

var through = require('through2');
var filter = require('through2-filter').ctor;
var map = require('through2-map').ctor;
var split = require('split2');

let game = (0, _battleships.startGame)();

const upperCase = map({ wantStrings: true }, str => {
  return str.toUpperCase();
});

const recordFire = map({ wantStrings: true }, str => {
  const position = str.split(' ')[1];
  game = (0, _battleships.sendFire)(game, position);
  return "FIRED " + position;
});

const filterValidShots = filter({ wantStings: true }, _battleships.validMove);

const filterresults = filter({ wantstrings: true }, str => {
  return str.split(' ')[0] == "HIT";
});

const filterIncomingShots = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "FIRED";
});

const filterOutgoingShots = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "FIRE";
});

exports.upperCase = upperCase;
exports.filterOutgoingShots = filterOutgoingShots;
exports.filterIncomingShots = filterIncomingShots;
exports.filterValidShots = filterValidShots;
exports.recordFire = recordFire;