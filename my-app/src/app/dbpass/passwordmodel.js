import mongoose from "mongoose";
const passwordSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export const Newpassword = mongoose.models.Newpassword || mongoose.model("Newpassword", passwordSchema);