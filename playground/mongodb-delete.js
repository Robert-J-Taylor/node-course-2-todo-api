const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
     return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');
//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
//     console.log(result);
// });
//Find One and delete
// db.collection('Todos').findOneAndDelete({complete:false}).then((result) =>{
//     console.log(result);
// })
db.collection('Users').deleteMany({name: "Robert"}).then((result) => {
console.log(result);
});
db.collection('Users').deleteOne({name:"Mike"}).then((result) =>{
    console.log(result);
})
// db.close();
});
