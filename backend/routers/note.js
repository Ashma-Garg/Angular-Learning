var express=require('express'),
    router=require('express').Router(),
    mongoose=require('mongoose'),
    NotesModel=require('../models/notes');

// NotesModel.remove({},function(err){
//     if(err) console.log(err)
//     else console.log("Deleted");
// })
var Notes=new NotesModel({
    title:"first",
    content:"this",
    date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(new Date())))
});
Notes.save(function(err,NotesModel){
    if(err) console.log(err);
    else console.log("saved");
})


router.get('/',function(req,res){
    NotesModel.find({},function(data,err){
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    })
})
router.post('/',function(req,res){
    // const date=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(req.body.date)))
    var newNote={
        title:req.body.title,
        content:req.body.content,
        date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(req.body.date)))
    }
    NotesModel(newNote).save((err,data)=>{
        if(err) console.log(err);
        else res.json(data);
    })
    console.log(newNote);
})
module.exports=router;