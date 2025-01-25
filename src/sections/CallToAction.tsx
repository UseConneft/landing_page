"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { WaitlistModal, SuccessModal } from "@/components/Modals";
import { AnimatePresence } from "framer-motion";

export default function CallToAction() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSubmit = async (email: string, fullName: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://waitlist.conneft.com/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, fullName }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setSubmittedEmail(email);
      setShowWaitlistModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error joining waitlist:', error);
      setError('Failed to join waitlist. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinWaitlist = () => {
    setError("");
    setShowWaitlistModal(true);
  };

  return (
    <>
      <div
        id="call-to-action"
        className="relative p-20 h-full w-full bg-[#A8E4E5] flex flex-col gap-8 md:grid  md:grid-cols-2 overflow-hidden"
      >
        <div className="h-full flex justify-center items-center">
          <div className="h-full flex flex-col gap-8 justify-between items-center">
            <p className="text-black text-2xl sm:text-2xl md:text-3xl ">
              Make meaningful Connections Now
            </p>
            <div className="text-black flex gap-4">
              <span className="px-4 py-1 flex justify-center items-center text-xs border-2 rounded-lg border-[#6767AF] bg-[#9EA0AC]">
                Secure
              </span>
              <span className="px-2 py-1 md:px-4 flex justify-center items-center text-xs border-2 rounded-lg border-[#6767AF] bg-[#6767AFD9]">
                Fast
              </span>
              <span className="px-4 py-1 flex justify-center items-center text-xs border-2 rounded-lg border-[#6767AF] bg-[#009EA0]">
                Easy to Use
              </span>
            </div>
          </div>
        </div>
        <div className="h-full flex justify-center items-end gap-4">
          {/* <Button
            text="Learn More"
            className="text-sm px-8 py-4 text-white bg-[#5F5FA1] border rounded-lg border-[#5F5FA1]"
          /> */}
          <Button
            text="Join the Waitlist"
            className="text-xs px-8 py-4 text-white bg-[#5F5FA1] border-2 rounded-lg border-[#5F5FA1]"
            onClick={handleJoinWaitlist}
          />
        </div>
      </div>

      <AnimatePresence>
        {showWaitlistModal && (
          <WaitlistModal
            isOpen={showWaitlistModal}
            onClose={() => setShowWaitlistModal(false)}
            onSubmit={handleWaitlistSubmit}
            error={error}
            isLoading={isLoading}
          />
        )}
        
        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            email={submittedEmail}
          />
        )}
      </AnimatePresence>
    </>
  );
}
