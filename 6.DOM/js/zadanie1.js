const h1 = document.querySelector("#mojnaglowek");
h1.textContent = "Javascript jest super";

const input = document.querySelector("#coTutajJestNapisane");
console.log(input);
input.value = "nowy tekst";

h1.textContent = input.value;

// let comment = {
//     author: "Andrzej Molek",
//     date: "20.03.2019",
//     msg: "Ale super ten warsztat robimy już czary mary"
// };

// const com = document.querySelector(".comment h2");
// console.log(com);
// com.textContent = comment.author;

// const date = document.querySelector(".comment span");
// console.log(date);
// date.textContent = comment.date;

// const msg = document.querySelector(".comment p");
// console.log(msg);
// msg.textContent = comment.msg;

let newText = document.createElement("p");
console.log(newText);
newText.innerText = "Super, no po prostu super, polecam!";
newText.style.fontSize = "40px";
document.querySelector("div.comment").appendChild(newText);

let div = document.createElement("div");
console.log(div);
document.querySelector("#comments").appendChild(div);

let author = document.createElement("h1");
author.innerText = "Aneta Niewiadomska";
div.appendChild(author);

let date = document.createElement("span");
date.innerText = "22.09.2019";
div.appendChild(date);

let txt = document.createElement("p");
txt.innerText = "SUPERANCKO";
div.appendChild(txt);

