const mongoose = require("mongoose")
  const { Schema } = mongoose;
  const {ObjectId} = mongoose.Schema.Types 

  
  const AdminMatches = new Schema({

    matchname:{
      type:String
    },
      
    tournamentname:{
       type:String,
       
   },
   matchdate:{
    type:Date,
    
    },

    
    participants:{
        type:Array,
        
    },


  });

  module.exports = mongoose.model('AdminMatches', AdminMatches);