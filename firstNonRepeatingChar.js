function firstNonRepeatingChar(str) {
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
// Test cases
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("racecar"));
console.log(firstNonRepeatingChar("aabb"));
