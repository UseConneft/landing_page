"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import WaitlistModal from "@/components/WaitlistModal";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        id="call-to-action"
        className="relative p-20 h-full w-full bg-[#A8E4E5] flex flex-col gap-8 md:grid  md:grid-cols-2 overflow-hidden"
      >
        <div className="h-full flex justify-center items-center">
          <div className="h-full flex flex-col gap-8 justify-between items-center">
            <p className="text-black text-3xl">
              Make meaningful Connections Now
            </p>
            <div className="text-black flex gap-4">
              <span className="px-4 py-1 flex justify-center items-center text-sm border-2 rounded-lg border-[#5F5FA1]">
                Secure
              </span>
              <span className="px-4 py-1 flex justify-center items-center text-sm border-2 rounded-lg border-[#5F5FA1]">
                Fast
              </span>
              <span className="px-4 py-1 flex justify-center items-center text-sm border-2 rounded-lg border-[#5F5FA1]">
                Easy to Use
              </span>
            </div>
          </div>
        </div>
        <div className="h-full flex justify-center items-end gap-4">
          <Button
            text="Learn More"
            className="text-sm px-8 py-4 text-white bg-[#5F5FA1] border rounded-lg border-[#5F5FA1]"
          />
          <Button
            text="Join the Waitlist"
            className="text-sm px-8 py-4 bg-[#A8E4E5] border-2 rounded-lg border-[#5F5FA1]"
            onClick={handleOpenModal}
          />
        </div>
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
