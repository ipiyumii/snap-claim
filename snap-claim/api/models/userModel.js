import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  entraUserId: {
    type: String,
    required: true,
    default: "",
  },
  fullName: {
    type: String,
    required: true,
    default: "",
  },
  profileUrl: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    default: "",
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EnumDepartment",
  },
  userserRoleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EnumUserRole",
    required: true,
  },
  userStatusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EnumUserStatus",
    required: true,
  },
  createdDateUtc: {
    type: Date,
    default: Date.now,
  },
  updatedDateUtc: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
export { userSchema };
