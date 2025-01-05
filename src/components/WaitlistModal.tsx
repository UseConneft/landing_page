"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (success) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://waitlist.conneft.com/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "" });
      } else {
        const errorData = await response.json();
        setError(
          errorData.detail || "An error occurred while submitting the form."
        );
      }
    } catch {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
    onClose();
  };

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto p-12 bg-[#86AFB8] rounded-lg relative"
          >
            <button
                onClick={onClose}
                className="text-red-500 hover:text-red-800 top-4 right-4 absolute"
              >
                <X size={24} />
              </button>

            <div className="flex justify-center items-center mb-4">
              <h2 className="text-xl sm:text-2xl md:text-2xl text-[#514F86] font-bold">
                Join The Waitlist Now
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-transparent border-2 border-[#17111A] rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#514F86] transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-transparent border-2 border-[#17111A] rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#514F86] transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              {error && (
                <p className="text-red-500 text-xs md:text-sm">{error}</p>
              )}
              {success && (
            <p className="text-green-500 text-xs md:text-sm">
              Thank you! You have successfully joined the waitlist.
            </p>
          )}
              <button
                type="submit"
                className="w-full py-2 md:py-3 flex items-center justify-center gap-4 px-4  bg-[#17111A] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#7467ff]/20 transition-all"
                disabled={loading}
              >
                <span className="flex text-center">
                  {loading ? "Submitting..." : "Submit"}
                </span>
                {!loading && <ArrowRight size={20} className="text-white text-center" />}
              </button>
            </form>
          </motion.div>
        </div>
  );
}
