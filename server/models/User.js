const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true },
  email: {type: String, required: true},
  password: {type: String, required: true},
  // discapacity: {type:String, enum:['Física', 'Psíquica']},
  comunidad: {type: String, required:true},
  foundations_created: [{
    type: Schema.Types.ObjectId,
    ref: "Foundation"
  }],
 },
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
