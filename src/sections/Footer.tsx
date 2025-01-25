// import Button from "@/components/Button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="relative h-full w-full p-2 flex flex-col bg-[#17111A] overflow-hidden">
      <div className="h-full w-full p-8 flex justify-center items-center">
        <div className="h-full flex justify-center items-center">
          <Image src="/footer.svg" alt="Image" width={500} height={500} />
        </div>
        {/* <div className="h-full w-full flex justify-center items-center">
          <Button
            text="Stay Updated"
            className="text-sm px-8 py-4 text-white bg-[#17111A] border-l-2 border-t-2 rounded-lg border-[#A8E4E5]"
            style={{ boxShadow: "4px 6px 6px #A8E4E5" }}
          />
        </div> */}
      </div>

      {/* Social icons */}
      <div className="h-full w-full p-4 md:pt-16 flex justify-start items-center gap-4">
        <span className="p-1 bg-[#6767AF] rounded-lg">
          <a href="">
            <LinkedinIcon size={24} color="#BBFFFF" />
          </a>
        </span>

        <span className="p-1 bg-[#6767AF] rounded-lg">
          <a href="">
            <InstagramIcon size={24} color="#BBFFFF" />
          </a>
        </span>
        <span className="p-1 bg-[#6767AF] rounded-lg">
          <a href="">
            <XIcon size={24} color="#BBFFFF" />
          </a>
        </span>
        <span className="p-1 bg-[#6767AF] rounded-lg">
          <a href="">
            <FacebookIcon size={24} color="#BBFFFF" />
          </a>
        </span>
      </div>
    </div>
  );
}
