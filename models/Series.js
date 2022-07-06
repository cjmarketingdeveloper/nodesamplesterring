const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    rating: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Series", SeriesSchema);