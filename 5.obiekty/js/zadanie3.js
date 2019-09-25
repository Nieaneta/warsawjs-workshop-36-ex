let myGroup = {
    menthor: "Wojtek",
    members: [
        {
            name: "Janek",
            age: 22
        },
        {
            name: "Asia",
            age: 12
        },
        {
            name: "Marek",
            age: 33
        },
        {
            name: "Andrzej",
            age: 44
        },
        {
            name: "Jaś",
            age: 24
        },
        {
            name: "Wokay JSON",
            age: 19
        }
    ]
};

console.log(myGroup.menthor);
console.log(myGroup.members.length);

const age = myGroup.members;
console.log(age);

const ageSum = age.reduce(function(prev, curr) {
    return prev + curr.age;
}, 0);

console.log(ageSum);

const average = ageSum / age.length;
console.log(average);
