function magicCipher(sentence, cipher) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (cipher[char] !== undefined) {
            result += cipher[char];
        } else {
            result += char;
        }
    }
    return result;
}
magicCipher("add me on facebook", { a: "c", d: "q" }); // "cqq me on fccebook"
magicCipher("where are you?", { v: "l", "?": "!" }); // "where are you!"
magicCipher("twmce", { m: "n", t: "d", w: "a" }); //  "dance"
