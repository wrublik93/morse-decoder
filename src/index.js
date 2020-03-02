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
    
    /*check length of encoded letters*/
    if(expr.length % 10 !== 0) {
        do {
            expr = expr + '0';
        } while (expr.length % 10 === 0)
    };
    let arrayLetters = [];

    /*split a string of 10 characters*/
    for(let i = 0; i < expr.length; i += 10){
        arrayLetters.push(expr.slice(i, i + 10));
    };
    let decodeString = '';
    arrayLetters.forEach(function(item){

        /*check space in string*/
        if(item == '**********') {
            decodeString = decodeString + ' ';
        } else {

            /*split a string of letter of 2 characters*/
            let arrayIndividualLetter = [];
            for(let i = 0; i < item.length; i += 2){
                arrayIndividualLetter.push(item.slice(i, i + 2));
            };

            /*search dots and dashes*/
            let codeString = '';
            arrayIndividualLetter.forEach(function(letter){
            if(letter == '10') {
                codeString = codeString + '.';
            };
            if(letter == '11') {
                codeString = codeString + '-';
            };
            });
            decodeString = decodeString + MORSE_TABLE[codeString];
        }
    })
    return decodeString;
}

module.exports = {
    decode
}