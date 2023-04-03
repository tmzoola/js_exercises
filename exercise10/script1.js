let users = [
    {id:1, year:1998, engine:1, name:'Tico'},
    {id:2, year:2005, engine:1.2, name:'Matiz'},
    {id:3, year:2010, engine:1.6, name:'Gentra'},
    {id:4, year:2010, engine:1.5, name:'Cobalt'},
    {id:5, year:2012, engine:2, name:'Malibu'},
    {id:6, year:2000, engine:1.2, name:'Damas'},
    {id:7, year:2018, engine:2.4, name:'Tracer'},
]
//delete function
const onDelete = (id) => {
let filtered = users.filter((value)=>value.id !=id);
console.log(filtered);
}
console.log(onDelete(5));


// Create function
const onCreate = (car) => {
        cars = [...users, car]
        users = cars
        console.log(users);
}

onCreate({id:8, year:2023, engine:3.0, name:'Genesis'},)

//Update function
const onUpdate = (car) => {
    let result = users.map(value=>{
        if(car.id == value.id){
            value.engine = car.engine
        }
    })
}
onUpdate({id:3, engine:2.0})
console.log(users);

// Read function
const onRead = () => {
    let result = users.map(value=>{
        console.log(value);
    })
}
onRead()