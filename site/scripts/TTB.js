function ttb(text) {

    var braille = "";
    var Sarr = text.split('');
    Sarr.forEach(function(item){
        try {
            braille += data[item];
        }
        catch {
        }
    });
    //console.log(braille);
    return braille;
}

data = {};

var arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var arr1 = ' ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
var arr2 = 'àäçéèêëîôœùûü'.split('');
var arr3  = '0123456789'.split('');
var arr4 = '\',;:.!?-()"'.split('');

var bar = '⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵ '.split('');
var bar1 = '⠨⠁ ⠨⠃ ⠨⠉ ⠨⠙ ⠨⠑ ⠨⠋ ⠨⠛ ⠨⠓ ⠨⠊ ⠨⠚ ⠨⠅ ⠨⠇ ⠨⠍ ⠨⠝ ⠨⠕ ⠨⠏ ⠨⠟ ⠨⠗ ⠨⠎ ⠨⠞ ⠨⠥ ⠨⠧ ⠨⠭ ⠨⠽ ⠨⠵'.split(' ');
var bar2 = '⠷⢡⠯⠿⠮⠣⠫⠩⠹⠪⠾⠱⠳'.split('');
var bar3 = '⠼⠡⠣⠩⠹⠱⠫⠻⠳⠪'.split('');
var bar4 = '⠄⠂⠆⠒⠲⠖⠢⠤⠦⠴⠶'.split('');

/*console.log(arr1);
console.log(bar1);

console.log(arr2);
console.log(bar2);

console.log(arr3);
console.log(bar3);

console.log(arr4);
console.log(bar4);*/

var lettreTemp = arr.concat(arr1,arr2,arr3,arr4);
var brailleTemp = bar.concat(bar1,bar2,bar3,bar4);

/*console.log(lettreTemp);
console.log(brailleTemp);*/


lettreTemp.forEach(function (k, i) {
    data[k] = brailleTemp[i];
})

//console.table(data);



// ABCDEFGHIJKLMNOPQRSTUVXYZ
// ⠨⠁⠨⠃⠨⠉⠨⠙⠨⠑⠨⠋⠨⠛⠨⠓⠨⠊⠨⠚⠨⠅⠨⠇⠨⠍⠨⠝⠨⠕⠨⠏⠨⠟⠨⠗⠨⠎⠨⠞⠨⠥⠨⠧⠨⠭⠨⠽⠨⠵
//abcdefghijklmnopqrstuvwxyz
//⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵
// àäçéèêëîôœùûü
// ⠷⢡⠯⠿⠮⠣⠫⠩⠹⠪⠾⠱⠳
// 1234567890
// ⠠⠡⠠⠣⠠⠩⠠⠹⠠⠱⠠⠫⠠⠻⠠⠳⠠⠪⠠⠼
//',;:.!?-()"
// ⠄⠂⠆⠒⠲⠖⠢⠤⠦⠴⠶

