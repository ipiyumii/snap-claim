import mongoose from "mongoose";

const enumUserStatusSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    default: "",
  },
});

const EnumUserStatus = mongoose.model(
  "EnumUserStatus",
  enumUserStatusSchema
);

export default EnumUserStatus;
export { enumUserStatusSchema };