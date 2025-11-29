import LeftPanel from "./components/Layout/LeftPanel";
import RightPanel from "./components/Layout/RightPanel";
import React, { useEffect, useState } from "react";

function parseUserFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("user");
  if (!encoded) return null;

  try {
    const json = atob(encoded);
    return JSON.parse(json);
  } catch (e) {
    console.error("Failed to parse user from URL", e);
    return null;
  }
}

const BACKEND_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "https://bytebase-login-server.onrender.com";
    
export default function App() {
  const [user, setUser] = useState(null);

  // 页面加载时解析URL中的user
  useEffect(() => {
    const u = parseUserFromUrl();
    if (u) {
      setUser(u);
      // clean user parameter
      const url = new URL(window.location.href);
      url.searchParams.delete("user");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const handleGithubLogin = () => {
    window.location.href =
      `${BACKEND_BASE_URL}/auth/github/login`;
  };

  return (
    <div style={{ display: "flex" }}>
      <LeftPanel />
      <RightPanel onGithubLogin={handleGithubLogin} user={user} />
    </div>
  );
}
