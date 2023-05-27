const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const uri = `mongodb+srv://mehedi:${process.env.ACCESS_KEY}@cluster0.f06bdh4.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db("ilp");
        const collection = database.collection("videos");
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // All videos
        app.get('/', async(req, res) => {
            const query = {}
            const result = await collection.find(query).toArray();
            res.send(result)
        })
        // Specific video
        app.get('/:id', async (req, res) => {
            const id = parseInt(req.params.id)
            const query = {_id: id}
            const result = await collection.findOne(query);
            res.send(result)
        })
        app.put('/bookmark/:id', async(req, res) => {
            const id = parseInt(req.params.id)
            const filter = { _id: id }
            const updateDoc = {
                $set: {
                    bookmarked: true
                },
              };
              const result = await collection.updateOne(filter, updateDoc);
            res.send(result)
        })
        app.put('/watched/:id', async(req, res) => {
            const id = parseInt(req.params.id)
            const filter = { _id: id }
            const updateDoc = {
                $set: {
                    watched: true
                },
              };
              const result = await collection.updateOne(filter, updateDoc);
            res.send(result)
        })
    } finally {
        // Ensures that the client will close when you finish/error
        //   await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})