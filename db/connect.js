// require("dotenv").config(); 
import { MongoClient } from "mongodb";

const client = new MongoClient(  'mongodb://irmorteza:4995@192.168.51.201:27040/?authMechanism=SCRAM-SHA-256'|| "");

let conn;

try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

// let db = conn.db("SimotelCentralManager");
// let disconn = conn.close();


export  {conn};