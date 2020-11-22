var express=require('express'),
    ejs=require('ejs'),
    mongoose=require('mongoose'),
    cors=require("cors"),
    expressSession=require('express-session'),
    bodyParser=require('body-parser'),
    path=require('path'),
    router=require('./routers/note');

    var app=express();

    app.use(bodyParser.json());
    // app.use(methodOverride('_method'));
    app.use(cors());
const url="mongodb://localhost/Notes";
mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser:true,useFindAndModify: false}).then(()=>{
    console.log("DataBase Connected");
});

app.use('/notes',router);


app.listen(process.env.PORT || 1010, process.env.ID, function(req,res){
    console.log("Server Started");
})