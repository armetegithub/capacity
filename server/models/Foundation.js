const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const foundationSchema = new Schema({
  
  name: {type: String, required: true },
  description: {type: String, required:true},
  email: {type: String, required: true},
  comunidad: {type: String, required: true},
  projects: [{
    type: Schema.Types.ObjectId,
    ref: "Project"
  }],
  admin:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  imageURL: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Foundation = mongoose.model('Foundation', foundationSchema);
module.exports = Foundation;
