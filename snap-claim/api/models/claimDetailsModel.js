import mongoose from "mongoose";

const claimDetailsSchema = new mongoose.Schema({
    claimId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Claim",
    required: true
   },
   receiptBobUrl: {
    type: String
   },
   amount: {
    type: Number,
    required: true
   },
   createdDateUtc: {
    type: Date,
    default: Date.now
   },
    updatedDateUtc: {
    type: Date,
    default: Date.now
   },
   vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor"
   },
   description: {
    type: String
   }
})

const ClaimDetails = mongoose.model("ClaimDetail", claimDetailsSchema);

export default ClaimDetails;