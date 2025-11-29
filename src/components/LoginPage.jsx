import React from "react";
import GithubUserCard from "./GithubUserCard";

/**
 * Bytebase Login
 */

const BACKEND_BASE_URL = "https://******.onrender.com"; // change later

function LoginPage({ user }) {
  // press then going to github
  const handleGithubLogin = () => {
    window.location.href = `${BACKEND_BASE_URL}/auth/github/login`;
  };

  return (
    <div className="bb-page">
      <div className="bb-card">
        {/* Logo and title */}
        <div className="bb-logo-row">
          <div className="bb-logo-circle">B</div>
          <span className="bb-logo-text">Bytebase</span>
        </div>

        {/* login */}
        <div className="bb-tab-row">
          <button className="bb-tab-active">Standard</button>
        </div>

        {/* Email / Password */}
        <form className="bb-form" onSubmit={(e) => e.preventDefault()}>
          <label className="bb-label">
            Email <span className="bb-required">*</span>
            <input
              className="bb-input"
              type="email"
              placeholder="jim@example.com"
            />
          </label>

          <label className="bb-label bb-password-row">
            <div>
              Password <span className="bb-required">*</span>
            </div>
            <a href="#" className="bb-link bb-forgot-link">
              Forgot your password?
            </a>
          </label>
          <div className="bb-password-input-wrapper">
            <input className="bb-input" type="password" />
            <button
              type="button"
              className="bb-password-toggle"
              aria-label="Toggle password visibility"
            >
              👁
            </button>
          </div>

          <button type="submit" className="bb-primary-btn">
            Sign in
          </button>
        </form>

        {/* GitHub login */}
        <div className="bb-divider">
          <span className="bb-divider-line" />
          <span className="bb-divider-text">or</span>
          <span className="bb-divider-line" />
        </div>

        <button
          type="button"
          className="bb-github-btn"
          onClick={handleGithubLogin}
        >
          <span className="bb-github-icon">🐙</span>
          <span>Sign in with GitHub</span>
        </button>

        {/* signup tip */}
        <div className="bb-footer-text">
          New to Bytebase?{" "}
          <a href="#" className="bb-link">
            Sign up
          </a>
        </div>
      </div>

      {/* show github information */}
      {user && (
        <div className="bb-user-panel">
          <GithubUserCard user={user} />
        </div>
      )}
    </div>
  );
}

export default LoginPage;