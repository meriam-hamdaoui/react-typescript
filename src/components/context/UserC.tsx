import { useContext } from "react";
import { UserContext } from "./UserContext";

const theUser = {
  name: "Mariem",
  email: "mariem@example.com",
};
export const UserC = () => {
  const userContext = useContext(UserContext);

  const handleLongin = () => userContext.setUser(theUser);

  const handleLongout = () => userContext.setUser(null);

  return (
    <div>
      {userContext.user ? (
        <>
          <button type="button" onClick={handleLongout}>
            Logout
          </button>
          <h3>User name is {userContext.user?.name} </h3>
          <h3>User name is {userContext.user?.email} </h3>
        </>
      ) : (
        <button type="button" onClick={handleLongin}>
          Login
        </button>
      )}
      {/* <button type="button" onClick={handleLongin}>
        Login
      </button>
      <button type="button" onClick={handleLongout}>
        Logout
      </button>
      <h3>User name is {userContext?.user?.name} </h3>
      <h3>User name is {userContext?.user?.email} </h3> */}
    </div>
  );
};
