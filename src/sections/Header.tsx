import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = window.innerHeight * 0.05; // 5% of the screen height
  //     setIsScrolled(window.scrollY > scrollThreshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      className="fixed w-full p-2 px-8 flex justify-between items-center z-40 bg-transparent"
    >
      <Link href="/">
        <Image src="/conneft-logo.svg" alt="Conneft" width={100} height={100} />
      </Link>
    </header>
  );
}
