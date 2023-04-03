var str = "WeBRaINAcadaAmya";
var new1 = '';

for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === "A") {
       new1 += str[i];
      } 
}
console.log("the number of A in this string is  " + new1.length);