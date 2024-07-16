const express = require("express");
const app = express();
const port = 8080;
const fs = require('fs');
const util = require("util")
const exec = util.promisify(require("child_process").exec)


app.listen(port);
console.log("listening to " + port);

app.use(express.json());
app.use(express.urlencoded({extended : false}));


// http requests handeled here
app.get("/", (req, res) => {
	console.log("GET REQUEST");
	console.log(Date() + " " + req.headers['cf-connecting-ip'] + " HTML request came in")
	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
	
})



//plots handeled here
app.post("/getPDF", (req, res) => {
	console.log("POST REQUEST");
	console.log(JSON.parse(req.body.info));
	fs.writeFile('tikz.tex', JSON.parse(req.body.info), err => {
				if(err){console.log(err);}
				else{console.log("tikz.tex sucessfully created");}
			});
				 require('child_process').exec('cmd /c run.bat', (err, stdout, stderr) => {
					 if(err){
						 console.log(err);
						 console.log("ERROR Typ 1")
						 res.json({data : "empty"});
					 }
					 else{
							console.log("stdout : ");
							console.log(stdout);
							console.log("ERROR Typ 2 : ");
							console.log(stderr);
							var data0 = [];
							fs.readFile('tikz.svg', "utf8", function(err, data) {
								data0[0] = data;
								//console.log(data);
								console.log("svg read");
								
								data0[1] = fs.readFileSync('tikz.pdf', {encoding : "base64"});
									//console.log(data);
									console.log("pdf read");
									res.json({data : data0});
									console.log("svg and pdf sent");
								
							  });
					 }
				});
	
})



// opens browser page
exec('start http://localhost:8080/');