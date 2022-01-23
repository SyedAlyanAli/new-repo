const express = require("express");
const router = express.Router();

const { register, login, getalluser , verificationcode,uploadprofilepic ,uploadprofile,getprofilepic ,getusers} = require("./../controller/user");
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)

  }
})




  const upload = multer({ storage: storage })

router.post("/register", register);
router.post("/verify", verificationcode);
router.get("/loaduser" ,getusers)
router.post("/login", login);
router.get("/getalluser", getalluser);
router.put('/image/uploadprofilepic/:id',upload.single("profilepic"),uploadprofilepic)
router.put('/editprofile/:_id',uploadprofile)
router.get("/image/getprofilepic/:id",getprofilepic)
module.exports = router;
