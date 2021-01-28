const express=require("express")

const app=express();
app.use(express.static("public"));
app.use('/css', express.static(__dirname + '/public/assets/css'));
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/images', express.static(__dirname + '/public/assets/images'));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(8080,function(){
    console.log("running at 8080");
})