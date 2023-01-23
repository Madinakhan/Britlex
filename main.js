// ------- Values and Variables
// let name = "Coding JS";
// // M[001] = "Coding JS"
// console.log(name);

// name = "Coding Bat";
// // M[001] = "Coding Bat"
// console.log(name);

//------ Variable name conventions
// let myName = 1;
//-------Cases
// Pascal Case: MyName = 20
// Snake Case: my_name = 20
// Kebab Case: my-name = 20
// Camel Case: myName = 20

// -----Primitive Data types

// let a = 20;
// a = 20 + 20 + 30 + 20;
// console.log(a); // Number

// let text = "Hello";
// text += "World";
// console.log(text); // String

// let isOpen = true; // Boolean

// if (isOpen === true) {
// 	console.log("Dars bor");
// } else {
// 	console.log("Dars yoq");
// }

// let a = null; //
// console.log(typeof a);

//-------- let && const && var
// console.log(a);
// console.log(typeof a);
// let a = 20;

// function app(name) {
// 	console.log("Hello " + name);
// }
// app("arslonbek");

// var app;
// console.log(app);
// app();
// var app = () => {};
// ES5 -> Ecma Script 5(2005) (let && const)
// ES6 -> Ecma Script 6(2015)
// ES2021 -> Ecma Script 6(2015)

// function init() {
// 	for (let i = 0; i < 10; i++) {
// 		console.log("i = ", i);
// 	}
// 	console.log(i);
// }

// init();

// const person = {
// 	name: "arslonbek",
// };

// console.log("person = ", person);

// for(var i = 20;i ){
// i += 20;
// 	console.log(i);
// }
// console.log(i);

// app();

/**
 * Coding Challenge #1 :
 * Mark and Kent are trying to compare their BMI (Body Mass Index),
 * which is calculated using the formula:
 * BMI = mass / height ** 2
 *
 *
 * Task-1 : Store Mark's and Kent's mass and height in variables
 * Task-2 : Calculate both their BMIs using the formula (you can even implement both versions)
 * Task-3 : Create a Boolean variable 'markResult' containing information about whether Mark has a higher BMI than Kent
 *
 *
 */
// let markWeight = 120;
// let markHeight = 1.8;
// let markBMI = markWeight / markHeight ** 2;

// let kentWeight = 95;
// let kentHeight = 1.65;
// let kentBMI = kentWeight / kentHeight ** 2;

// let markResult = markBMI > kentBMI;
// console.log(markResult);

console.log("Lesson-52");

/**
 * Coding Challenge #2 :
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 *
 * Task-1 : Print a nice output to the console, saying who has the higher BMI.
 * The message is either "Mark's BMI is higher than Kent's!" or "Kent's BMI is higher than Mark's!"
 *
 * Task-2 : Use a template literal to include the BMI values in the outputs.
 * Example: "Mark's BMI (28.3) is higher than Kent's (23.9)!"
 * Example: "Kent's BMI (28.3) is higher than Mark's (23.9)!"
 *
 */

/**
 * Coding Challenge #3 :
 *
 * Gimnastika bo'yicha ikkita jamoa mavjud: Delfinlar(Dolphins) va Koalalar(Koalas).
 *  Ular bir-birlari bilan 3 marta raqobatlashadilar. Eng yuqori o'rtacha ball(averageScore) to'plagan g'olib kubokni(🏆) qo'lga kiritadi!
 *
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
 *    ✅  Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 *
 * Result template:
 *      Winner : {teamName} winner 🏆
 *      durrang uchung : {teamName1} and {teamName2} winners 🏆
 *      xech kim yutmaganda : No winners 🥶
 */
