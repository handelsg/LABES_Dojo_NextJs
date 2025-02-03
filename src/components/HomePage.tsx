import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center slide-in">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      >
        Welcome to AI Chat Assistant
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-muted-foreground max-w-2xl"
      >
        Your friendly AI companion is here to help! Start a conversation in the chat
        or customize your experience in settings. We're excited to assist you on your journey!
      </motion.p>
    </div>
  );
};