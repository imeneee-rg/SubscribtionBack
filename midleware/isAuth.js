

// role : verify if user is authenticated or not with the jwt token provided by the user in the http request header

function isauth (req, res, next)  {
 // const token = req.header("x-auth-token");

  // Check for token
   try {
    // Verify token
    // Add user from payload
    req.user = decoded;
    console.log("decoded user from token",decoded);
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};

module.exports = isauth