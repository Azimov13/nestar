/**TASK ZK:
Shunday function yozing, bu function har bir soniyada bir marotaba
console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
5 soniyadan so'ng function o'z ishini to'xtatsin
MASALAN: printNumbers();*/
//=================================================================
//=================================================================
// function printNumbers() {
// 	let i = 1;
// 	const timer = setInterval(() => {
// 		console.log(i++);
// 		if (i > 5) clearInterval(timer);
// 	}, 1000);
// }
// printNumbers();
//=================================================================
//=================================================================
// dependency injection classni ichida class chqirib olish
//=================================================================
//=================================================================
/**TASK ZM:
Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin
MASALAN: reverseInteger(123456789); return 987654321;
Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda.*/
//=================================================================
// function reverseInteger(num: number): number {
// 	const reversed = Number(num.toString().split('').reverse().join(''));
// 	return reversed;
// }
// console.log(reverseInteger(123456789)); // 987654321
//=================================================================
//=================================================================
/**ZL-TASK:
Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab” */
//=================================================================
//=================================================================
// function stringToKebab(str: string): string {
// 	return str
// 		.toLowerCase() // Kichik harflarga o‘tkazish
// 		.trim() // Boshi va oxiridagi bo‘sh joylarni olib tashlash
// 		.replace(/[^a-z0-9\s]/g, '') // Maxsus belgilarni olib tashlash
// 		.replace(/\s+/g, '-'); // Bo‘sh joylarni '-' bilan almashtirish
// }

// console.log(stringToKebab('I love Kebab')); // "i-love-kebab"
// console.log(stringToKebab('  Hello World! ')); // "hello-world"
// console.log(stringToKebab('React & TypeScript')); // "react-typescript"
//=================================================================
//=================================================================
/**Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin.
 *  Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda")  */
// function areParenthesesBalanced(text: string): boolean {
// 	let c = 0;

// 	for (let ch of text) {
// 		if (ch === '(') c++;
// 		if (ch === ')') c--;
// 		if (c < 0) return false;
// 	}
// 	return c === 0;
// }
//=================================================================
// console.log(areParenthesesBalanced('()')); // true
// console.log(areParenthesesBalanced('(()())')); // true
// console.log(areParenthesesBalanced('(()')); // false
// console.log(areParenthesesBalanced(')(')); // false
//=================================================================
/**Shunday function yozing, u 2 ta array parametr qabul qilsin.
Siz bu ikki arrayning qiymatlari o'xshash bo'lishini 
(ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.
MASALAN:
areArraysEqual([1, 2, 3], [3, 1, 2]) // true
areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
areArraysEqual([1, 2, 3], [4, 1, 2]) // false */
//=================================================================
//=================================================================
// function areArraysEqual(a: number[], b: number[]): boolean {
// 	return a.length === b.length && a.sort().toString() === b.sort().toString();
// }
//=================================================================
//=================================================================
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // false
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false
//=================================================================
//=================================================================
// **TASK ZQ:
// Shunday function yozing, bu function berilgan array parametr
// ichida ikki marotaba yoki undan ko'p takrorlangan sonlarni alohida
// array'da yagonadan qaytarsin qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]); return [3, 4];//
// function findDuplicates(arr: number[]) {
// 	let r: number[] = [];
// 	for (let i = 0; i < arr.length; i++)
// 		if (arr.indexOf(arr[i]) !== i && !r.includes(arr[i])) r.push(arr[i]);
// 	return r;
// }
//=================================================================
//=================================================================

//**TASK ZR:
// Shunday function yozing, bu function,
// berilgan parametr string tarkibidagi raqam va sonlarni
// sanab object sifatida qaytarsin.
// MASALAN: countNumberAndLetters(“string152%\¥”); return {number: 3, letter: 6};*//
//=================================================================
//=================================================================
// const countNumberAndLetters = (s: string) => {
// 	let n = 0,
// 		l = 0;
// 	for (let c of s)
// 		c >= '0' && c <= '9'
// 			? n++
// 			: ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) && l++;
// 	return { number: n, letter: l };
// };
// console.log(countNumberAndLetters('abc123!')); // { number: 3, letter: 3 }
//=================================================================
//=================================================================
// TASK ZT:
// Shunday function yozing, bu function parametrdagi string ichida
// bir marotabadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin
// MASALAN: firstUniqueCharIndex(“stamp”); return 0;
// Yuqoridagi misolda, 'stamp' so'zi tarkibida barcha harflar bir marotabadan
// ortiq takrorlanmagan, lekin shartga muvofiq, birinchi topilgan harf indeksi qaytarilmoqda.
function firstUniqueCharIndex(str: string): number {
	for (let i = 0; i < str.length; i++) {
		if (str.split(str[i]).length - 1 === 1) {
			return i;
		}
	}
	return -1;
}
//=================================================================
console.log(firstUniqueCharIndex('stamp')); // 0
console.log(firstUniqueCharIndex('success')); // 2
console.log(firstUniqueCharIndex('aabbcc')); // -1
//=================================================================
//=================================================================
