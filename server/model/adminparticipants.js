const mongoose = require("mongoose")
  const { Schema } = mongoose;
  const {ObjectId} = mongoose.Schema.Types 

  
  const Adminparticipants = new Schema({

      

      participants:{
      type:Array
      },

      tournamentname:{
     type:String
       }


  });

  module.exports = mongoose.model('Adminparticipants', Adminparticipants);