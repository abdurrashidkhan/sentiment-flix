import mongoose, { Schema } from "mongoose";

const booksSchema = new Schema(
  {
    bookName: { type: String, require: true },
    title: { type: String, require: true },
    contentDurations: { type: String, require: true },
    contentType: { type: String, require: true },
    catagories: { type: String, require: true },
    displaySection: { type: String, require: true },
    contentSubtitles: { type: String, require: false },
    director: { type: String, require: false },
    cast: { type: String, require: false },
    freeOrPaid: { type: String, require: true },
    smImage: { type: String, require: true },
    video: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, require: true },
  },
  {
    timestamps: true,
  }
);
const books = mongoose.models.books || mongoose.model("books", booksSchema);
export default books;
