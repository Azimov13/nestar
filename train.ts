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
function stringToKebab(str: string): string {
	return str
		.toLowerCase() // Kichik harflarga o‘tkazish
		.trim() // Boshi va oxiridagi bo‘sh joylarni olib tashlash
		.replace(/[^a-z0-9\s]/g, '') // Maxsus belgilarni olib tashlash
		.replace(/\s+/g, '-'); // Bo‘sh joylarni '-' bilan almashtirish
}

console.log(stringToKebab('I love Kebab')); // "i-love-kebab"
console.log(stringToKebab('  Hello World! ')); // "hello-world"
console.log(stringToKebab('React & TypeScript')); // "react-typescript"
