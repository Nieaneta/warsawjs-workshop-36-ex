const number = prompt("podaj liczbę");
const dividers = [];

for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
        console.log(dividers.push(i));
    }
}
