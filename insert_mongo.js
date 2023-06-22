const dbConnection = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnection();
    const result = await db.insertMany(
        [
            {name:'Slipper',brand:'Borjan',price:1500,category:'Men Shoes'},
            {name:'Sandal',brand:'Logo',price:5000,category:'Women'},
            {name:'Jogar',brand:'Excel',price:900,category:'Kids'}
        ]
    );
    console.log(result)
}
insert();