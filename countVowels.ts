function contvowels(str: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split("").filter((letter) => vowels.includes(letter)).length;
}

console.log(contvowels("Eurisko")); 