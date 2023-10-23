
// 現在の時刻を取得
const now = new Date();

// 取得した現在時刻の「年」を取得
const year = now.getFullYear();

// 取得した現在時刻の「月」を取得
const month = now.getMonth() + 1;

// 取得した現在時刻の「日」を取得
const date = now.getDate();

// 年月日をコンソールに表示
console.log(year + '年' + month + '月' + date + '日');