import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required:[true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email:{
      type: String,
      required:[true, "Email is required"],
      unique: true,
      lowecase: true,
      trim: true,
    },
    password:{
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
    role:{
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profileImage:{
      type: String,
      default: "",
    },
    isActive:{
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export  {"User", userSchema};