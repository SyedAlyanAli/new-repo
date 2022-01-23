const AdminMatches =require("../model/adminmatches");





exports.creatematches = (req,res) => {
console.log("req.body",req.body)

   
    const newParticipants= new AdminMatches({
        matchname:req.body.matchname,
        tournamentname:req.body.tournamentname,
        matchdate:req.body.matchdate,
        participants:req.body.participants
         
         
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

    