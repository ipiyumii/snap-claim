import mongoose from "mongoose";

const enumClaimStatusSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    default: "",
  },
});

const EnumClaimStatus = mongoose.model(
  "EnumClaimStatus",
  enumClaimStatusSchema,
);

export default EnumClaimStatus;
