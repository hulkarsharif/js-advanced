const fs = require("fs");

class Data {
    read(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }

    parse(content) {
        return content.split("\r\n");
    }

    parseRow(row) {
        return row.split(",");
    }
    format(fileUrl) {
        const content = this.read(fileUrl);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);

        const formattedDate = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];
                personObj[label] = value;
            }
            return personObj;
        });
        return formattedDate;
    }

    countbyProfession(fileUrl) {
        const formattedDate = this.format(fileUrl);
        const countProfession = formattedDate.reduce((acc, personObj) => {
            const prof = personObj.Profession;
            if (!acc[prof]) {
                acc[prof] = 0;
            }
            acc[prof]++;
            return acc;
        }, {});
        return countProfession;
    }

    countByAgeRange(fileUrl) {
        const formattedDate = this.format(fileUrl);
        const ageRangeCount = formattedDate.reduce(
            (acc, personObj) => {
                const age = personObj.Ages;
                if (age >= 10 && age <= 20) {
                    acc["10-20"]++;
                }
                if (age >= 21 && age <= 30) {
                    acc["21-30"]++;
                }
                if ((age >= 31) & (age <= 40)) {
                    acc["31-40"]++;
                }
                if ((age >= 51) & (age <= 60)) {
                    acc["51-60"]++;
                }
                return acc;
            },
            {
                "10-20": 0,
                "21-30": 0,
                "31-40": 0,
                "41-50": 0,
                "51-60": 0
            }
        );
        return ageRangeCount;
    }
}
const data = new Data();
console.log(data.format("data.csv"));
// console.log(data.countByAgeRange("data.csv"));
