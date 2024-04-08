import { links } from "@/utils";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <ul className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              `capitalize font-light tracking-wide ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </ul>
  );
};
export default NavLinks;
