const express = require("express");
const router = express.Router();

const Foundation = require("../../models/Foundation");
const User = require("../../models/User");


router.get("/account/:id", (req, res, next) => {
    User.findById(req.params.id)
      .populate("foundations_created")
      .then(userFoundations => {
        console.log(userFoundations);
        res.json(userFoundations)})

      .catch(err => console.log(err));
   

  });





  

  module.exports = router;