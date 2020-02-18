const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamMemberSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TeamMember = mongoose.model(
  "TeamMemberSchema",
  TeamMemberSchema
);
