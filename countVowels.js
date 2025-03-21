function contvowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split("").filter(function (letter) { return vowels.includes(letter); }).length;
}
console.log(contvowels("Eurisko"));
