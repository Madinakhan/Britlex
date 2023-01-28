"use strict";
// console.log("Lesson-54");

// function summa(a, b, c) {
// 	return a + b + c;
// }
// const result = summa(10, 20, 30);
// console.log(result);

// function summa(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		};
// 	};
// }
// const result = summa(10)(20)(30);
// console.log(result);

// var a = 20;
// app(); // open function body

// function app() {
// 	if (a) console.log(a);

// 	var a = 40;
// 	console.log(a);
// }

// Function Declaration
// function app() {
// 	if (a) console.log(a);
// 	console.log("Hello World");
// }

// let a = 40;
// const result = undefined;

// Function Expression
// var app = function () {
// 	console.log("Hello World");
// };

// console.log(app);
// app();

/**
 * Coding Challenge #4 :
 *
 * Ikki gimnastika jamoasiga, Delfinlar va Koalalarga qayting!
 * Yangi gimnastika intizomi mavjud bo'lib, u boshqacha ishlaydi.
 * Agar jamoa boshqa jamoaning o'rtacha ballidan kamida ikki baravar ko'p bo'lsa,
 *  g'alaba qozonadi. Aks holda, hech bir jamoa g'alaba qozonmaydi!
 *
 * Task 1 : O'rtacha ballarini hisoblaydigan expression funksiya yaratamiz (calcAverageScore)
 *
 * Task 2 : O'rtacha ballarini hisoblaymiz
 *
 * Task 3 : Har bir jamoaning o'rtacha ballini argument sifatida qabul qiladigan "checWinner" nomli expression funksiyasini yarating,
 *          parametrlar sifatida ('avgDolhins' va 'avgKoalas').
 *          Keyin yuqoridagi qoidaga muvofiq g'olibni g'alaba ochkolari bilan birga konsolga chiqazing.
 *
 * Task 4 : Durrang xolatni hisoblash shart emas
 *
 * Test Data :
 *    ✅ Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
 *    ✅ Dolphins score 85, 54  and 41. Koalas score  23, 34 and 27
 *
 * Result template:
 *      Winner : {teamName} winner (31, 15) 🏆
 *      xech kim yutmaganda : No winners 🥶
 *
 */

const calcAverageScore = function (score1, score2, score3) {
	return Math.floor((score1 + score2 + score3) / 3);
};

const avgKoalas = calcAverageScore(85, 54, 41); // 46
const avgDolphins = calcAverageScore(23, 34, 27); // 56

const checkWinner = function (avg1, avg2) {
	if (avg1 >= 2 * avg2) {
		console.log(`Dolphins winner (${avg1}, ${avg2})`);
	} else if (avg2 >= 2 * avg1) {
		console.log(`Koalas winner (${avg2}, ${avg1})`);
	} else console.log("No Winner 🫣");
};

checkWinner(avgDolphins, avgKoalas);
