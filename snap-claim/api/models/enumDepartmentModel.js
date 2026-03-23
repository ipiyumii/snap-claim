import mongoose from "mongoose";

const enumDepartmentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    default: "",
  },
});

const EnumDepartment = mongoose.model(
  "EnumDepartment",
  enumDepartmentSchema
);

export default EnumDepartment;
export { enumDepartmentSchema };
