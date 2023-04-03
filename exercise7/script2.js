let object={
    id:1,
    name:"WebBrain"
}
arr = Object.entries(object)
for (let i = 0; i < arr.length; i++) {
   
    if(isNaN(arr[i][1])){

    }else{
        console.log(arr[i][0]);
    }
        
}
