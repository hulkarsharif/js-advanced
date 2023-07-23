//1.Write a method reverse() for String.prototype that returns a reversed version of the string. For example, "Hello".reverse() should return "olleH".
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
// console.log("Hello".reverse()); //"olleH"

//2.Write a method removeVowels() for String.prototype that removes all vowels from the string. For example, "Hello".removeVowels() should return "Hll"

String.prototype.removeVowels = function () {
    const vowels = "aouie";
    let str = "";
    for (let i = 0; i, this.length; i++) {
        if (!vowels.includes(this[i])) {
            str += this[i];
        }
    }
    return str;
};
console.log("Hello".removeVowels());
