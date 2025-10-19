'use client'

import { useState, useRef } from 'react';
import { accountUser } from '../types/account/accountInterface';

export default function AvatarDropdown({
  account,
  onLogout
}: {
  account: accountUser;
  onLogout: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 500); 
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar user */}
      <img
        src={`http://localhost:3001/images/${account.img}`}
        alt="avatar"
        width={24}
        height={24}
        className="w-[24px] h-[24px] rounded-full object-cover border border-gray-300"
      />

      {/* Dropdown xuất hiện khi hover */}
      {
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`btnIfAvatar absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10 ${isOpen && 'openBtnIf'}`}
        >
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            style={{fontSize:12,}}
          >
            Sign out
          </button>
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            style={{fontSize:12,}}
          >
            View
          </button>
        </div>
      }
    </div>
  );
}
