const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
     return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection("Todos").findOneAndUpdate({
//     _id: new ObjectID("593ae4f1daac2bb989029ded")
// },
//     {
//         $set: {
//             completed: true
//         }
//     },{
//         returnOriginal: false
//     }).then((result) =>{
//         console.log(result);
//     })
db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("593ae166daac2bb989029d0d")
},{
    $inc: { age: 1}


},{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    })

// db.close();
});