declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        // Add other JWT payload fields
      };
    }
  }
}

// Important: Yeh line add karo module banane ke liye
export {};