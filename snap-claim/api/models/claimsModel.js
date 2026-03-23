import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
   },
   categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClaimCategory",
    required: true
   },
   totalClaimAmount: {
    type: Number,
    required: true
   },
   claimStatusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EnumClaimStatus",
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
   statusUpdatedByAdminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
   },
   statusUpdatedDateUtc: {
    type: Date
   },
   claimDetails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClaimDetail",
    required: true
   }],
   claimComments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClaimComments"
   }]
});

const Claims = mongoose.model("Claim", claimSchema); //Schema → Model → MongoDB Collection - This schema becomes a collection //public DbSet<Claim> Claims { get; set; }

export default Claims;
export { claimSchema }; //allow other files to import and reuse this schema.
