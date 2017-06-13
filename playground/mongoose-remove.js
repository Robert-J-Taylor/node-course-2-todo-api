const{ObjectID} = require('mongodb');

const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user');
// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '59401f3143e1a04e8c171530'}).then((todo)=>{

// });

 Todo.findByIdAndRemove('594022c643e1a04e8c171596').then((todo)=>{
console.log(todo)
 });