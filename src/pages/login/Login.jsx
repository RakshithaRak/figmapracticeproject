import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import baselogo from "../../assets/icons/Baselogo.png";
import gitlabIcon from "../../assets/icons/Vector.png";
import appleIcon from "../../assets/icons/apple1.png";
import discordIcon from "../../assets/icons/carbon_logo-discord.png";
import linkedInIcon from "../../assets/icons/carbon_logo-linkedin.png";
import googleIcon from "../../assets/icons/google-icon.png";
import twitter from "../../assets/icons/twitter.png";
import twitterMobileIcon from "../../assets/icons/VectorBirdIcon1.png";
import GitlabMobileIcon from "../../assets/icons/VectorGitlabIcon.png";
import discordMobileIcon from "../../assets/icons/VectorDiscordIcon.png";
import linkedInMobileIcon from "../../assets/icons/VectorLinkedInIcon.png";

import { auth, provider } from "../../services/auth";

import "./Login.scss";

const socialIcons = [
  { icon: gitlabIcon, name: "Gitlab Icon", height: 44, width: 44 },
  { icon: twitter, name: "Twitter Icon", height: 41, width: 42 },
  { icon: linkedInIcon, name: "LinkedIn Icon", height: 48, width: 48 },
  { icon: discordIcon, name: "Discord Icon", height: 48, width: 50 },
];

const socialIconsMobileView = [
  { icon: GitlabMobileIcon, name: "Gitlab Icon", height: 28, width: 28 },
  { icon: twitterMobileIcon, name: "Twitter Icon", height: 26, width: 27 },
  {
    icon: linkedInMobileIcon,
    name: "LinkedIn Icon",
    height: 22.41,
    width: 23.25,
  },
  {
    icon: discordMobileIcon,
    name: "Discord Icon",
    height: 24.38,
    width: 22.75,
  },
];

const siginBtns = [
  { icon: googleIcon, label: "Sign in with Google" },
  { icon: appleIcon, label: "Sign in with Apple" },
];

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRedirectResult(auth)
      .then((response) => {
        if (!response) return;

        const { user } = response;
        const stringifiedUser = JSON.stringify({
          accessToken: user.accessToken,
          email: user.email,
        });

        localStorage.setItem("user", stringifiedUser);
        navigate("/upload", { replace: true });
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onGoogleSignIn = () =>
    signInWithRedirect(auth, provider).catch((error) => {
      alert(error.message);
      console.error(error);
    });

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/upload", { replace: true });
  };

  return (
    <main className="login-container">
      <section className="left-side">
        <div className="logo-container">
          <img src={baselogo} alt="Base Logo" className="baselogo" />
        </div>

        <p className="brand-name">BASE</p>

        <div className="social-icons">
          {socialIcons.map((socialIcon, index) => (
            <img
              alt={socialIcon.name}
              height={socialIcon.height}
              key={index}
              src={socialIcon.icon}
              width={socialIcon.width}
            />
          ))}
        </div>
      </section>
      <section className="right-side">
        <div className="rigth-side-inner-container">
          <p className="title">Sign In</p>
          <p className="tag-line">Sign in to your account</p>

          <section className="signin-options">
            {siginBtns.map((siginBtn, index) => (
              <button key={index} onClick={() => !index && onGoogleSignIn()}>
                <img src={siginBtn.icon} alt={siginBtn.label} />
                <span>{siginBtn.label}</span>
              </button>
            ))}
          </section>

          <form>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                value="johndoe@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value="••••••••"
              />
            </div>

            <a href="#">Forgot password?</a>

            <button className="sign" onClick={handleLogin}>
              Sign In
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <a href="#">Register here</a>
          </p>
        </div>
      </section>

      <section className="login-mobile-view">
        <div className="header">
          <div className="brand-logo-container">
            <img src={baselogo} alt="Brand Logo" />
          </div>
          <p>Base</p>
        </div>

        <div className="content">
          <section className="content-header">
            <p className="title">Sign In</p>
            <p className="tag-line">Sign in to your account</p>
          </section>

          <section className="signin-options">
            {siginBtns.map((siginBtn, index) => (
              <button key={index} onClick={() => !index && onGoogleSignIn()}>
                <img src={siginBtn.icon} alt={siginBtn.label} />
                <span>{siginBtn.label}</span>
              </button>
            ))}
          </section>

          <form>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
              />
            </div>

            <a href="#">Forgot password?</a>

            <button className="sign" onClick={handleLogin}>
              Sign In
            </button>
          </form>
        </div>

        <footer>
          <p>Don’t have an account?</p>
          <a href="">Register here</a>

          <section className="icons-container">
            {socialIconsMobileView.map((socialIcon, index) => (
              <img
                alt={socialIcon.name}
                height={socialIcon.height}
                key={index}
                src={socialIcon.icon}
                width={socialIcon.width}
              />
            ))}
          </section>
        </footer>
      </section>
    </main>
  );
};

export default Login;
