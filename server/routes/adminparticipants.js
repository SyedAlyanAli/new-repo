const express = require('express')
const router = express.Router()
const {createparticipants , getparticipants } = require("./../controller/adminparticipants")




router.post("/addpersontotournament",createparticipants )
router.get("/getparticipants/:name",getparticipants)
module.exports=router