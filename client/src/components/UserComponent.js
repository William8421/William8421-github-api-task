import React from "react";
import { useUser } from "../context/UserContext.js";

export default function UserComponent() {
  // =====error handling=====
  const { userData, error, userRef } = useUser();

  return (
    <div className='user' ref={userRef}>
      {userData.login ? (
        <div className="user-info-container" key={userData.id}>
          <h2>User information</h2>
          <div className="user-info-sub-container">
            <img src={userData.avatar_url} alt="user" />
            <div className="empty-div-user">
              <div className="user-information">
                <div>
                  <h4>Username: </h4>
                  <span>
                    <a
                      href={userData.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {userData.login}
                    </a>
                  </span>
                </div>
                <div>
                  <h4>Name: </h4>
                  <span>{userData.name}</span>
                </div>
                <div>
                  <h4>Followers: </h4>
                  <span>{userData.followers}</span>
                </div>
                <div>
                  <h4>Following: </h4>
                  <span>{userData.following}</span>
                </div>
                <div>
                  <h4>Public repositories : </h4>
                  <span>{userData.public_repos}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="error">{error? `Not found or an error occurred` : null}</h3>
      )}
    </div>
  );
};
