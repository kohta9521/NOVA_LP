"use client";
import React, { useState, useRef } from "react";

// next
import Link from "next/link";

// icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// type
export type SubItemGroup = {
  id: string;
  title: string;
  items: {
    id: string;
    icon: React.ReactNode;
    name: string;
    link: string;
    desc: string;
  }[];
};

// props
type ListItemProps = {
  id: string;
  title: string;
  link: string;
  subItems?: SubItemGroup[];
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
          <span className="text-sm font-semibold">{title}</span>
          {subItems.length > 0 && (
            <span className="text-black">
              <MdOutlineKeyboardArrowDown className="text-base font-medium" />
            </span>
          )}
        </div>
        {/* <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full" /> */}
      </Link>

      {isHovered && subItems.length > 0 && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-lg shadow-lg z-50 p-6">
          <div className="grid grid-cols-3 gap-6">
            {subItems.map((group) => (
              <div key={group.id} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-sm font-bold text-black">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.id} className="mb-2">
                      <Link
                        href={item.link}
                        className=" text-base font-bold text-black  transition-colors"
                      >
                        <div className="flex w-full items-center gap-2 mb-1">
                          {item.icon}
                          <p className="block w-full text-base">{item.name}</p>
                        </div>
                        <p className="block ml-[25px] text-xs font-medium text-black">
                          {item.desc}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
