import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";

const Auth = (props) => {
  const [authState, setAuthState] = useState("login");

  return (
    <>
      <header>
        <div id="logo">
          <span className="icon">
            account_box
          </span>
          <span>
            Calen<b>dar</b>
          </span>
        </div>
      </header>
      <main className="calendar">
        <div className="header row flex-middle">
          <div className="col col-center">
            <span
              onClick={() => setAuthState("login")}
              className={`text-btn ${authState === "login" ? "active" : ""}`}
            >
              LOG IN
            </span>
          </div>
          <div className="col col-center">
            <span
              onClick={() => setAuthState("register")}
              className={`text-btn ${authState === "register" ? "active" : ""
                }`}
            >
              REGISTER
            </span>
          </div>
        </div>
        {authState === "login" ? (
          <Login setIsLoggedIn={props.setIsLoggedIn} />
        ) : (
          <Register setIsLoggedIn={props.setIsLoggedIn} />
        )
        }
      </main>
    </>
  );
};

export default Auth;
