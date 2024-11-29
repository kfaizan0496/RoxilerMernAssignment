const mongoose=require('mongoose');
require('dotenv').config();


        const dbConnection=async ()=>{
            try{
                // console.log(process.env.MONGO_URL);
                
         const connect=await mongoose.connect(process.env.MONGO_URL);
         console.log(`Database Connected ${connect.connection.host} and ${connect.connection.name}`);
         
        }catch(err){
            console.log(err);
            process.exit(1)
        }
    }


    module.exports=dbConnection;