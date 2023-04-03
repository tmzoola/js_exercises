let object={
    name:"WebBrain",
    offline:true,
    online:true,
    individual:false
}
arr = Object.entries(object)
obj = {}
for (let i = 0; i < arr.length; i++) {
   
    if(Boolean((arr[i][1]))  ){
            console.log(arr[i][0]);
          
    }


}

