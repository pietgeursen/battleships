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

const filterResults = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "HIT";
});

const filterIncomingShots = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "FIRED";
});

const filterOutgoingShots = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "FIRE";
});

const filterTrashTalk = filter({ wantStrings: true }, str => {
  return str.split(' ')[0] == "TRASH";
});
const upperCaseStream = process.stdin.pipe(split()).pipe(upperCase);

upperCaseStream.pipe(filterValidShots).pipe(recordFire).pipe(process.stdout);
//.pipe(process.stdout)

upperCaseStream.pipe(filterTrashTalk).pipe(process.stdout);