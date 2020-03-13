const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  name: {type: String, required: true },
  info:{type: String, required: true},
  imageURL: String,
  project_type: {type: String, enum:['ACTIVIDAD', 'TRABAJO', 'BECA']},
  foundation: {
      type: Schema.Types.ObjectId,
      ref: "Foundation"
    },
    subscribers: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
},

{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
