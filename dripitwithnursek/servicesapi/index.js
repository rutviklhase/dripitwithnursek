const { serialize } = require('bson');
const express = require ('express');
require ("./db/config");
const app = express();
const Service = require ("./db/service");
const cors = require ("cors");


app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let service = new Service(req.body);
    let result = await service.save();
    resp.send(result);
});

app.get("/getall",async (req,resp)=>{
    let result = await Service.find();
    resp.send(result);
});





app.listen(5000);