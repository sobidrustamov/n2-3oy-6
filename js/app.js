// String

// let str = "      lorem ipsum dolor sit ameta. +998976155182       ";

// console.log(str.length);
// console.log(str.charAt(6));
// console.log(str.charCodeAt(6));  //ASCII codi
// console.log(str.concat(" Eshmat"));
// console.log(str.endsWith("820"));
// console.log(str.includes(5));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.padEnd(100, "1"));
// console.log(str.padStart(50, 5));
// console.log(str.repeat(3));
// console.log(str.replace(".", ","));
// console.log(str.replaceAll("a", "b"));
// console.log(str.search(/\+/));
// console.log(str.slice(1, 5));
// console.log(str.split(" "));
// console.log(str.startsWith("lor"));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// Array

// let fruits = ["Apple", "Banana", "Lime", "Cherry", "apple", ["Orange"]];

// console.log(fruits.length);
// console.log(fruits.concat(["Pear", "Kivi"]));
// console.log(fruits.flat(2));
// console.log(fruits.includes("Apple"));
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("apple"));
// console.log(fruits.join("=>"));
// console.log(fruits.reverse());
// console.log("fruits".split("").reverse().join());
// console.log(fruits.slice(1, 4));
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

// fruits.push("Strawberry");
// fruits.unshift("Strawberry");
// fruits.pop();
// fruits.shift();
// fruits.splice(2, 0, "Pear")
// fruits.splice(0, 1);

// console.log(fruits);

let arr = ["olma", "nok", "anor", "behi", "gilos"];
console.log(arr);
let keraksiz = prompt("keraksiz mevani kiriting");
arr.splice(arr.indexOf(keraksiz), 1);

console.log(arr);
let kerakli = prompt("qaysi mevani qo'shmoqchisiz!");
let qayerdan = prompt("qaysi indexdan qo'shmoqchisiz!");

arr.splice(qayerdan, 0, kerakli);
console.log(arr);
let keraksiz_2 = prompt("qaysi mevani o'zgartirmoqchisan");
let kerakli_2 = prompt("qaysi mevaga o'zgartirmoqchisan");

arr.splice(arr.indexOf(keraksiz_2), 1, kerakli_2);

console.log(arr);
