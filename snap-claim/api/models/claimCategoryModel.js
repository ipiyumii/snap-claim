import mongoose from "mongoose";

const claimCategorySchema = new mongoose.Schema({
   categoryName: {
    type: String,
    required: true
   },
    createdDateUtc: {
    type: Date,
    default: Date.now
   },
    updatedDateUtc: {
    type: Date,
    default: Date.now
   }

})

const ClaimCategory = mongoose.model("ClaimCategory", claimCategorySchema);

export default ClaimCategory;
