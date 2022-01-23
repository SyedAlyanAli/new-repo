const Adminparticipants =require("../model/adminparticipants");





exports.createparticipants = async (req,res) => {
 console.log("req.body",req.body)
 

 const tournamentexist = await Adminparticipants.findOne({tournamentname:req.body.tournamentname})
 if(!tournamentexist){
 const newParticipants= new Adminparticipants({
             
            participants:req.body.participants,
            tournamentname:req.body.tournamentname,
           
              })
              newParticipants.save()
              .then((created)=>{
                  console.log(created)
                  res.json(created)
              })
              .catch((err)=>{
                  console.log("ERR",err)
              })
 }
 else{


  Adminparticipants.findOne(req.params.id)
  .then(tournament => {
    tournament.participants.push(req.body.participants)
    // save the updated tournament to the DB and take advantage of Promise-chaining
    return tournament.save()
  })
  // send a response to the client
  .then(savedTournament => {
    console.log(savedTournament
      
      
      


      )
    res.json(savedTournament)
  })
  .catch(err => res.json(err))
            

    
  }


  }


  exports.getparticipants = (req,res) => {
    Adminparticipants.findOne({tournamentname : req.params.name})
    .then((participants)=>{
      res.send(participants)
      console.log("participants",participants)
    })
    .catch(()=>{
      console.log("error")
    })
  }



  