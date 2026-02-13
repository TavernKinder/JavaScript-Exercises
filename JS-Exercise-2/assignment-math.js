// array of characters
// 0 is number, 1 is uppercase letter, 2 is lowercase letter, 3 is special character
const char =[
    ['a','b'],
    ['A','B'],
    ['0','1'],
    ['!','#']
] ;

function shuffleToString(array) {
    let currentIndex = array.length;
    let output = '';
    while (currentIndex != 0) {
        randomSpot = Math.floor(Math.random() * currentIndex)
        output = output + array[randomSpot];
        array.splice(randomSpot, 1);
        currentIndex--;
    }
    return output;
}


function getType(type, length) {
    let output = [];
    let readType = type;
    for (let i = 0; i < length; i++) {
        if (readType[0] > 0) {
            output.push(0);
            readType[0]--;
        } else if (readType[1] > 0) {
            output.push(1);
            readType[1]--;
        } else if (readType[2] > 0) {
            output.push(2);
            readType[2]--;
        } else if (readType[3] > 0) {
            output.push(3);
            readType[3]--;
        } else {
            output.push(Math.floor(Math.random() * 4));
        }
    }
    return output;
}

//*********************** Get Random Char from Calculated Type*/
function getRandomChar(type) {
    let password = '';
    password = password + char[type][Math.floor(Math.random() * char[type].length)];
    return password;
}

function generatePassword(length, type) {
    let password = [];
    let typeArr = getType(type, length);
    for (let i = 0; i < length; i++) {
        password[i] = getRandomChar(typeArr[i]);
    }
    password = shuffleToString(password);
    return password;
}


//*********************** main */
function main() {
    const passwordLength = 8;
    const requirements = [
        2, // at least one lowercase letter
        2, // at least one uppercase letter
        2, // at least one number
        2  // at least one special character
    ]
    const password = generatePassword(passwordLength, requirements);
    console.log(password);
}
main();