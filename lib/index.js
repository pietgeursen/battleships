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

const filterValidShots = filter({ wantStings: true }, _battleships.validMove);
const recordFire = through.obj((chunk, enc, cb) => {
  game = (0, _battleships.sendFire)(game, chunk);
  cb(null, chunk);
});

process.stdin.pipe(split()).pipe(upperCase).pipe(filterValidShots).pipe(recordFire).on('data', function (data) {
  console.log(data);
  console.log(game);
});
//.pipe(process.stdout)