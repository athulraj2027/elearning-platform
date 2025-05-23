const jwt = require("jsonwebtoken");

// Secret key used for signing and verifying JWTs
const secretKey = process.env.JWT_SECRET; // Replace this with a strong secret key in production

// Sample user data (this can be fetched from a database in a real application)

// Function to generate a JWT
const  generateJWT = (user)=> {
  // JWT payload containing user information
  const payload = {
    userId: user.id,
    username: user.Name,
  };

  // JWT options: expiresIn specifies the token's expiration time (e.g., 1 hour)
  const options = {
    expiresIn: "1h",
  };

  // Generate and return the JWT
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

// Function to verify a JWT
const verifyJWT = (token)=> {
  try {
    // Verify the JWT using the secret key
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    // If the token is invalid or expired, an error will be thrown
    console.error("JWT verification failed:", err.message);
    return null;
  }
}


module.exports = {verifyJWT,generateJWT}
