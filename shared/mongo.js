const { MongoClient,connect } = require("mongodb");
const MONGODB_URL="mongodb+srv://abhi:admin@cluster0.ujn56.mongodb.net/user?retryWrites=true&w=majority";
const mongo={
db:null,
async connect(){
try{
    const client=await MongoClient.connect(MONGODB_URL,{useUnifiedTopology:true})
console.log("mongoDb connected at 3000");

this.db=client.db('user');


const data=await mongo.db.collection("entry").find().toArray();
console.log(data);
}
catch(err)
{
    console.log(err);
    console.log("error connnection mongo");
}
}

}

module.exports=mongo;