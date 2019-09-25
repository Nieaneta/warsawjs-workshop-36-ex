const age = "Podaj swój wiek";
const gender = "Podaj swoją płeć (K lub M)";

let howOldAreYou = prompt(age);
let howGender = prompt(gender);

if (
    (howOldAreYou > 65 && howGender === "K") ||
    (howOldAreYou > 67 && howGender === "M")
) {
    console.log("Gratuluję! Idziesz na emeryturę.");
} else {
    console.log("Jeszcze musisz popracować!");
}
