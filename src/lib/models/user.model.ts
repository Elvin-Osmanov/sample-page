import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    profilePicture: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    isProMember: {
      type: Boolean,
      default: false,
    },
    progress: Number,
    level: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
