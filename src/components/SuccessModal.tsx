import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface SuccessModalProps {
  email: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  email,
  isOpen,
  onClose,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-4 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#6366f1] text-white rounded-2xl p-8 w-full max-w-md flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 hover:bg-white/10 rounded-full p-1 transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="bg-black rounded-full p-4 mb-6">
          <Check size={32} className="text-[#7dfd95]" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-center mb-2">
            We have Successfully added
          </h2>
          <h2 className="text-2xl font-bold text-center mb-4">
            you to our Waiting list
          </h2>
        </div>
        <p className="text-white/80 text-center mb-6">
          we will let you know when CONNEFT is ready.
        </p>
        <div className="w-full bg-white/20 rounded-lg p-4 text-center">
          {email}
        </div>
      </motion.div>
    </div>
  );
}
