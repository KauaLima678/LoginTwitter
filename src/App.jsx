import { FaFacebook, FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import "./App.css";
import { FaXTwitter } from "react-icons/fa6";
import X from './images/Twitter.jpeg'
import { useEffect, useState } from "react";
function App() {

  const [theme, setTheme] = useState('light')
  const [rotate, setRotate] = useState(false);

 function darkTheme() {
  setRotate(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

     setTimeout(() => {
      setRotate(false); // remove a animação após 400ms
    }, 400);
  }


  

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="container">
      <div className="theme">
      <button onClick={darkTheme} className={rotate ? 'rotate-animation' : ''}>{theme === 'light'
            ? <FaSun color="rgb(255, 204, 0)" />
            : <FaMoon color="rgb(76, 76, 224)" />}</button>
      </div>
      <div className="sideImage">
        <img src={X} alt="" />
      </div>
      <div className="contentLogin">
        <div className="content">
            <div className="title">Happening Now</div>

            <div className="form">
              <h2>Join Today.</h2>

              <div className="buttons">
                <button><FaGoogle /> Continue with Google</button>
                <button><FaFacebook />Continue with Facebook</button>
              </div>

              <div className="line">
                <div className="line1"></div>
                <p>or</p>
                <div className="line2"></div>
              </div>

              <div className="button2">
                 <button>Create Account</button>
                 <span>By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a> including <a href="">Cookie Use</a>.</span>
              </div>
              

              <div className="final">
                <h1>Already have an account?</h1>
                <button>Sign In</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
