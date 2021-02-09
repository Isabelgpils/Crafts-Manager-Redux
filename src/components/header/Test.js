// "9" => 9

// "+ 1 2" => 3 // This is (1 + 2)

// "+ + 1 2 30" => 33 // This is ((1+2)+30)

// "+ + 12 16 * 10 4" => 68 // This is ((12+16)+(10*4))

const newThing = (string) => {
    let mathRegEx = /[^0-9]/g
    let numRegEx = /\d/g
    let mathArr = [];
    let numbers = [];
    let newString = string.splt("");
    return mathArr = newString.filter(char => char === (mathRegEx))
    return numbers = newString.filter(char => char === (numRegEx))
}

console.log(newThing("+ 1 2"));