const jwt = require("jsonwebtoken");

// Middleware to authenticate the user based on JWT

exports.auth = async (req, res, next) => {
  try {
    //retrieve the token from cookies
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    // Check if token is missing

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }
    try {
      // Verify and decode the token using JWT secret

      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    // Proceed to the next middleware or route handler

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};

// Middleware to check if the user has admin privileges

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Admin only",
      });
    }
    // Proceed to the next middleware or route handler

    next();
  } catch (error) {
    // Handle errors related to role verification

    return res.status(500).json({
      success: false,
      message: "User role cannot be verified,please try again",
    });
  }
};
