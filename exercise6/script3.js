
let salaries = {
    John:100,
    Ann:160,
    Pete:130

  }
salary_all  = Object.values(salaries);
num = 0
  
for( var i in salary_all){
    num +=salary_all[i]
}

  console.log(num);