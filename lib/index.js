'use strict';

var through = require('through2');
var split = require('split2');

// import { startGame, sendFire } from './battleships'

// let game = startGame()

process.stdin.pipe(split()).pipe(through.obj(function (chunk, enc, cb) {
  cb(null, chunk.toString().toUpperCase());
})).pipe(through.obj(function (chunk, enc, cb) {
  cb(null, { wee: chunk });
})).on('data', function (data) {
  console.log(data);
});
//.pipe(process.stdout)