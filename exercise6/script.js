let std = {}

let std1 = {
    john:100,
}

function isEmpty(request) {
    if(Object.keys(request).length == 0 || Object.values(request).length == 0)
    {
        console.log(request + " is Empty");
    }else{
        console.log(request + " is not empty")
    }
}
isEmpty(std)  