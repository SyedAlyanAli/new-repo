const express = require('express')
const router = express.Router()
const {creatematches } = require("./../controller/adminMatches")




router.post("/creatematches",creatematches )

module.exports=router