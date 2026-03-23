import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
        default: "",
    },
    address: {
        type: String,
        required: false,
    },
    contactNumber: {
        type: String,
        required: false,
    },
    createdDateUtc: {
        type: Date,
       default: Date.now,
    },
    updatedDateUtc: {
        type: Date,
        default: Date.now,
    }
});

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;
export { vendorSchema };