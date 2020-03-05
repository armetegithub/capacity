const express = require('express');
const router  = express.Router();

const User = require('../models/User');
const Foundation = require('../models/Foundation');




//Muestra todas las fundaciones registradas en la plataforma
router.get('/', (req, res, next) =>{
    Foundation.find()
    .then(allFoundations => res.json(allFoundations))
    .catch(err => console.log(err));
});

//Muestra las fundaciones creadas por un usuario
router.get('/:id', (req, res, next) => {
    User.findById(
        req.params.id
    )
    .populate('foundations_created')
    .then(allFoundations => res.json(allFoundations))
    .catch(err => console.log(err))

});

router.post('/add', (req, res, next) => {

   Foundation.create(
      req.body
   )
   .then (newFoundation => res.json(newFoundation));
         
})


router.put("/edit/:id", (req, res, next) => {
  Foundation.findByIdAndUpdate(req.params.id, req.body).then(updatedFoundation =>
    res.json(updatedFoundation)
  );
});

router.delete("/delete/:id", (req, res, next) => {
      Foundation.findByIdAndDelete(req.params.id).then(deletedFoundation =>
    res.json({ deleted: true, deletedFoundation })
  );
});




module.exports = router;