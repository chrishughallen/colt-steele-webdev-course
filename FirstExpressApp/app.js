var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi!!!!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!!");
});

app.get("/r/:subreddit", function(req,res){
    res.send("WELCOME TO THE " + req.params.subreddit.toUpperCase() + " SUBREDDIT!");
});





// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!")
});


app.get("*", function(req, res){
    res.send("PAGE NOT FOUND!");
});


