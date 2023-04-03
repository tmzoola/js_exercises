
var str = "WeBRaIN";
var new1 = '';

for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
       new1 += str[i];
      } 
}
console.log(new1);