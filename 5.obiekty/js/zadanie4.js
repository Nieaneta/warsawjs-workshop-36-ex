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

let classAvaiable = [
    {
        name: "A",
        number: 1,
        slots: 5,
        minAge: 10
    },
    {
        name: "B",
        number: 2,
        slots: 10,
        minAge: 15
    },
    {
        name: "C",
        number: 3,
        slots: 10,
        minAge: 0
    },
    {
        name: "D",
        number: 4,
        slots: 15,
        minAge: 30
    },
    {
        name: "E",
        number: 5,
        slots: 2,
        minAge: 5
    },
    {
        name: "F",
        number: 6,
        slots: 12,
        minAge: 10
    },
    {
        name: "G",
        number: 7,
        slots: 3,
        minAge: 40
    },
    {
        name: "H",
        number: 8,
        slots: 30,
        minAge: 20
    }
];

//I sposób
let minAge = myGroup.members[0].age;

for (let i = 1; i < myGroup.members.length; i++) {
    if (myGroup.members[i].age < minAge) minAge = myGroup.members[i].age;
}

console.log(minAge);

//II sposób

let ageArray = myGroup.members.map(el => el.age);
let minAge = Math.min(...ageArray);

console.log(minAge);

//III sposób

let minAge = myGroup.members.reduce((prev, curr) =>
    curr.age < prev.age ? curr : prev
);
console.log(minAge);

for (let i = 0; i < classAvaiable.length; i++) {
    if (
        minAge.age > classAvaiable[i].minAge &&
        myGroup.members.length <= classAvaiable[i].slots
    ) {
        console.log(classAvaiable);
    }
}
