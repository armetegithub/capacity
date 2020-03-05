const express = require("express");
const router = express.Router();

const User = require("../../models/User");
const Project = require("../../models/Project");

//Muestra todas las fundaciones registradas en la plataforma
router.get("/", (req, res, next) => {
  Project.find()
    .then(allProjects => res.json(allProjects))
    .catch(err => console.log(err));
});

//Muestra los proyectod creados por una fundación
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .populate("foundation")
    .then(allProjects => res.json(allProjects))
    .catch(err => console.log(err));
});

router.post("/add", (req, res, next) => {
  Project.create(req.body).then(newProject => res.json(newProject));
});

router.put("/edit/:id", (req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, req.body).then(updatedFoundation =>
    res.json(updatedFoundation)
  );
});

router.delete("/delete/:id", (req, res, next) => {
  Project.findByIdAndDelete(req.params.id).then(deletedProject =>
    res.json({ deleted: true, deletedProject })
  );
});

module.exports = router;
