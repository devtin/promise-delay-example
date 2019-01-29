#!/usr/bin/env node
const chalk = require('chalk')
const colors = ['yellow', 'blue', 'red']

const whatToPrint = ['eseC 1#', 'eD   ', 'nóicaprusU   ', 'onreiboG #2', 'eD   ', 'nóicisnarT   ', 'senoiccelE #3', 'serbiL   ']

const delay = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
)

async function myFirstAsync () {
    for (let i = 0; i < whatToPrint.length; i++) {
        const aThird = (i + 1) % 3 === 0
        const color = chalk[colors[Math.floor(i / 3)]]

        // reverse and print the line
        console.log(color(whatToPrint[i].split('').reverse().join('')), aThird ? `\n` : ``)

        // delays the execution
        await delay(aThird ? 1000 : 500)
    }
}

process.stdout.write('\033c')
myFirstAsync()
