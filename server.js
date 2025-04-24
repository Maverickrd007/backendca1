const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.post("/login",async(req,res)=> {
    const{email, password} = req.body;
    if(!email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!password){
        return res.status(400).json({error:"Password cannot be empty"})
    }
    return res.status(200).json({message:"Login successful"})
})
app.get("/",(req,res)=>{
    res.send('<h1>Welcome to the Login page</h1>')
})
app.listen(port, ()=>{
    console.log(`Login page is running on http://localhost:${port}`);
});
