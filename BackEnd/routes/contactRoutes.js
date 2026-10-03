const express = require("express");
const router = express.Router();
const Contact = require("../model/contactModel.js");

// POST route to store contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    const newContact = new Contact({ name, email, phone, company, message });
    await newContact.save();

    res
      .status(201)
      .json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
