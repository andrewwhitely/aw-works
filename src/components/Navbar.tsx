import { Link, useLocation } from "react-router-dom";
import Current from "./Current";

const navItems = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/experience": { name: "experience" },
  "/works": { name: "works" },
  "": { name: "·" },
  "/fieldnotes": { name: "field notes" },
  "/friends": { name: "friends" },
  "/uses": { name: "uses" },
};

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-medium tracking-tight text-[#111111] hover:text-[#666666] transition-colors"
        >
          Andrew Whitely
        </Link>
        <div className="flex gap-6">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              to={path}
              className={
                `text-sm transition-colors ${
                  pathname === path
                    ? "text-[#111111]"
                    : "text-[#666666] hover:text-[#111111]"
                }` + (path === "" ? " cursor-default pointer-events-none" : "")
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <Current />
    </nav>
  );
}
