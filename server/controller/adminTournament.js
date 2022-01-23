const AdminTournament =require("./../model/admin.Tournament");


exports.companyinfo = (req,res) => {
// console.log(req.body)

   
    const newTournament= new AdminTournament({
             
          game:req.body.game,
          date:req.body.date,
          tournamentname:req.body.tournamentname,
          platform:req.body.platform,
          prize:req.body.prize
            })
            newTournament.save()
            .then((created)=>{
                console.log(created)
                res.json(created)
            })
            .catch((err)=>{
                console.log("ERR",err)
            })
  }


  exports.getusertournament = (req,res) => {
    // console.log(req.body)
    
       
        AdminTournament.find()
        .then((getdata)=>{
            res.send(getdata)
            console.log(getdata)
        })
        .catch((error)=>{
            console.log(error)
        })
      }
    


      exports.deletetournament = (req,res) => {
        console.log("params",req.params)
             
           
            AdminTournament.findByIdAndDelete(req.params.id)
            .then((deltour)=>{
                res.send(deltour)
                console.log("DELTOR",deltour)
            })
            .catch((error)=>{
                console.log(error)
            })
          }
        
    
