// SUM ZERO

// function addToZero(numbers) {
//     if (numbers.length < 2) {
//         return false
//     }
//     for(let i=0; i<numbers.length; i++) {
//         for(let j=i+1; j<numbers.length; j++) {
//             if (numbers[i] + numbers[j] === 0) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// let arr = [0, 1, 9, -4, -6, -9]

// console.log(addToZero(arr))

// the time complexity of this function is QUADRATIC or O(n^2)

// SUM ZERO SORT AND RECURSION

function addToZero(numbers) {
    if (numbers.length < 2) {
        return false
    }
    numbers.sort((a, b) => a - b);
    console.log(numbers)
    let i = 0
    while (numbers[i] <= 0) {
        console.log("new")
        let target = Math.abs(numbers[i])
        let j = Math.floor(numbers.length/2) - 1
        let arr = numbers.slice(i+1, numbers.length)
            if (findOpposite(target, j, arr)) {
                return true
            }
        i++
    }
    return false
}

function findOpposite(target, j, arr) {
    console.log(arr)
    if (arr[j] === target) {
        return true
    }
    if (j === 0) {
        if (arr[j+1] === target) {
            return true
        }
        return false
    }
    if (target < arr[j]) {
        j = Math.floor(arr.length/2)
        let newArr = arr.slice(0, j)
        return findOpposite(target, Math.floor(newArr.length/2) -1, newArr)
    } 
    if (target > arr[j]) {
        j = Math.floor(arr.length/2)
        let newArr = arr.slice(j, arr.length)
        return findOpposite(target, Math.floor(newArr.length/2), newArr)
    }
} 

let arr = [0, 1, 9, -4, -6, 12, 24, -9]

console.log(addToZero(arr))

// the time complexity of this function scales to O(n log n) or LINEARITHMIC

// UNIQUE CHARACTERS

function hasUniqueChars(string) {
    let strArr = string.split("")
    let used = []
    for (let i=0; i<strArr.length; i++){
        if (used.includes(strArr[i])) {
            return false
        }
        used.push(strArr[i])
    }
    return true
}

let str = "helomynas"

console.log(hasUniqueChars(str))

// the time complextiy of this function is LINEAR or O(n)

// PANGRAM SENTANCE

function isPangram(sentance) {
    let alphabet = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0,
    }

    for (let i=0; i<sentance.length; i++) {
        if (alphabet.hasOwnProperty(sentance[i])) {
            alphabet[sentance[i]] += 1
        }
    }
    for (let letter in alphabet) {
        if (alphabet[letter] < 1) {
            return false
        }
    }
    return true
}

let phrase = "The quick brown fox jumps over the lazy dog!"

console.log(isPangram(phrase))

// the time complexity for this function is LINEAR or O(n)

//  LONGEST WORD

function findLongestWord(wordArr) {
    let longest = 0
    for (let i=0; i<wordArr.length; i++) {
        if (wordArr[i].length > longest) {
            longest = wordArr[i].length
        }
    }
    return longest
}

let words = ["hello", "hi", "dog", "mother", "programming"]

console.log(findLongestWord(words))

// the time complexity for this function is LINEAR or O(n)
