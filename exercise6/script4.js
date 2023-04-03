let menu = {
    width:200,
    height:300,
    title:"My menu"
}

function multiplyNumeric() {
    for(i in menu){
        if (isNaN(menu[i])) {
            ;
        }else{
            menu[i] = menu[i]*2
        }
    }
    console.log(menu);
}

multiplyNumeric(menu)