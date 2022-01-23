const User = require("./../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getMaxListeners } = require("./../model/user");
const Speakeasy = require("speakeasy");

exports.register = (req, res) => {
  User.findOne({ emailaddress: req.body.emailaddress }).then((user) => {
    if (user) {
      return res.json({ emailaddress: "Email already exists" });
    } else {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailaddress: req.body.emailaddress,
        password: req.body.password,
        phone: req.body.phone,
        profilepic: "",
        aboutme:"",
        facebook:"",
        youtube:"",
        instagram:"",
        twitter:"",
        twitch:""


      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          // newUser
          //   .save()
          //   .then((user) => res.json(user))
          //   .catch((err) => console.log(err));
          //This is otp genrator.
          let secret = Speakeasy.generateSecret({ length: 20 });
          secret = secret.base32;
          const token = Speakeasy.totp({
            secret: secret,
            encoding: "base32",
          });
          res.send({ token, secret, newUser });

          var nodemailer = require("nodemailer");

          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASS,
            },
          });

          var mailOptions = {
            from: process.env.FROM_EMAIL,
            to: req.body.emailaddress,
            subject: "verification code",
            html: `<h1> Verification code</h1>
            <p>Hello ${req.body.firstname}! Thanks for signup but you need to required verification code of 6 digit after
            that you can enjoy our website</p>
            <p>${token}</p>`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        });
      });
    }
  });
};

exports.verificationcode = async (req, res) => {
  console.log("req.body.secret", req.body);

  const verify = {
    valid: Speakeasy.totp.verify({
      secret: req.body.user.secret,
      encoding: "base32",
      token: req.body.user.token,
      window: 1,
    }),
  };

  console.log("verify", verify);
  if (verify.valid) {
    //res.json({ message: "token is valid" });
    let user = await new User(req.body.user.newUser);
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    const payload = {
      id: user._id,
    };

    jwt.sign(
      {
        payload,
      },
      "secret",
      {
        expiresIn: "1h",
      },
      (err, token) => {
        // res.json({
        //   success: true,
        //   token: token,
        //   user: user,
        // });
       
        res.status(200).cookie("token", token, options).json({
          success: true,
          user,
          token,
        });
      }
    );

    user.save().then((saveuser) => {
      res.status(200).send({ saveuser: saveuser, message: "token is valid" });
    });
  } else {
    res.json({ message: "token is not valid please try again" });
  }
};

exports.login = (req, res) => {
  console.log(req.body.emailaddress);
  const password = req.body.password;
  User.findOne({ emailaddress: req.body.emailaddress }).then((user) => {
    if (!user) {
      return res.json({ emailaddress: "Email not found" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user._id,
        };

        jwt.sign(
          {
            payload,
          },
          "secret",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            res.json({
              success: true,
              token: token,
              user: user,
            });
          }
        );
      } else {
        return res.json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};

exports.getalluser = (req, res) => {
  User.find()
    .then((getuser) => {
      res.json(getuser);
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.uploadprofilepic = (req, res) => {
  console.log("req.params", req.params.id);
  console.log("req.file", req.file);

  User.findOneAndUpdate(
    req.params.id,
    { $set: { profilepic: req.file.path } },
    { new: true }
  )
    .then((profilepicupdate) => {
      res.json(profilepicupdate);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.uploadprofile = (req, res) => {
  console.log("req.params", req.params.id);

   User.findOneAndUpdate(
    req.params.id,
    {
      $set: {
        aboutme:req.body.aboutme,
        facebook:req.body.facebook,
        instagram:req.body.instagram,
        twitter:req.body.twitter,
        youtube:req.body.youtube,
        twitch:req.body.twitch,
      },
    },
    { new: true }
  )
    .then((profileupdate) => {
      res.json(profileupdate);
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.getusers = (req,res) => {
  User.find()
  .then((alluser)=>{
    res.send(alluser)
    console.log(alluser)
  })
  .catch((error)=>{
    console.log(error)
  })
}


exports.getprofilepic = (req, res) => {
  console.log("req.params", req.params.id);


  User.findOne({_id:req.params.id})
    .then((profilepic) => {
      res.json(profilepic)
      console.log(profilepic)
    })
    .catch((err) => {
      console.log(err);
    });
};
