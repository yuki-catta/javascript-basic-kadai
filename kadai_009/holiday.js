// 配列の宣言と値の代入を行う
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// 変数の宣言を行う
let forIndex;

// コンソールにコメントを出力
console.log('for文を使った繰り返し処理')

// for文を使った繰り返し処理
for (let forIndex = 0; forIndex < 16; forIndex++)  {
  console.log(holidays[forIndex]);
}

// コンソールにコメントを出力
console.log('while文を使った繰り返し処理');

// 変数の宣言と値の代入を行う
 let whileIndex = 0;

 // while文を使った繰り返し処理
 while ( whileIndex < holidays.length ) {
   console.log(holidays[whileIndex]);
   whileIndex++;
 }
