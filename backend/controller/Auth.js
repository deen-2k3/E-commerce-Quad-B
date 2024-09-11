const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// Signup Controller for Registering USers

exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const { fullName, userName, email, password, role } = req.body;
    // Check if All Details are there or not
    if (!fullName || !userName || !email || !password) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    let user;

    if (role) {
        user = await User.create({
        fullName,
        userName,
        email,
        role,
        password: hashedPassword,
        profilePhoto: `https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`,
      });
    } else {
        user = await User.create({
        fullName,
        userName,
        email,
        password: hashedPassword,
        profilePhoto: `https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`,
      });
    }

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};


