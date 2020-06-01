const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  getUser: async (req, res) => {
    res.send("User Get Route");
  },
  postUser: async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, async (err, user) => {
      if (err) {
        console.log("User controller post error: ", err);
      } else if (user) {
        res.json({
          error: `Already an existing user with the email: ${email}`,
        });
      } else {
        const newUser = new User({
          email,
          password,
        });
        await newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
          console.log(newUser);
        });
      }
    });
  },
  putUser: async (req, res) => {
    const passToHash = req.body.password;
    const hash = bcrypt.hashSync(passToHash, 10)
    req.body.password = hash;
    const { email, password } = req.body;
    const upDateUser = { email, password }
    await User.findByIdAndUpdate(req.params.id, upDateUser);
    res.json({ status: "User Updated" });
  },
  deleteUser: async (req, res) => {
    await User.findOneAndRemove(req.params.id);
    res.json({ status: "User Deleted" });
  },
};
