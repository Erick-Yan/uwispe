const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  username: { 
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },  
  email: { 
      type: String, 
      required: true,
      lowercase: true,
      validate: function(email) {
        return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
      }
    },
  eventname: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: false },
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;