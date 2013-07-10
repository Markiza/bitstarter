var fs = require('fs');


fs.writeFile('index.html', 'Hello node',function (err) {
if (err) throw err;
console.log('It\'s saved!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
