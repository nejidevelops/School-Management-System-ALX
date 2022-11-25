import { useHistory } from "react-router-dom";
import { logOut } from "../../services/users";

const LogOut = () => {
  const history = useHistory();
  const signOutUser = async () => {
    logOut();
    setTimeout(() => {
      history.push("/login");
    }, 500);
  };
  signOutUser();
  return (
    <main>
      <h1>Logging out...</h1>
    </main>
  );
};

export default LogOut;
