const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

var app = require('express')();
var cors = require('cors');

var url = require('url');

app.use(cors());

app.listen(8080, function(err){
 if(err) console.log(err);
 console.log("Servidor na porta 8080");
 
});

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}})
  .write()

// app.get('/ricardo', function(req, res){
//   req.get()
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = q.year + " " + q.month;
//   res.end(txt);
//   // Add a post
//   db.get('posts')
//   .push({ id: db.get('posts').size(), title: 'lowdb is awesome'})
//   .write()

// });

app.post('/ricardo', function(req, res){
    var q = url.parse(req.url, true).query;
    /*Return the year and month from the query object:*/
    // var txt = q.year + " " + q.month;
    db.get('posts')
        .push({ id: db.get('posts').size() + 1, title: q.title})
        .write()
    res.end(q.title);
});





// db.get('posts')
//     .find({id: 1})
//     .value()

// Set a user using Lodash shorthand syntax
// db.set('user.name', 'Ricardo')
//   .write()
  
// Increment count
// db.update('count', n => n + 1)
//   .write()