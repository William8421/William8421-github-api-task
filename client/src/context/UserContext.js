import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // =====State variables =====

  //=====user data=====
  const [userData, setUserData] = useState({});
  const [reposPage, setReposPage] = useState(1);
  const [error, setError] = useState('')

  //=====search input open/close=====
  const [loading, setLoading] = useState(false);
  //=====show/hide repositories=====
  const [showRepos, setShowRepos] = useState(false)
  
  // =====base URL=====
  const baseUrl = "https://api.github.com";
  // =====axios instance=====
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  const userRef = useRef()
  const homeRef = useRef()
  const reposRef = useRef()
  
  // =====updating and calling next page of repos=====
  const loadNextPageOfRepos = async () => {
    try {
      const reposResponse = await axiosInstance.get(
        `/users/${userData.login}/repos?page=${reposPage + 1}`
      );
      setUserData((prevUserData) => ({
        ...prevUserData,
        repos: [...prevUserData.repos, ...reposResponse.data],
      }));

      setReposPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error(err);
      setError(err.response.data);
    }
  };

  

  // =====fetching the user & repos=====
  const fetchUserData = async (username) => {
    try {
      const userResponse = await axiosInstance.get(`/users/${username}`);
        const reposResponse = await axiosInstance.get(
          `/users/${username}/repos?page=${reposPage}`
        );
      setUserData({
        ...userResponse.data,
        repos: reposResponse.data,
      });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.response.data)
      setLoading(false);
    }
  };
  // =====scroll to user information after rendering=====
  useEffect(() => {
    if (userRef.current) {
      userRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userData.login]);


  return (
    <UserContext.Provider
      value={{ userData, loading, setLoading, fetchUserData, error, showRepos, setShowRepos, loadNextPageOfRepos, userRef, homeRef, reposRef }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
