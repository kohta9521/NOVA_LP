import React from "react";

// next
import Link from "next/link";

// props
export type ListBlockItemProps = {
  id: string;
  link: string;
  text: string;
};

const ListBlockItem = ({ id, link, text }: ListBlockItemProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="block min-w-[130px] text-center py-2 mr-1 bg-[var(--blue-primary)] rounded-3xl"
    >
      <p className="text-white text-base font-bold">{text}</p>
    </Link>
  );
};

export default ListBlockItem;
