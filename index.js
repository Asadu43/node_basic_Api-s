const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    res.send(await data.find().toArray());
})

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send({ result: result, body: req.body });
})

app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.body.name },
        { $set: { address: req.body.address } });
    res.send({ result: result, body: req.body });

})

app.delete('/:id', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send({ result: result, message: "Delete Successfully" });
})

app.listen(5000);