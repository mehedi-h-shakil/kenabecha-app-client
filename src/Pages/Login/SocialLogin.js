import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SocialLogin = ({ setSignupError }) => {
  const { googleSignIn } = useContext(AuthContext);
  const [googleUserEmail, setGoogleUserEmail] = useState("");
  const [token] = useToken(googleUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignIn = () => {
    const role = "Buyer";
    googleSignIn()
      .then((result) => {
        const user = result.user;
        saveUser(user?.email, user?.displayName, role);
      })
      .catch((err) => setSignupError(err.message));
  };

  const saveUser = (email, name, role) => {
    const user = { email: email, name: name, role: role };
    // console.log(user);
    fetch("https://kenabecha-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoogleUserEmail(email);
      });
  };

  return (
    <button onClick={handleSignIn} className="btn btn-outline w-full">
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default SocialLogin;
