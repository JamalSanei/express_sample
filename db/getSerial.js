import {conn} from './connect.js'

const db = conn.db("SimotelCentralManager");
const filter = {};
let result =[];
try{
    const coll =  db.collection('serials');
    
    const cursor = coll.find(filter);
    result = await cursor.toArray();
    conn.close();
    // console.log(result)
}
catch(err){
    console.log(err)
}

export default result;