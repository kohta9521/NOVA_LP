import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// clsx
import { clsx } from "clsx";

// props
export type LogoProps = {
  id: string;
  link: string;
  size?: "small" | "medium" | "large";
};

const Logo = ({ id, link, size = "medium" }: LogoProps) => {
  return (
    <Link
      key={id}
      className={clsx(
        "block",
        size === "small" && "w-20 h-5",
        size === "medium" && "w-24 h-6",
        size === "large" && "w-32 h-8"
      )}
      href={link}
    >
      <Image
        src="/images/logo.webp"
        className="w-full h-auto"
        alt="logo"
        width={500}
        height={130}
      />
    </Link>
  );
};

export default Logo;
