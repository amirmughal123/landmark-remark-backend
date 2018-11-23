import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  userName: String,
  description: String,
  location: Object
});

export default mongoose.model("Note", noteSchema);
