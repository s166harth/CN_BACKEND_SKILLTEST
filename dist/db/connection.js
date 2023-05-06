const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://s166harth:hellohi12@cluster0.arypi.mongodb.net/?retryWrites=true&w=majority",{
    
}).then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log(e);
})