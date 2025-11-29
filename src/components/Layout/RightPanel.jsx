import React from "react";
import "./RightPanel.css";

export default function RightPanel({ onGithubLogin }) {
  return (
    <div className="right-container">
      <div className="login-box">

        {/* Logo */}
        <div className="logo-section">
          <img
            src="https://www.bytebase.com/images/logo.svg"
            alt="Bytebase"
            className="logo"
          />
          <h2 className="welcome-title">欢迎</h2>
          <p className="welcome-desc">登录 Bytebase 以继续使用 Bytebase Hub。</p>
        </div>

        {/* OAuth Login Buttons */}
        <div className="oauth-section">
          <button className="oauth-btn google-btn">
            <img src="/google-icon.svg" className="oauth-icon" />
            继续使用 Google
          </button>

          <button className="oauth-btn github-btn" onClick={onGithubLogin}>
            <img src="/github-icon.svg" className="oauth-icon" />
            继续使用 GitHub
          </button>

          <button className="oauth-btn ms-btn">
            <img src="/microsoft-icon.svg" className="oauth-icon" />
            继续使用 Microsoft Account
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">或</span>
          <span className="divider-line"></span>
        </div>

        {/* Email Login */}
        <div className="email-section">
          <label className="label">电子邮件地址 *</label>
          <input type="email" className="input" placeholder="you@example.com" />

          <button className="primary-btn">继续</button>
        </div>

        {/* Bottom */}
        <div className="register-text">
          没有账户？ <a href="#">注册</a>
        </div>

      </div>
    </div>
  );
}
