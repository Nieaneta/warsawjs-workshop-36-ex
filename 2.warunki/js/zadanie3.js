const gender = prompt("Podaj płeć (K lub M)");
const age = prompt("Podaj mi swój wiek");

switch (gender) {
    case "M":
        if (age < 67) {
            const timeToRetirement = 67 - age;
            alert(
                "Jeszcze musisz popracować" + " " + timeToRetirement + " lat"
            );
        } else {
            alert("Możesz cieszyć się starością");
        }
        break;

    case "K":
        if (age < 65) {
            const timeToRetirement = 65 - age;
            alert(
                "Jeszcze musisz popracować" + " " + timeToRetirement + " lat"
            );
        } else {
            alert("Możesz cieszyć się starością");
        }
        break;
    default:
        alert("Harujesz do śmierci :O");
}
