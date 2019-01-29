const whatToPrint = ['eseC 1#', 'eD   ', 'nóicaprusU   ', 'onreiboG #2', 'eD   ', 'nóicisnarT   ', 'senoiccelE #3', 'serbiL   ']

const delay = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
)

async function myFirstAsync () {
    for (let i = 0; i < whatToPrint.length; i++) {
        // reverse and print the line
        console.log(whatToPrint[i].split('').reverse().join(''))

        // delays the execution
        await delay(500)
    }
}
