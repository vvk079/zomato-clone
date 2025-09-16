const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js"); // aapka mongoose user model
const authMiddleware = require("../middleware/auth.middleware.js");

// ✅ Get logged-in user's profile
router.get("/profile", authMiddleware.authuserMiddleWare, async (req, res) => {
  try {
    const { fullname, email, _id } = req.user; // middleware se user mil raha h
    res.json({ fullname, email, _id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
