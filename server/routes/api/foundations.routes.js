const express = require('express');
const router  = express.Router();

const User = require('../../models/User');
const Foundation = require('../../models/Foundation');




//Muestra todas las fundaciones registradas en la plataforma
router.get('/', (req, res, next) =>{
    Foundation.find()
    .populate('admin')
    .then(allFoundations => res.json(allFoundations))
    .catch(err => console.log(err));
});


// Muestra las fundaciones creadas por un usuario
// router.get('/:id', (req, res, next) => {
//     User.findById(req.params.id)
//     .populate('foundations_created')
//     .then(allFoundations => res.json(allFoundations))
//     .catch(err => console.log(err))

// });


router.get('/:id', (req, res, next) => {
  Foundation.findById(
      req.params.id
  )
  .populate('projects')
  .then(oneFoundation => res.json(oneFoundation))
  .catch(err => console.log(err))

});


// Añade una fundación
router.post('/addfoundation', (req, res, next) => {
  console.log(req.body)
   Foundation.create(req.body)
   .then (newFoundation => {
     console.log(newFoundation)
     res.json(newFoundation)
    })
    .catch(err => console.log(err))
         
})


router.put("/edit/:id", (req, res, next) => {
  Foundation.findByIdAndUpdate(req.params.id, req.body).then(updatedFoundation =>
    res.json(updatedFoundation)
  );
});

router.delete("/delete/:id", (req, res, next) => {
      Foundation.findByIdAndDelete(req.params.id).then(deleteFoundation =>
    res.json({ deleted: true, deleteFoundation })
  );
});




module.exports = router;