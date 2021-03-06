'use strict'
const test = require('tape')
const Readable = require('stream').Readable;  
const split = require('split2')

const upperCase = require('../src/transforms').upperCase
const filterOutgoingShots = require('../src/transforms').filterOutgoingShots
const filterIncomingShots = require('../src/transforms').filterIncomingShots
const filterValidShots = require('../src/transforms').filterValidShots
const recordFire = require('../src/transforms').recordFire

test('upper case stream', (t) => {
  const rs = new Readable()
  rs
    .pipe(upperCase())
    .on('data', (data) =>{
      t.equals(data.toString(), 'PIET') 
      t.end()
    })
  rs.push('piet')
  rs.push(null)
})

test('filter outgoing shots', (t) => {
  const rs = new Readable()
  t.plan(1)
  rs
    .pipe(filterOutgoingShots())
    .on('data', (data) =>{
      t.equals(data.toString(), 'FIRE A1') 
    })
  rs.push('FIRED A1')
  rs.push('FIRE A1')
  rs.push(null)
})

test('fire shots', (t) => {
  const rs = new Readable()
  t.plan(1)
  rs
    .pipe(upperCase())
    .pipe(filterOutgoingShots())
    .pipe(filterValidShots())
    .pipe(recordFire())
    .on('data', (data) => {
      t.equals(data.toString(), 'FIRED A1' )
    })
  rs.push('FIRED A1')
  rs.push('FIRE A1')
  rs.push(null)
})
