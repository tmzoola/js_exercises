let num = 4;


if(num % 3 === 0){
    if(num % 5 === 0){
        console.log("3 va 5 ga bo'linadi");
    }else{
        console.log("Faqat 3 ga bo'linadi");
    }
    
}
else if(num % 5 === 0 ){
    if(num % 3 === 1){
        console.log(" Faqat 5 ga bo'linadi");
    }
    
}else if(num % 3 === 0 ){
    if (num % 5 === 1){
        console.log("Faqat 3 ga bo'linadi");
    }   
}else{
    console.log("hech qaysi holatga tushmaydi");
}