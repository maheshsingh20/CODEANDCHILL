import React from "react";
import "./Ranking.css";

const Ranking = () => {
  const rankings = [
    {
      rank: 1,
      username: "TEJESH",
      problemsSolved: 50,
      avatar: "https://assets.leetcode.com/users/Tejesh37/avatar_1730554582.png",
      rankBadge: "/_next/static/images/rank-1st-a015fbaf6a9541f2abee10b0b010ca12.svg",
      profileLink: "/u/Tejesh37/",
      gradient: "linear-gradient(2.39deg, rgb(187, 162, 34) 2.17%, rgb(238, 218, 149) 98.33%)",
    },
    {
      rank: 2,
      username: "durancodes",
      problemsSolved: 50,
      avatar: "https://assets.leetcode.com/users/jaij6309/avatar_1724779277.png",
      rankBadge: "/_next/static/images/rank-2st-9fbb274370a07963e3197593000b1699.svg",
      profileLink: "/u/jaij6309/",
      gradient: "linear-gradient(2.39deg, rgb(153, 153, 153) 2.17%, rgb(192, 195, 202) 98.33%)",
    },
    {
      rank: 3,
      username: "Denys Hrytsai",
      problemsSolved: 50,
      avatar: "https://assets.leetcode.com/users/VBJfY3etqs/avatar_1731912860.png",
      rankBadge: "/_next/static/images/rank-3st-097a98ad21118d75eb8d5a18e03052db.svg",
      profileLink: "/u/VBJfY3etqs/",
      gradient: "linear-gradient(2.39deg, rgb(172, 126, 56) 2.17%, rgb(232, 189, 125) 98.33%)",
    },
    {
      rank: 4,
      username: "arathinayak02",
      problemsSolved: 50,
      avatar: "https://assets.leetcode.com/users/avatars/avatar_1703504299.png",
      profileLink: "/u/arathinayak02/",
    },
    {
      rank: 5,
      username: "Triet Trinh",
      problemsSolved: 50,
      avatar: "https://assets.leetcode.com/users/K50eiTGLUu/avatar_1730810042.png",
      profileLink: "/u/trinhminhtriet/",
    },
  ];

  return (
    <div className="weekly-ranking">
      <div className="ranking-header">
        <div className="ranking-title">Weekly Ranking</div>
        <div data-state="closed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            className="info-icon"
          >
            <path
              fillRule="evenodd"
              d="M12 1.4C6.146 1.4 1.4 6.146 1.4 12c0 5.854 4.746 10.6 10.6 10.6 5.855 0 10.6-4.746 10.6-10.6 0-5.854-4.745-10.6-10.6-10.6zm-1.4 7.645c0-.816.645-1.445 1.4-1.445.756 0 1.4.63 1.4 1.445 0 .816-.644 1.446-1.4 1.446a1 1 0 00-1 .999V13.12a1 1 0 002 0v-.78a3.444 3.444 0 002.4-3.296C15.4 7.16 13.897 5.6 12 5.6c-1.895 0-3.4 1.56-3.4 3.445a1 1 0 002 0zM13 16.8a1 1 0 10-2 0v.042a1 1 0 002 0V16.8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="ranking-list">
        {rankings.map((ranker) => (
          <a
            key={ranker.rank}
            href={ranker.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ranking-item"
          >
            <div className="rank-number">{ranker.rank}</div>
            <div
              className="avatar-container"
              style={{
                backgroundImage: ranker.gradient || "none",
              }}
            >
              <img
                className="avatar"
                src={ranker.avatar}
                alt={`${ranker.username} avatar`}
              />
              {ranker.rankBadge && (
                <img
                  className="rank-badge"
                  src={ranker.rankBadge}
                  alt={`rank ${ranker.rank}`}
                />
              )}
            </div>
            <div className="user-info">
              <div className="username">{ranker.username}</div>
              <div className="problems-solved">
                Solved {ranker.problemsSolved} problems
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="show-more">Show More</div>
    </div>
  );
};

export default Ranking;
