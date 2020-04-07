#!/usr/bin/env node

'use strict'

const minimist = require('minimist')
if (process.argv.length < 3) return console.log('Arguments not enough.')
const argv = minimist(process.argv.slice(2))

const command = argv._.shift()
const maxn = 1e6
let sieve = Array.from({length: maxn}, (_, i) => false).fill(true, 0, 2)

function build() {
    for (let i = 2; i * i <= maxn; i++) {
        if (!sieve[i]) {
            const notPrimes = { 
                *[Symbol.iterator]() { 
                    for (let j = i * i; j <= maxn; j += i) yield j 
                }
            }
            for (let key of [...notPrimes]) sieve[key] = true
        }
    }
}

function* findPrimes(limit) {
    let i = 0, curLimit = 1; 
    for (; curLimit < limit; i++) {
        if (!sieve[i]) {
            curLimit++
            yield i
        }
    }
    return i
}

switch (command) {
    case "getPrimes":
        try {
            build()
            let { limit } = argv
            limit = parseInt(limit)
            const getPrime = findPrimes(limit)
            while (limit-- > 0) {
                console.log(getPrime.next());
            }
        } catch (err) {
            throw new Error("Cannot get primes.")
        }
        break
    default:
        console.error("Command not found.")
}