let users = [
    {id:1, year:1998, engine:1, name:'Tico'},
    {id:2, year:2005, engine:1.2, name:'Matiz'},
    {id:3, year:2010, engine:1.6, name:'Gentra'},
    {id:4, year:2010, engine:1.5, name:'Cobalt'},
    {id:5, year:2012, engine:2, name:'Malibu'},
    {id:6, year:2000, engine:1.2, name:'Damas'},
    {id:7, year:2018, engine:2.4, name:'Tracer'},
]


let result = users.map((value)=>{

    if (value.year<2000) {
        console.log(value);
    }
});

