import LeftPanel from "./components/Layout/LeftPanel";
import RightPanel from "./components/Layout/RightPanel";

export default function App() {
  const handleGithubLogin = () => {
    window.location.href =
      "https://你的后端.com/auth/github/login";
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <LeftPanel />
      <RightPanel onGithubLogin={handleGithubLogin} />
    </div>
  );
}
