const pluralize = require("pluralize");

function countPeopleUnder25(peopleArray) {
    let count = 0;
    for (const person of peopleArray) {
        if (person.age < 25) {
            count++;
        }
    }
    const isOrAre = pluralize("is", count);
    return `There ${isOrAre} ${count} ${pluralize("person", count)} under 25.`;
}

function countFamilies(familyArray) {
    let count = 0;
    for (const family of familyArray) {
        if (family.numberOfPeople === 3) {
            count++;
        }
    }
    return `There ${pluralize("is", count)} ${count} ${pluralize(
        "family",
        count
    )}.`;
}

console.log(countPeopleUnder25());
countFamilies();
