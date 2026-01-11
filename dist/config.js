import dotenv from 'dotenv';
dotenv.config();
// Validate and export
const config = {
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV || 'development'
};
// Runtime validation
if (!config.mongoUri || !config.jwtSecret) {
    throw new Error('Missing required .env variables');
}
export default config;
//# sourceMappingURL=config.js.map