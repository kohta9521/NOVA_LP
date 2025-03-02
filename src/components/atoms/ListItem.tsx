"use client";
import React, { useState, useRef } from "react";

// next
import Link from "next/link";

// type
export type SubItem = {
  id: string;
  name: string;
  link: string;
};

// props
type ListItemProps = {
  id: string;
  title: string;
  link: string;
  subItems?: SubItem[];
};

const ListItem = ({ id, title, link, subItems = [] }: ListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (subItems.length > 0) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!subItems.length) {
      window.location.href = link;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        key={id}
        className={`block p-4 transition-colors relative ${
          isHovered ? "bg-white" : "hover:bg-gray-50"
        } group`}
        href={link}
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold mr-1">{title}</span>
          {subItems.length > 0 && (
            <span className="text-[var(--blue-primary)] text-2xl">+</span>
          )}
        </div>
        <div className="absolute bottom-2 left-0 w-0 h-0.5 bg-[var(--blue-primary)] transition-all duration-300 group-hover:w-full" />
      </Link>

      {isHovered && subItems.length > 0 && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-lg shadow-lg z-50 p-4">
          <ul>
            {subItems.map((item) => (
              <li key={item.id} className="py-2">
                <Link
                  href={item.link}
                  className="block text-sm font-bold hover:text-[var(--blue-primary)] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListItem;
