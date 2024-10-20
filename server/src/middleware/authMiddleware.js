const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const JWT_SECRET = 'daniel-jake'; // Replace with your actual secret key

    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract token after 'Bearer '

    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided');
    }

    try {
        // Verify the token using the secret
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified; // Attach the decoded payload (user data) to the request
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // Token verification failed
        res.status(400).send('Invalid Token');
    }
};

module.exports = { authMiddleware };
