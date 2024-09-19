import mongoose, { Schema } from "mongoose";

const seriesSchema = new Schema(
  {
    seriesName: { type: String, require: true },
    freeOrPaid: { type: String, require: true },
    catagories: { type: String, require: true },
    displaySection: { type: String, require: true },
    season: { type: Number, require: true },
    date: { type: Date, require: true },
    lgImage: { type: String, require: true },
    smImage: { type: String, require: true },
    contentSummary: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const series = mongoose.models.series || mongoose.model("series", seriesSchema);
export default series;
