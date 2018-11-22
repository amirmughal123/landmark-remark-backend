import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
});

export default mongoose.model("User", userSchema);
