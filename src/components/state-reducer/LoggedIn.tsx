import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => setIsLoggedIn(true);
  const handleLoggedOut = () => setIsLoggedIn(false);

  return (
    <div>
      <h2>User is {isLoggedIn ? "logged in" : "logged out"}</h2>
      {!isLoggedIn && (
        <button type="button" onClick={handleLoggedIn}>
          Login
        </button>
      )}
      {isLoggedIn && (
        <button type="button" onClick={handleLoggedOut}>
          Logout
        </button>
      )}
    </div>
  );
}
