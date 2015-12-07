'use strict';

var _battleships = require('./battleships');

var through = require('through2');
var split = require('split2');

let game = (0, _battleships.startGame)();

process.stdin.pipe(split('\n')).pipe(through(function (chunk, enc, cb) {
  console.log(chunk);
  this.push(chunk);
}));