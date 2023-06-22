const dbConnection = require('./mongodb');

const deleteData = async ()=>{
    let db = await dbConnection();
    let result = await db.deleteMany(
        {name:'Kamalia Khadarxxx'}
     
    );
    if(result.deletedCount > 0){
        console.log('data deleted')
    }else{
        console.log('data not deleted')
    }
    console.warn(result);
}

deleteData();