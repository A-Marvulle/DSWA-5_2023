
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://alfredomarvulle:1234@cluster1.lotw2pl.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    console.log("\n========\nCONTATOS\n========\n");
    const collection1 = client.db("dswa").collection("contatos");
    const contatos = await collection1.find().toArray();
    console.log(contatos);

    console.log("\n======\nCURSOS\n======\n");
    const collection2 = client.db("dswa").collection("cursos");
    const cursos = await collection2.find().toArray();
    console.log(cursos);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
