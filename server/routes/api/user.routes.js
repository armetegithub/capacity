const express = require("express");
const router = express.Router();

const Foundation = require("../../models/Foundation");
const User = require("../../models/User");


router.get("/account/:id", (req, res, next) => {
    User.findById(req.params.id)
      .populate("projects_suscribe")
      .then(userProjects => res.json(userProjects))
      .catch(err => console.log(err));
  });





  

  module.exports = router;