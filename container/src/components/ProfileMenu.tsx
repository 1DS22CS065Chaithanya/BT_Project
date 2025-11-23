import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Circle */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full bg-background text-primary flex justify-center items-center cursor-pointer font-bold"
      >
        {user?.username?.charAt(0).toUpperCase()}
      </div>

      {/* Popup Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-background text-black shadow-md rounded-lg p-3 z-50">
          <p className="font-semibold">{user?.username}</p>
          <p className="text-sm text-textSecondary mb-3">{user?.email}</p>

          <button
            onClick={logout}
            className="w-full bg-error text-background py-1 rounded hover:bg-error"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
