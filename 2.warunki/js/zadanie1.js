const dateBirth = 2000;

const currentYear = 2019;

const age = currentYear - dateBirth;

console.log(age);

if (age < 15) {
    console.log("Odpowiadają za Ciebie rodzice");
} else if (age < 18) {
    console.log("Masz ograniczaną odpowiedzialność karną");
} else if (age > 150) {
    console.log("Jesteś nieśmiertelny?");
} else {
    console.log("Masz pełną odpowiedzialność");
}
