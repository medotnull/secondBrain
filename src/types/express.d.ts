declare global {
  namespace Express {
    interface Request {
      userId?: string;  // Yeh line add karta hai req.userId
    }
  }
}

// Important: Yeh line add karo module banane ke liye
export {};