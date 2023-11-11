/**
 * Regular Expressions
 */

// let re_1 = /abc/;
// console.log(re_1);
// let re_2 = RegExp('abc');
// console.log(re_2);
// console.log(typeof(re_2));

// // TEST
// console.log(/abc/.test('defghijabc'));
// console.log(/abc/.test('a basic test.'));

// // REPLACE
// let x = 'John Doe';
// let y = x.replace(/John/, 'Jane');
// console.log(`Before surgery his name was ${x}.`);
// console.log(`But now her name is ${y}.`);

// SPECIAL CHARATERS
let reg_3 = /ab*c/;
console.log(reg_3.test('abc'));