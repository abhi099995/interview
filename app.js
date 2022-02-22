// const template = '00 00 00 00 ';
// const someHex = 'a';
// console.log(template.length);
// const concatHex = template.concat(someHex);
// console.log(concatHex);
// let subTemplate = concatHex.substring(0, 1);
// console.log(subTemplate);
// var str = "Hello TecAdmin!";
// var newStr = str.slice(0, -1);
// console.log(newStr);
for (i = 1; i < 6001; i++){
    let hexValue = i.toString(16);
    // console.log(hexValue.length);
    let finalValue;
    if (hexValue.length == 1) {
        let strRing='00 00 00 0'
        finalValue = strRing.concat(hexValue);
    }
    if (hexValue.length == 2) {
        let strRing = '00 00 00 '
        finalValue = strRing.concat(hexValue);
    }
    if (hexValue.length == 3) {
        let strRing='00 00 0'
        finalValue = strRing.concat(hexValue);
    }
    if (hexValue.length == 4) {
         let strRing='00 00 '
         finalValue = strRing.concat(hexValue);
    }
    if (hexValue.length == 5) {
          let strRing='00 0'
          finalValue = strRing.concat(hexValue);
    }
    console.log(finalValue);
}
