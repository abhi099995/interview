let a = [1, 2, 3, 4, 8, 1, 3, 8, 1];
let obj = {};
for (let e of a) {
    obj[e] = true
}
// console.log(obj);
// console.log(Object.keys(obj));

let values = [
    { name: 'someName1' },
    { name: 'someName2' },
    { name: 'someName1' },
    { name: 'someName1' }
]

// let count = 0;
// let finalArr = values.map((e,i) => {
//     console.log("index " + i + " value " + e);
//     e == values[i] ? e{ count++ } : e.count == 1
// })

// let finalArr = values.reduce((previousValue, currentValue) => {
//     // console.log(previousValue);
//     // console.log(currentValue);
//     previousValue == currentValue ? console.log(1) : console.log(2);
// })
let countArr = {};
let finalArr = values.forEach((value, i) => {
    // console.log(values[i]);
    // console.log(value);
    // let count = 0;
    // values[i].count = 0;
    countArr[value] ? countArr[value]++ : countArr[value] = 1;
});
// console.log(countArr);

const str = "big black bug bit a big black dog on his big black nose";
commonStr(str);
function commonStr(str) {
    let splitStr = str.split(" ");
    console.log(splitStr);
}