'use strict';

var _battleships = require('./battleships');

var through = require('through2');
var filter = require('through2-filter');
var map = require('through2-map');
var split = require('split2');

let game = (0, _battleships.startGame)();

const upperCase = map({ wantStrings: true }, str => {
  return str.toUpperCase();
});

const recordFire = through.obj((chunk, enc, cb) => {
  game = (0, _battleships.sendFire)(game, chunk);

  cb(null, chunk);
});

const filterValidShots = filter({ wantStings: true }, _battleships.validMove);

const filterresults = filter({ wantstrings: true }, str => {
  return str.split(' ')[0] == "HIT";
});

const filterIncomingShots = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "FIRED";
});

const filterOutgoingShots = filter.ctor({ wantStrings: true }, str => {
  return str.split(' ')[0] == "FIRE";
});

exports.upperCase = upperCase;
exports.filterOutgoingShots = filterOutgoingShots;
exports.filterIncomingShots = filterIncomingShots;
exports.recordFire = recordFire;