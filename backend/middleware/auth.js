import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // At the top of both files
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    console.log("VERIFYING with:", process.env.JWT_SECRET);
    console.log("token", token)
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(req.body)
    req.body.userId = token_decode.id;
    console.log(req.body)
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in authmiddleware" });
  }
};

export default authMiddleware;
