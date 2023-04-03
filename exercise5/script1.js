

function reverseString(str) {
    var str_new = "";
    for (i = str.length - 1; i >= 0; i--) {
        str_new += str[i];
    }
    return str_new;
}
console.log(reverseString('fozil'));