import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="loginForm">
        <div className="loginContents">
          <h2>ログイン</h2>
          <input type="email" placeholder="メールアドレス" />
          <button className="loginButton">ログイン</button>
          <div className="buttons">
            <button>Twitter</button>
            <button>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
