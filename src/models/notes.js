import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  name: String,
  text: String,
  location: Object
});

export default mongoose.model("Note", noteSchema);
