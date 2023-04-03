var str = "fozil";
var new1 = '';

for (let i = str.length -1 ; i>=0 ; i--) {
    if (str[i].toLowerCase() === str[i]) {
       new1 += str[i];
      } 
}
console.log(new1);