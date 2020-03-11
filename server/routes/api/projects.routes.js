const express = require("express");
const router = express.Router();

const User = require("../../models/User");
const Project = require("../../models/Project");

//Muestra todas las fundaciones registradas en la plataforma
router.get("/", (req, res, next) => {
  Project.find()

    .populate('foundation')
    .then(allProjects => res.json(allProjects))
    .catch(err => console.log(err));
});

//Muestra los proyectos creados por una fundación
router.get("/:id", (req, res, next) => {
  Project.findById(req.params.id)
    
    .then(allProjects => res.json(allProjects))
    .catch(err => console.log(err));
});

router.post('/addproject', (req, res, next) => {
  console.log(req.body)
   Project.create(req.body)
   .then (newProject => {
     
     console.log(newProject)
     res.json(newProject)
    })
    .catch(err => console.log(err))     
});

router.get('/projects/:id', (req, res, next) => {
    Project.find({
            subscribers: req.params.id
        })
   
        .then(projects => res.json(projects))
})


router.put("/edit/:id", (req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, req.body).then(updatedFoundation =>
    res.json(updatedFoundation)
  );
});

router.put('/deletesubscriber/:id', (req, res, next) => {
  const {
      SUBSCRIPTOR
  } = req.body
  Project.findByIdAndUpdate(req.params.id, {
          $pull: {
            subscribers: SUBSCRIPTOR
          }
      }, {
          new: true
      })
      .then(user => res.json({
          status: 'Project modified',
          user: user
      }))
      .catch(err => next(new Error(err)))
})


router.delete("/delete/:id", (req, res, next) => {
  Project.findByIdAndDelete(req.params.id).then(deletedProject =>
    res.json({ deleted: true, deletedProject })
  );
});





router.post("/subscribe/:id", (req, res) => {
  console.log(req.params.id)
  let project = req.params.id;

  console.log(req.body, project)
  
  Project.findByIdAndUpdate(project,  {$push: {subscribers: req.body.newSuscriber}})
  .then(()=> res.json({ok:true}))
  .catch((err)=>res.json(err))
});

module.exports = router;
