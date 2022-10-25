const input = document.querySelector("#userInput");
const output = document.querySelector("#userOutput");

const rules = [
    {
        original: "a",
        replace: "ai"
    },
    {
        original: "e",
        replace: "enter"
    },
    {
        original: "i",
        replace: "imes"
    },
    {
        original: "o",
        replace: "ober"
    },
    {
        original: "u",
        replace: "ufat"
    }
]

function checkLetra(letra) {
    for (let item of rules) {
        if (item.original === letra) {
            return item;
        }
    }

    return letra;
}

function nonEmpty(text) {
    if (text != "") { return true; }
    return false;
}

function encrypt() {
    var originalText = input.value;
    var outputText = '';

    if (nonEmpty(originalText)) {

        for (let c in originalText) {

            var obj = checkLetra(originalText[c]);

            if (typeof obj == 'object') {
                outputText = outputText.concat(obj.replace);
            } else {
                outputText = outputText.concat(obj);
            }

        }

    } else {
        output.placeholder = "Por favor, insira um texto."
    }

    output.value = outputText;
}

function decrypt() {
    var originalText = input.value;
    var outputText = originalText;

    if (nonEmpty(outputText)) {

        for (let item in rules) {
            var obj = rules[item];
            if (outputText.search(obj.replace) != -1) {
                outputText = outputText.replaceAll(obj.replace, obj.original);
            }
        }

    } else {
        output.placeholder = "Por favor, insira um texto."
    }

    output.value = outputText;
}