const findTheOldest = function(people) {
    let oldest = {
        name: "",
        years: 0,
    };

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            if (2024 > oldest.years) {
                oldest.name = people[i].name;
                oldest.years = 2024 - people[i].yearOfBirth;
            }
        } else 
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldest.years) {
            oldest.name = people[i].name;
            oldest.years = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
