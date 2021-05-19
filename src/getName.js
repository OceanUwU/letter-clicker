const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var names = [];

export default function getName(n) {
    if (names[n])
        return names[n];
    
    let letters = alphabet.length;
    let newName = "";
    let i = 0;
    do {
        if (i > 0)
		    n -= letters ** i
        let pos = Math.floor(n / (letters ** i)) % letters;
        newName = alphabet[pos] + newName;
    } while (letters ** ++i <= n)
    names[n] = (newName);
    return newName;
}