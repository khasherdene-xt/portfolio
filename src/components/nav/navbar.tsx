"use client";

import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center shrink-0">
      <nav className="flex gap-2 rounded-3xl  py-2 items-center">
        <Image
          className="rounded-full"
          src={"/assets/me.jpeg"}
          width={40}
          height={40}
          alt="me"
        />
        <span className="relative z-10">I own a mac. 👋</span>
      </nav>
    </div>
  );
};

export default NavBar;
