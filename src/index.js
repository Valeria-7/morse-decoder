const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    console.log(expr)
    let array = []
    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.slice(i, i + 10))
    }
    //console.log(array) 

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 1) {
                array[i] = array[i].slice(j, array[i].length)
                break
            }
        }
    }
    //console.log(array) // ['1111', '10']

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/11/g, '-')
        array[i] = array[i].replace(/10/g, '.')
    }
    //console.log(array)

    let res = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '**********') {
            res = res + ' '
        } else {
          res = res + MORSE_TABLE[array[i]]  
        }
    }
    //console.log(res)
    return res
}
//decode('0011101110000000101100101110100010111010**********000000001100101010100000000010**********001011111000001111110010111010000000101000111011100000000010')

module.exports = {
    decode
}