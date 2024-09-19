import mongoose, { Schema } from "mongoose";

const moviesSchema = new Schema(
  {
    title: { type: String, require: true },
    freeOrPaid: { type: String, require: true },
    displaySection: { type: String, require: true },
    catagories: { type: String, require: true },
    contentSummary: { type: String, require: true },
    date: { type: Date, require: true },
    lgImage: { type: String, require: true },
    smImage: { type: String, require: true },
    downloadUrl: { type: String, require: true },
    video: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const movies = mongoose.models.movies || mongoose.model("movies", moviesSchema);
export default movies;
