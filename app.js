console.log("hello");
console.log("Hello World");
console.log("にんじゃわんこ");
console.log(5+3);
console.log(20-8);
console.log("4+5");
console.log(8*4);
console.log(7%2);
console.log("ひつじ"+"仙人");
console.log("20"+"15");
let length = 5;
console.log (length);
console.log (length * length * 3);
let number = 7;
console.log(number);
number += 3;
console.log(number);
number /= 2;
console.log(number)
const language = "フランス語";
console.log (language);
console.log (language+"を話せます");
const name = "にんじゃわんこ";
let age = 14;
console.log(`今は${age}歳です`);
const password = "ninjawanko";
if (password==="ninjawanko"){
  console.log("ログインに成功しました");
}
if (password!=="ninjawanko"){
  console.log("パスワードが間違っています");
}
let age = 17;
if (age >= 20) {
  console.log("私は20歳以上です");
}else{
  console.log("私は20歳未満です");
} 

let age = 17;
if (age >= 20) {
  console.log("私は20歳以上です");
} else if (age >= 10){
  console.log("私は20歳未満ですが、10歳以上です");
} else {
  console.log("私は10歳未満です");
}

const n = 2;

switch (n) {
  case 1:
    console.log("大吉です");
    break;

  // nの値が2のcaseを追加してください
  case 2:
    console.log("吉です");
    break;
  
  
  
  // nの値が3のcaseを追加してください
  case 3:
    console.log("小吉です");
    break;
  
  
}

const n = 4;

switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;


}
