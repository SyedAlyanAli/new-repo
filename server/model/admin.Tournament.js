const mongoose = require("mongoose")
  const { Schema } = mongoose;
  const {ObjectId} = mongoose.Schema.Types 

  
  const AdminTournament = new Schema({

    // userId:{
    //   type : ObjectId,
    //   ref:"User"
    //   },
      
    game:{
       type:String,
       
   },
   date:{
    type:Date,
    
    },

    tournamentname:{
        type:String,
        
    },

    platform:{
        type:String,
        
    },
    prize:{
        type:Number,
        
    },


  });

  module.exports = mongoose.model('AdminTournament', AdminTournament);