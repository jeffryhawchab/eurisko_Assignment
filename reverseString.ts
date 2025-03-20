function ReverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(ReverseString("Hello World")); // Output: dlroW olleH
console.log(ReverseString("JavaScript")); // Output: tpircSavaJ