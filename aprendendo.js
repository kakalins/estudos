// console.log(`Testanto impressões ${5 / 5}`);
// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// };

// console.log(hummus(5));

// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(1, 11);

// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 3);

// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = "0" + string;
//     }
//     return string;
// }
// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
// }
// printFarmInventory(7, 16, 3);

// let anObject = {left: 1, right: 2};
// console.log(anObject);
// delete anObject.left;
// console.log(anObject.left);
// // → undefined
// console.log("left" in anObject);
// // → false
// console.log("right" in anObject);
// console.log(anObject);
// anObject.left = 1;
// console.log(anObject);
// console.log(Object.keys({x: 0, y: 0, z: 2}));


// const score = {visitors: 0, home: 0};
// console.log(score);
// // This is okay
// score.visitors = 1;
// console.log(score);
// // This isn't allowed
// //score = {visitors: 1, home: 1};
// //console.log(score.visitors);



// const http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);


var app = require('express')();
var cors = require('cors');

app.use(cors());

app.listen(8080, function(err){
 if(err) console.log(err);
 console.log("Servidor na porta 8080");
 
});


app.get('/ricardo', function(req, res){
  res.send(    {  "records": [
    {
      "Name": "Alfreds Futterkiste",
      "City": "Berlin",
      "Country": "Germany"
    },
    {
      "Name": "Ana Trujillo Emparedados y helados",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "Name": "Antonio Moreno Taquería",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "Name": "Around the Horn",
      "City": "London",
      "Country": "UK"
    },
    {
      "Name": "B's Beverages",
      "City": "London",
      "Country": "UK"
    },
    {
      "Name": "Berglunds snabbköp",
      "City": "Luleå",
      "Country": "Sweden"
    },
    {
      "Name": "Blauer See Delikatessen",
      "City": "Mannheim",
      "Country": "Germany"
    },
    {
      "Name": "Blondel père et fils",
      "City": "Strasbourg",
      "Country": "France"
    },
    {
      "Name": "Bólido Comidas preparadas",
      "City": "Madrid",
      "Country": "Spain"
    },
    {
      "Name": "Bon app'",
      "City": "Marseille",
      "Country": "France"
    },
    {
      "Name": "Bottom-Dollar Marketse",
      "City": "Tsawassen",
      "Country": "Canada"
    },
    {
      "Name": "Cactus Comidas para llevar",
      "City": "Buenos Aires",
      "Country": "Argentina"
    },
    {
      "Name": "Centro comercial Moctezuma",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "Name": "Chop-suey Chinese",
      "City": "Bern",
      "Country": "Switzerland"
    },
    {
      "Name": "Comércio Mineiro",
      "City": "São Paulo",
      "Country": "Brazil"
    }
  ]
})
  
    
});

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'json/application'});
//     res.write({
//       "records": [
//         {
//           "Name": "Alfreds Futterkiste",
//           "City": "Berlin",
//           "Country": "Germany"
//         },
//         {
//           "Name": "Ana Trujillo Emparedados y helados",
//           "City": "México D.F.",
//           "Country": "Mexico"
//         },
//         {
//           "Name": "Antonio Moreno Taquería",
//           "City": "México D.F.",
//           "Country": "Mexico"
//         },
//         {
//           "Name": "Around the Horn",
//           "City": "London",
//           "Country": "UK"
//         },
//         {
//           "Name": "B's Beverages",
//           "City": "London",
//           "Country": "UK"
//         },
//         {
//           "Name": "Berglunds snabbköp",
//           "City": "Luleå",
//           "Country": "Sweden"
//         },
//         {
//           "Name": "Blauer See Delikatessen",
//           "City": "Mannheim",
//           "Country": "Germany"
//         },
//         {
//           "Name": "Blondel père et fils",
//           "City": "Strasbourg",
//           "Country": "France"
//         },
//         {
//           "Name": "Bólido Comidas preparadas",
//           "City": "Madrid",
//           "Country": "Spain"
//         },
//         {
//           "Name": "Bon app'",
//           "City": "Marseille",
//           "Country": "France"
//         },
//         {
//           "Name": "Bottom-Dollar Marketse",
//           "City": "Tsawassen",
//           "Country": "Canada"
//         },
//         {
//           "Name": "Cactus Comidas para llevar",
//           "City": "Buenos Aires",
//           "Country": "Argentina"
//         },
//         {
//           "Name": "Centro comercial Moctezuma",
//           "City": "México D.F.",
//           "Country": "Mexico"
//         },
//         {
//           "Name": "Chop-suey Chinese",
//           "City": "Bern",
//           "Country": "Switzerland"
//         },
//         {
//           "Name": "Comércio Mineiro",
//           "City": "São Paulo",
//           "Country": "Brazil"
//         }
//       ]
//     });
//     res.end();
// }).listen(8080);



// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);





// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync')

// const adapter = new FileSync('db.json')
// const db = low(adapter)

// // Set some defaults (required if your JSON file is empty)
// db.defaults({ posts: [], count: 0 })
//   .write()

// // Add a post
// db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome' })
//   .write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()

// // Increment count
// db.update('count', n => n + 1)
//   .write()





//
// UI code using vanilla JavaScript
// You can use any other UI lib with lowdb
//

// function render() {
//   const state = db.getState()
//   const str = JSON.stringify(state, null, 2)
//   document.getElementById('state').innerHTML = str
// }

// document.getElementById('reset').onclick = function() {
//   reset()
//   render()
// }

// document.getElementById('add').onclick = function() {
//   add()
//   render()
// }

// render()

