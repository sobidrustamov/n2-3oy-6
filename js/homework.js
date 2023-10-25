alert("1-vazifa");

let fName = prompt("Ismingizni kiriting! ");
let age = prompt("Tug'ilgan yil-oy-kuningizni kiriting!");

let now = Date.now();
let birthday = new Date(age);
let year = (now - birthday) / 1000 / 60 / 60 / 24 / 365.25;
let month = ((now - birthday) / 1000 / 60 / 60 / 24 / 30.4375) % 12;
let day = ((((now - birthday) / 1000 / 60 / 60 / 24) % 365.25) % 30.4375) - 1;
let hour = ((now - birthday) / 1000 / 60 / 60) % 24;
let minute = ((now - birthday) / 1000 / 60) % 60;
console.log(
  "Hurmatli " +
    fName +
    " siz dunyoga kelganingizga " +
    parseInt(year) +
    " yil " +
    parseInt(month) +
    " oy " +
    parseInt(day) +
    " kun " +
    parseInt(hour) +
    " soat " +
    parseInt(minute) +
    " minut bo'ldi"
);

alert("2-vazifa");

let fruits = ["Apple", "Cherry", "Banana", "Pear", "Orange"];
console.log(fruits);
let newFruit = prompt("Meva qo'shing");
fruits.push(newFruit);
console.log(fruits);
console.log("Birinchi mevani o'chiramiz");
fruits.shift();
console.log(fruits);

