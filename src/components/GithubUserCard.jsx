import React from "react";

/**
 * Github User Information
 * {
 *   id, login, name, avatar_url, html_url
 * }
 */

function GithubUserCard({ user }) {
  return (
    <div className="bb-user-card">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="bb-user-avatar"
      />
      <div className="bb-user-info">
        <div className="bb-user-name">{user.name || user.login}</div>
        <div className="bb-user-login">@{user.login}</div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="bb-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default GithubUserCard;