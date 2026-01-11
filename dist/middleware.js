import config from '../src/config.js';
import jwt from "jsonwebtoken";
export const userMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(403).json({
            message: "Unauthorized"
        });
    }
    const token = authHeader.split(" ")[1];
    // Bearer abc123 → split → ["Bearer", "abc123"]
    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }
    if (!config.jwtSecret) {
        return res.status(500).json({
            message: 'Server configuration error'
        });
    }
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        return res.status(403).json({
            message: 'Invalid token'
        });
    }
};
//# sourceMappingURL=middleware.js.map