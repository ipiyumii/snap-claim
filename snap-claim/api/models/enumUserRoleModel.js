import mongoose from "mongoose";

const enumUserRoleSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    default: "",
  },
});

const EnumUserRole = mongoose.model(
  "EnumUserRole",
  enumUserRoleSchema
);

export default EnumUserRole;
export { enumUserRoleSchema };