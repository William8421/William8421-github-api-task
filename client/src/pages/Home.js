import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowDown,
  faMagnifyingGlass,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import UserComponent from "../components/UserComponent";
import ReposComponent from "../components/ReposComponent";
import gitHubLogo from '../images/github-octocat-logo.png'

export default function Home() {
  // =====useContext=====
  const { userData, loading, setLoading, fetchUserData, showRepos, setShowRepos, homeRef, reposRef } = useUser();
  //=====State variables=====

  //=====search=====
  const [username, setUsername] = useState("");

  //=====dark/light theme=====
  const [theme, setTheme] = useState(false);

  // =====switch theme functionality=====
  const toggleTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    setTheme(!theme);
    const newTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  };

  // =====useEffect to get saved theme=====
  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      const body = document.querySelector("body");
      body.classList.add("dark");
      setTheme(true);
    }
  }, []);

  const showUserRepos = () => {
    setShowRepos(true)
  }

  // =====scroll to repositories after rendering=====
  useEffect(() => {
    if (reposRef.current) {
      reposRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line
  }, [showRepos])

  // =====search user handler=====
  const submit = () => {
    setLoading(true);
    if (loading) {
        fetchUserData(username, 1);
        setLoading(false);          
    }
  };

  return (
    <div className="home" ref={homeRef}>
      <div className="theme-button-container">
        <h4>{!theme? 'Dark' : 'Light'} mode:</h4>
        <button className="theme-button" onClick={toggleTheme}>
          <FontAwesomeIcon
            icon={theme ? faToggleOn : faToggleOff}
            size="lg"
            className="theme-toggler"
          />
        </button>
      </div>

      {/* =====logo and search section===== */}
      <div className="logo-search-container">
        <img
          className="github-logo"
          src={gitHubLogo}
          alt="logo"
        />
        <div className="search-bar-container">
          <h2>Search Github user</h2>
          <div className="search-bar">
            <button onClick={submit}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                beat
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </button>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className={loading ? "input-open" : "input-closed"}
            />
          </div>
        </div>
      </div>
      <UserComponent />
      {/* =====repos button===== */}
      {userData.login && !showRepos ? (
            <div className="more-info-container">
              <h4>More about {userData.login}</h4>
              <button onClick={showUserRepos} className="more-info-button">
                <FontAwesomeIcon
                  icon={faCircleArrowDown}
                  bounce
                  size="lg"
                  className="arrow-icon"
                />
              </button>
            </div>
          ) : null}
          {showRepos && 
          
          <ReposComponent/>
          }
    </div>
  );
}
