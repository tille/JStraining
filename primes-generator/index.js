#!/usr/bin/env node

'use strict'

const minimist = require('minimist')
const { build, findPrimes } = require('./utilities')

if (process.argv.length < 3) return console.log('Arguments not enough.')
const argv = minimist(process.argv.slice(2))
const command = argv._.shift()

switch (command) {
  case "getPrimes":
    try {
      build()
      console.log(...findPrimes(parseInt(argv['limit'])))
    } catch (err) {
      throw new Error("Cannot get primes.")
    }
    break
  default:
    console.error("Command not found.")
}