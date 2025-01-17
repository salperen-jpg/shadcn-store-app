import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo",
  });

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">register </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
