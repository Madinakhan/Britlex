"use strict";

// ----- String Methods

// // --- charAt----
// const str = "Jamshidbek";
// console.log(str[2] || "");
// console.log(str.charAt(2));

// --- Concat----
// const a = "Arslonbek";
// const b = " Good ";
// const c = "Boy";
// let text = a.concat(b, c, "2", "23", "2", "2", "23");
// console.log(text);

//// --- endsWith && startsWith----
// const a = "Arslonbek";
// console.log(a.endsWith("lo", 5));
// console.log(a.substring(2, 4).startsWith("slon"));

// // --- includes----
// const a = "Arslonbek";
// console.log(a.includes("lon"));
// console.log(a.includes("bek"));

// // // --- indexOf && lastIndexOf----
// const a = "ArGoodsloGoodnbek Good Boy";
// console.log(a.indexOf("Good", 3));
// console.log(a.lastIndexOf("Good"));

// --- search && regex ----
// const a = "arslonbk 998998961348";
// const isFind = a.search(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/)

// ----- replace-----
// let str = "Arslonbek good boy";
// let _str = str.replaceAll("good", "");
// console.log(_str);

// -------- trim ------
// let str = "      arslonbek     ";
// console.log(str);
// console.log(str.trim());

// // -------- split ------
// let str = "arslonbek";
// let groups = str.split("");
// console.log(groups);

// let name1 = "Arslonbek";
// let name2 = "Boburbek";
// let name3 = "Erkinbek";
// // ...
// let name27 = "Siroj";

// console.log(`Hello ${name1}`);
// console.log(`Hello ${name2}`);
// console.log(`Hello ${name3}`);

// let names = ["Arslonbek", "Boburbek", "Erkinbek", "...", "Siroj"];

// for (let i = 0; i < names.length; i++) {
// 	console.log(`Hello ${names[i]}`);
// }
// let
// let nums = [1, 2, 3];
// nums[30] = 4;
// console.log(nums);

// const groups = [];
// const group1 = ["pdp-g-7", "room-318", "Uber", 22];
// const group2 = ["pdp-g-8", "room-318", "Uber", 21];

// groups[1] = group1;

// console.log(groups);

// primitive
// let a = 20;
// let b = a;
// b = b + 20;

// console.log(a);
// console.log(b);
// non-primitive (Reference)
let a = [1, 2, 3];
let b = a;
b[2] = 30;

console.log(a);
console.log(b);
