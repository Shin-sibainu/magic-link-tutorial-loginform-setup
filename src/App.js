import "./App.css";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

let magic;
let magicGithub;

function App() {
  const emailRef = useRef();

  // const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    magic = new Magic("pk_live_360EBD901A43E814");
    magicGithub = new Magic("pk_live_360EBD901A43E814", {
      extensions: [new OAuthExtension()],
    });
  }, []);

  const loginWithEmail = async () => {
    //Emailでログイン
    // console.log(ref.current.value);
    try {
      await magic.auth.loginWithMagicLink({ email: emailRef.current.value });
      // setUser({ email: emailRef });
      navigate("/homepage"); //redirect
    } catch (err) {
      console.log(err);
    }
  };

  const loginWithGithub = async () => {
    //Emailでログイン
    // console.log(ref.current.value);
    try {
      await magicGithub.oauth.loginWithRedirect({
        provider: "github",
        redirectURI: `http:/localhost:3000/homepage`,
      });
      // navigate("/homepage"); //redirect
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="loginForm">
        <div className="loginContents">
          <h2>ログイン</h2>
          <input type="email" placeholder="メールアドレス" ref={emailRef} />
          <button className="loginButton" onClick={(e) => loginWithEmail(e)}>
            ログイン
          </button>
          <div className="buttons">
            <button onClick={() => loginWithGithub()}>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
