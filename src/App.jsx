import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";

function parseUserFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("user");
  if (!encoded) return null;

  try {
    const json = atob(encoded);
    const user = JSON.parse(json);
    return user;
  } catch (e) {
    console.error("Failed to parse user from URL", e);
    return null;
  }
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = parseUserFromUrl();
    if (u) {
      setUser(u);
      const url = new URL(window.location.href);
      url.searchParams.delete("user");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return <LoginPage user={user} />;
}

export default App;
