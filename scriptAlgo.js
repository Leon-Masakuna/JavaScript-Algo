// Exercice 1
function caesarCipher(text, k) {
    // inserer le code ici
    let textCesar = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + k) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + k) % 26) + 97);
            }
        }
        textCesar += char;
    }
    return textCesar;
}
// Exercice 2
function multiple35(n) {
    // inserer le code ici
    let sumOfMultiples = 0;
    for (let j = 0; j < n; j++) {
        if (j % 5 == 0 || j % 3 == 0) {
            sumOfMultiples += j;
        }
    }
    return sumOfMultiples;
}
// Exercice 3
function calculFacture(items, tva) {
    // inserer le code ici
    let facture = 0;

    items.forEach((item) => {
        let allItems = 0;
        let beforeTva = 0;

        if (item.estTaxable) {
            beforeTva = item.price * item.n;
            allItems = beforeTva + beforeTva * tva;
        } else {
            allItems = item.price * item.n;
        }
        facture = facture + allItems;
        totalFacture = Number(facture);
    });

    return totalFacture.toFixed(2) * 1;
}
// Exercice 4
function maxChar(texte) {
    //insérer le code ici
    const charMap = {};
    let max = 0;
    let maxChar;

    for (let char of texte) {
        if (char !== " ") {
            if (charMap[char]) {
                charMap[char]++;
            } else {
                charMap[char] = 1;
            }
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar.toLowerCase();
}
// Exercice 5
function signRatios(nums) {
    // inserer le code ici
    let positif = 0;
    let negatif = 0;
    let nuls = 0;
    let rapPos = 0;
    let rapNeg = 0;
    let rapNuls = 0;
    if (nums.length == 0) {
        return "0.000000 0.000000 0.000000";
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positif++;
        } else if (nums[i] < 0) {
            negatif++;
        } else {
            nuls++;
        }
    }
    rapPos = (positif / nums.length).toFixed(6);
    rapNeg = (negatif / nums.length).toFixed(6);
    rapNuls = (nuls / nums.length).toFixed(6);

    let resultOfAll = rapPos + " " + rapNeg + " " + rapNuls;
    return resultOfAll;
}