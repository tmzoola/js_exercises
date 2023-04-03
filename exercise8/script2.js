var arr = [
    {id:1, name:'Fozil'},
    {id:2, name:'Odil'},
    {id:3, name:'Alibek'},
    {id:4, name:'Elyor'},
]

function onSearch(text) {
        for (let i = 0; i< arr.length; i++) {
          const element = arr[i];
          
           newName = element.name
           for (let i = 0; i < newName.length; i++) {
            const element = newName[i].toLowerCase();
               if (text == element) {
                    console.log(newName);
               }
           }
        }
}
onSearch('i')