import mongoose from "mongoose";

const Schema = mongoose.Schema;
const daily_schema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  total_contributions: {
    type: Number,
    required: true,
  },
});

export const Contribution =
  mongoose.models["Contributions"] ||
  mongoose.model("Contributions", daily_schema);