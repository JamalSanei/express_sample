import  dotenv from 'dotenv'
import cors from 'cors';
import express from 'express';
import serial from './router/serial.js';



dotenv.config()
const app = express();
 
app.use(cors());

//------------------------------------------router
app.use('/serial',serial);
 



app.listen(process.env.PORT || 5000,() => {
    console.log("server runing on 5000...")
});


