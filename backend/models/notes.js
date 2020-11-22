var mongoose=require('mongoose');

var NotesSchema=mongoose.Schema(
    {
        title:{
            type:String
        },
        content:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        }
    }
)

module.exports=new mongoose.model('NotesModel',NotesSchema);