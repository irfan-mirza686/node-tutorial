const dbConnection = require('./mongodb');

const updateData = async ()=>{
    let db = await dbConnection();
    let result = await db.updateOne(
        {name:'Borjan Slipper'},{
            $set: {name:'Simple Slipper', price:1700}
        }
    );
    console.warn(result);
}

updateData();