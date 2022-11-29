const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose)
const logSchema = new mongoose.Schema(
    {
    userid:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    
    descriptions:{
        type:String,
        required:true
    },
    
    budgets:{
        type:Number,
        required:true
    },
    
    days:{
        type:Number,
        required:true
    },


},
{
    timestamps:true
}
)
logSchema.plugin(AutoIncrement,{
    inc_field:'ticket',
    id:'ticketNums',
    start_seq:500
})

// logSchema.methods.addLog = async function(title,descriptions,days,budgets){
//     try{
//         this.logs = this.logs.concat({title,descriptions,days,budgets})
//         await this.save();
//         return this.logs;
//     }catch(e){
//         console.log(e);

//     }

// }

//updating the log 
// logSchema.methods.updateLog = async function(title,descriptions,days,budgets,likes,comments,public){
//     try{
//         this.logs = this.logs.concat({title,descriptions,days,budgets,likes,comments,public})
//         await this.isModified();
//         return this.logs;

//     }catch(e){

//     }
// }


const Log = mongoose.model('LOG',logSchema);


module.exports= Log;