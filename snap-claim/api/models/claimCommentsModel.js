import mongoose from "mongoose";

const claimCommentsSchema = new mongoose.Schema({
  claimId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Claim",
    required: true,
  },
  comment: {
    type: String,
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
  commentedByAdminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

const ClaimComments = mongoose.model("ClaimComments", claimCommentsSchema);
export default ClaimComments;
