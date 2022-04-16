const Mcrypt = {}

/**
 * @param {String} txt 
 * @param {Array} idMatrix
 * */ 


Mcrypt.strToMatrix = (txt = String) => {
    let txtLen = txt.length;
    if ((txtLen % 2) != 0) {

    } else {

    }
    let matrixRows = [];
    let matrixCols = [];
    let letterIndex = 0;
    for (let i = 0; i <= txtLen; i++) {
        for (let j = 0; j < 2; j++) {
            let char = txt.charAt(letterIndex);
            matrixCols.push(char);
            console.log();
            letterIndex += 1;
        }
        matrixRows.push(matrixCols);
        matrixCols = [];
        if (letterIndex == txtLen) {
            console.log(matrixRows);
            break;
        }
    }
    return matrixRows;
}

Mcrypt.charToNum = (char) => {
    let num;
    switch (char) {
        case "!":
            return num = 33;
            break;

        case '"':
            return num = 34;
            break;

        case "#":
            return num = 35;
            break;

        case "$":
            return num = 36;
            break;

        case "%":
            return num = 37;
            break;

        case "&":
            return num = 38;
            break;

        case "'":
            return num = 39;
            break;

        case "(":
            return num = 40;
            break;

        case ")":
            return num = 41;
            break;

        case "*":
            return num = 42;
            break;

        case "+":
            return num = 43;
            break;

        case "-":
            return num = 45;
            break;

        case ".":
            return num = 46;
            break;

        case "/":
            return num = 47;
            break;

        case ":":
            return num = 58;
            break;

        case ";":
            return num = 59;
            break;

        case "<":
            return num = 60;
            break;

        case "=":
            return num = 61;
            break;

        case ">":
            return num = 62;
            break;

        case "?":
            return num = 63;
            break;

        case "@":
            return num = 64;
            break;

        case "A":
            return num = 65;
            break;

        case "B":
            return num = 66;
            break;

        case "C":
            return num = 67;
            break;

        case "D":
            return num = 68;
            break;

        case "E":
            return num = 69;
            break;

        case "F":
            return num = 70;
            break;

        case "G":
            return num = 71;
            break;

        case "H":
            return num = 72;
            break;

        case "I":
            return num = 73;
            break;

        case "J":
            return num = 74;
            break;

        case "K":
            return num = 75;
            break;

        case "L":
            return num = 76;
            break;

        case "M":
            return num = 77;
            break;

        case "N":
            return num = 78;
            break;

        case "O":
            return num = 79;
            break;

        case "P":
            return num = 80;
            break;

        case "Q":
            return num = 81;
            break;

        case "R":
            return num = 82;
            break;

        case "S":
            return num = 83;
            break;

        case "T":
            return num = 84;
            break;

        case "U":
            return num = 85;
            break;

        case "V":
            return num = 86;
            break;

        case "W":
            return num = 87;
            break;

        case "X":
            return num = 88;
            break;

        case "Y":
            return num = 89;
            break;

        case "Z":
            return num = 90;
            break;

        case "[":
            return num = 91;
            break;

        case "]":
            return num = 93;
            break;

        case "^":
            return num = 94;
            break;

        case "_":
            return num = 95;
            break;

        case "`":
            return num = 96;
            break;

        case "a":
            return num = 97;
            break;

        case "b":
            return num = 98;
            break;

        case "c":
            return num = 99;
            break;

        case "d":
            return num = 100;
            break;

        case "e":
            return num = 101;
            break;

        case "f":
            return num = 102;
            break;

        case "g":
            return num = 103;
            break;

        case "h":
            return num = 104;
            break;

        case "i":
            return num = 105;
            break;

        case "j":
            return num = 106;
            break;

        case "k":
            return num = 107;
            break;

        case "l":
            return num = 108;
            break;

        case "m":
            return num = 109;
            break;

        case "n":
            return num = 110;
            break;

        case "o":
            return num = 111;
            break;

        case "p":
            return num = 112;
            break;

        case "q":
            return num = 113;
            break;

        case "r":
            return num = 114;
            break;

        case "s":
            return num = 115;
            break;

        case "t":
            return num = 116;
            break;

        case "u":
            return num = 117;
            break;

        case "v":
            return num = 118;
            break;

        case "w":
            return num = 119;
            break;

        case "x":
            return num = 120;
            break;

        case "y":
            return num = 121;
            break;

        case "z":
            return num = 122;
            break;

        case "{":
            return num = 123;
            break;

        case "|":
            return num = 124;
            break;

        case "}":
            return num = 125;
            break;

        case "~":
            return num = 126;
            break;

        default:
            return num = Number(char);
            break;
    }
}

Mcrypt.mtxToNum = (arr = Array) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = charToNum(arr[i][j]);
        }
    }
    return arr;
}


Mcrypt.encryptedNumArr = (numArr = Array, idMatrix = Array) => {
    let matrixRows = [];
    let matrixCols = [];
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < idMatrix.length; j++) {
            let k = 0
            let component = 0;
            while (k < idMatrix.length) {
                let factor = numArr[i][k] * idMatrix[k][j]
                component = component + factor;
                k += 1;
            }
            matrixCols.push(component);
            componente = 0;
        }
        matrixRows.push(matrixCols);
        matrixCols = [];
    }
    return matrixRows;
}

