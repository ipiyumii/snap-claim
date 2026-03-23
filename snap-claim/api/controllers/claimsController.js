import Claims from "../models/claimsModel.js";

export const createClaim = async (req, res) => {
  try {
    const claimData = new Claims(req.body);
    const savedClaim = await claimData.save();
    res.status(201).json(savedClaim);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getClaims = async (req, res) => {
  try {
    const claims = await Claims.find();
    res.status(200).json(claims);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};



