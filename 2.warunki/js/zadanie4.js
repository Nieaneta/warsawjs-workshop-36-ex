let numberOne = prompt("Podaj pierwszą liczbę");
let numberTwo = prompt("Podaj drugą liczbę");
let numberThree = prompt("Podaj trzecią liczbę");

if (numberOne > numberTwo && numberOne > numberThree) {
    prompt(numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    prompt(numberTwo);
} else if (
    numberOne === numberTwo ||
    (numberOne === numberThree && numberTwo === numberThree)
) {
    prompt("nie ma największej, są równe");
} else {
    prompt(numberThree);
}
