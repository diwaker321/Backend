const {MongoClient} = require('mongodb') 

const url = "mongodb+srv://diwakeracadmic:ZC86Mbt3H6on8yLM@webtinder.2oebmit.mongodb.net/"

const client = new MongoClient(url)

const dbname = "BackendData"

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbname);
  const collection = db.collection('UserData');

//   const data = {
//     id:"002",
//     firstname:"manish",
//     lastname:"panday",
//   }
//   const result = await collection.insertOne(data)
//   console.log('result: ', result);


                                        //how to get all the data from the db 

// const data =await collection.find({}).toArray()
// console.log('data: ', data);

                                        //how to filter the data 
// const data =await collection.find({age:"15"}).toArray()
// console.log('data: ', data);

                                        //how to delete the data 
// const data = await collection.deleteOne({firstname:"manish"})
// console.log('data: ', data);
// const result = await collection.find({}).toArray()
// console.log('result: ', result);

  return 'done.';
}

main()
  .then((res)=>console.log(res)  )
  .catch(console.error)
  .finally(() => client.close());

  // diwakeracadmic
// ZC86Mbt3H6on8yLM
// mongodb+srv://diwakeracadmic:ZC86Mbt3H6on8yLM@webtinder.2oebmit.mongodb.net/
// mongodb+srv://diwakeracadmic:ZC86Mbt3H6on8yLM@webtinder.2oebmit.mongodb.net/