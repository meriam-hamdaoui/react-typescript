import React, { useState } from "react";

type UserType = {
  name: string;
  email: string;
};
export default function UserS() {
  const [user, setUser] = useState<UserType | null>(null);
  /* asertion type: the developer is sure that the user will never be null
  in this case we don't need to initialise it to null
  ans instead we initial  as {} UserType
  const [user, setUser] = useState<UserType> ({} as UserType);
  after that accessing to user propreties without the ? mark
  */

  const handleLongin = () =>
    setUser({
      name: "Mariem",
      email: "mariem@example.com",
    });
  const handleLongout = () => setUser(null);

  return (
    <div>
      {!user ? (
        <button type="button" onClick={handleLongin}>
          Login
        </button>
      ) : (
        <>
          <h3>User name is {user?.name} </h3>
          <h3>User email is {user?.email} </h3>
          <button type="button" onClick={handleLongout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
