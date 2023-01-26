// console.log("Lesson-53");

// || -> chap tarafda falsy kelsa sakraydi
// && -> chap tarafda truth kelsa sakraydi
// let result = true || (false && "arslonbek");
// //         01234
// let str = "hello";
// let char = "x";

// let char = str[5] || "x";

/**
 * Coding Challenge #3 :
 *
 * Gimnastika bo'yicha ikkita jamoa mavjud: Delfinlar(Dolphins) va Koalalar(Koalas).
 * Ular bir-birlari bilan 3 marta raqobatlashadilar. Eng yuqori o'rtacha ball(averageScore)
 * to'plagan g'olib kubokni(🏆) qo'lga kiritadi!
 *
 * Task 1 : O'rtacha ballarini hisoblaymiz (averageScore)
 *
 * Task 2 : Musobaqa g'olibini aniqlash uchun jamoaning o'rtacha ballarini solishtiring va uni konsolga chop eting.
 * Shuni unutmangki, durang bo'lishi mumkin, shuning uchun buni ham sinab ko'ring
 *
 * Bonus 1 : Minimal 100 ball talabini qo'shing. Ushbu qoidaga ko'ra,
 * jamoa boshqa jamoadan yuqori ballga ega bo'lsa va ayni paytda kamida 100 ball to'plagan taqdirdagina g'alaba qozonadi
 *
 * Bonus 2 : Minimal ball durang uchun ham amal qiladi!
 * Shunday qilib, durang faqat ikkala jamoa bir xil ochkoga ega bo'lsa va
 * ikkalasi ham 100 ochkodan katta yoki teng ballga ega bo'lganda sodir bo'ladi.
 * Aks holda, hech bir jamoa kubokni qo'lga kirita olmaydi
 *
 *
 * Test Data :
 *    ✅ Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 *    ✅ Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 *    ✅ Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 *
 * Formula :  averageScore  = (score1 + score2 + score3) / 3
 * Result template:
 *      Winner : {teamName} winner 🏆
 *      durrang uchun : {teamName1} and {teamName2} winners 🏆
 *      xech kim yutmaganda : No winners 🥶
 */

// var a = 20;
// var b = 30;
// console.log(a);
// console.log(b);

// var a = 60;
// console.log(a);

// function summa(a, a) {
// 	return a + a;
// }

// const result = summa(10, 20);
// console.log(result);
// "use strict";

// function foo() {
// 	bar = 0;
// 	return bar;
// }

// // Uncaught ReferenceError: bar is not defined
// bar = 1;

// foo();

// var a = 20;

// function app() {
// 	if (a) console.log(a);

// 	let a = 40;

// 	console.log(a);
// }

// app();
"use strict";

// function hi(name) {
// 	console.log(`hello ${name}`);
// }

// hi("Arslonbek");
// hi("Boburbek");
// hi("Jamshidbek");

function app() {
	return "arslonbek";
}

const name = app();
console.log(name);

/**
 * Coding Challenge #4 :
 *
 * Ikki gimnastika jamoasiga, Delfinlar va Koalalarga qayting!
 * Yangi gimnastika intizomi mavjud bo'lib, u boshqacha ishlaydi.
 * Agar jamoa boshqa jamoaning o'rtacha ballidan kamida ikki baravar ko'p bo'lsa,
 *  g'alaba qozonadi. Aks holda, hech bir jamoa g'alaba qozonmaydi!
 *
 * Task 1 : O'rtacha ballarini hisoblaydigan arrow funksiya yaratamiz (calcAverageScore)
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
