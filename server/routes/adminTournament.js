const express = require('express')
const router = express.Router()
const {companyinfo,getusertournament,deletetournament} = require("./../controller/adminTournament")




router.post("/registertournament",companyinfo)
router.get("/gettournamentinfo",getusertournament)
router.delete("/deletetournament/:id",deletetournament)
module.exports=router