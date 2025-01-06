import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Header() {
  return (
    <header className="fixed w-full p-2 px-8 bg-[#17111A] flex justify-between items-center z-50">
      <Link href="/">
        <Image src="/conneft-logo.svg" alt="Conneft" width={100} height={100} />
      </Link>

      <nav className="flex items-center gap-8">
        {/* <Link href="#" className="text-white hover:text-[#86AFB8]">
          Inform
        </Link>
        <Link href="#" className="text-white hover:text-[#86AFB8]">
          Convert
        </Link>
        <Link href="#" className="text-white hover:text-[#86AFB8]">
          Analyse
        </Link> */}
        <Button
          text="Sign up"
          className="px-4 py-2 text-black bg-gradient-to-b from-[#86AFB8] via-[#86AFB8]  to-[#6767AF]"
          style={{ boxShadow: "4px 4px 6px #6363A9" }}
        />
      </nav>
    </header>
  );
}
