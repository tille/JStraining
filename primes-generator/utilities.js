'use strict'

const maxn = 1e6
let sieve = Array.from({length: maxn}, (_, i) => false).fill(true, 0, 2)

function build() {
    for (let i = 2; i * i <= maxn; i++) {
        if (!sieve[i]) {
            const notPrimes = { 
                *[Symbol.iterator]() { 
                    for (let j = i * i; j <= maxn; j += i) {
                        yield j
                    } 
                }
            }
            for (let key of [...notPrimes]) sieve[key] = true
        }
    }
}

function* findPrimes(limit, i = 0) {
    while(limit) {
        if (!sieve[i++]) {
            limit--
            yield i-1
        }
    }
}

module.exports = {
    build,
    findPrimes
}
  