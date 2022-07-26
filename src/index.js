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
    let array = []
    // разбиваем на строки по 10 символов
    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.slice(i, i + 10))
    }

    for (let i = 0; i < array.length; i++) {
        // отрезаем лишние нули (до первой единицы)
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 1) { 
                array[i] = array[i].slice(j, array[i].length)
                break
            }
        }
        // заменяем на - и .
        array[i] = array[i].replace(/11/g, '-')
        array[i] = array[i].replace(/10/g, '.')
    }

    let res = ''
    for (let i = 0; i < array.length; i++) {
        // записываем в итоговую строку пробел либо соотв. букву из таблицы 
        if (array[i] == '**********') {
            res = res + ' '
        } else {
          res = res + MORSE_TABLE[array[i]]  
        }
    }
    return res
}

module.exports = {
    decode
}