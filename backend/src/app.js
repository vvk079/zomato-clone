const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const authroutes =require('./routes/auth.routes.js')
const foodroutes =require('./routes/food.routes.js');
const cors = require("cors");




app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("hey its working")
})  


app.use("/api/auth",authroutes);
app.use("/api/food",foodroutes);


module.exports=app;



