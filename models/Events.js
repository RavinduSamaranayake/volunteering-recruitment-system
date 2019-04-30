const mongoose =require('mongoose');

const EventSchema =mongoose.Schema({
    title:{type:String,required:true},
    date:{type:Date,required:true},
    type:{type:String,required:true},
    imagePath:{type:String,required:true},
    description:{type:String,required:true},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
});


module.exports=mongoose.model('event',EventSchema);