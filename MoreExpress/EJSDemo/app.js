var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home")
})

app.get("/posts", function(req,res){
    var posts = [
        {title:"new post", author: "Chris"},
        {title:"This is SHIT", author: "Dave"},
        {title:"I'm cooll dude", author: "Ben"},
        {title:"I LOVE YOU!", author: "Alex"}
        ];
        
        res.render("posts", {posts : posts})
})

app.get("/:name", function(req,res){
    var name = req.params.name;
    res.render("home", {name : name})
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("SERVER IS UP!");
});