Mcrypt.numToChar = (num) => {
    let char;
    num = parseInt(num);
    if (num < 10) {
        num += 10;
    }
    num += 23;

    switch (num) {
        case 33:
            return char = "!";
            break;

        case 34:
            return char = '"';
            break;

        case 35:
            return char = "#";
            break;

        case 36:
            return char = "$";
            break;

        case 37:
            return char = "%";
            break;

        case 38:
            return char = "&";
            break;

        case 39:
            return char = "'";
            break;

        case 40:
            return char = "(";
            break;

        case 41:
            return char = ")";
            break;

        case 42:
            return char = "*";
            break;

        case 43:
            return char = "+";
            break;

        case 45:
            return char = "-";
            break;

        case 46:
            return char = ".";
            break;

        case 47:
            return char = "/";
            break;

        case 55:
            return char = "ñ";
            break;

        case 56:
            return char = "Ñ";
            break;

        case 57:
            return char = "``";
            break;

        case 58:
            return char = ":";
            break;

        case 59:
            return char = ";";
            break;

        case 60:
            return char = "<";
            break;

        case 61:
            return char = "=";
            break;

        case 62:
            return char = ">";
            break;

        case 63:
            return char = "?";
            break;

        case 64:
            return char = "@";
            break;

        case 65:
            return char = "A";
            break;

        case 66:
            return char = "B";
            break;

        case 67:
            return char = "C";
            break;

        case 68:
            return char = "D";
            break;

        case 69:
            return char = "E";
            break;

        case 70:
            return char = "F";
            break;

        case 71:
            return char = "G";
            break;

        case 72:
            return char = "H";
            break;

        case 73:
            return char = "I";
            break;

        case 74:
            return char = "J";
            break;

        case 75:
            return char = "K";
            break;

        case 76:
            return char = "L";
            break;

        case 77:
            return char = "M";
            break;

        case 78:
            return char = "N";
            break;

        case 79:
            return char = "O";
            break;

        case 80:
            return char = "P";
            break;

        case 81:
            return char = "Q";
            break;

        case 82:
            return char = "R";
            break;

        case 83:
            return char = "S";
            break;

        case 84:
            return char = "T";
            break;

        case 85:
            return char = "U";
            break;

        case 86:
            return char = "V";
            break;

        case 87:
            return char = "W";
            break;

        case 88:
            return char = "X";
            break;

        case 89:
            return char = "Y";
            break;

        case 90:
            return char = "Z";
            break;

        case 91:
            return char = "[";
            break;

        case 93:
            return char = "]";
            break;

        case 94:
            return char = "^";
            break;

        case 95:
            return char = "_";
            break;

        case 96:
            return char = "`";
            break;

        case 97:
            return char = "a";
            break;

        case 98:
            return char = "b";
            break;

        case 99:
            return char = "c";
            break;

        case 100:
            return char = "d";
            break;

        case 101:
            return char = "e";
            break;

        case 102:
            return char = "f";
            break;

        case 103:
            return char = "g";
            break;

        case 104:
            return char = "h";
            break;

        case 105:
            return char = "i";
            break;

        case 106:
            return char = "j";
            break;

        case 107:
            return char = "k";
            break;

        case 108:
            return char = "l";
            break;

        case 109:
            return char = "m";
            break;

        case 110:
            return char = "n";
            break;

        case 111:
            return char = "o";
            break;

        case 112:
            return char = "p";
            break;

        case 113:
            return char = "q";
            break;

        case 114:
            return char = "r";
            break;

        case 115:
            return char = "s";
            break;

        case 116:
            return char = "t";
            break;

        case 117:
            return char = "u";
            break;

        case 118:
            return char = "v";
            break;

        case 119:
            return char = "w";
            break;

        case 120:
            return char = "x";
            break;

        case 121:
            return char = "y";
            break;

        case 122:
            return char = "z";
            break;

        case 123:
            return char = "{";
            break;

        case 124:
            return char = "|";
            break;

        case 125:
            return char = "}";
            break;

        case 126:
            return char = "~";
            break;

        default:
            return char = num.toString();
            break;
    }

}

Mcrypt.numToStr = (str) => {
    if ((str.length % 2) != 0) {
        str = str + "5";
    }
    let substring1 = "";
    let substring2 = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 2) {
            substring1 = str.substring(0, i);
            substring2 += numToChar(substring1);
            str = str.substring(i);
            i = 0;

        }

    }
    substring2 += numToChar(str);
    return substring2;
}

Mcrypt.mtxToStr = (numMtx = Array) => {
    let encryptedStrCode = "";
    let encryptedStrNum = "";
    for (let i = 0; i < numMtx.length; i++) {
        for (let j = 0; j < numMtx[i].length; j++) {
            strNum = numMtx[i][j].toString();
            encryptedStrNum = numToStr(strNum);
            encryptedStrCode = encryptedStrCode + encryptedStrNum;
        }
    }
    return encryptedStrCode;
}

Mcrypt.mcrypt = (txt, idMatrix) => {
    let arr = strToMatrix(txt);
    let numArr = mtxToNum(arr);
    let matrixNumEncrypted = (encryptedNumArr(numArr, idMatrix));
    let encryptedStr = mtxToStr(matrixNumEncrypted);
    console.log(matrixNumEncrypted);
    console.log(encryptedStr);
    return encryptedStr;

}
module.exports = Mcrypt.mcrypt;