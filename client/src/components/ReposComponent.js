import React from "react";
import { useUser } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ReposComponent() {
  // =====useContext data=====
  const { userData, loadNextPageOfRepos, homeRef, reposRef  } = useUser();

  // =====calling update repos from context=====
  const handleLoadNextPage = () => {
    loadNextPageOfRepos();
  };

  // =====back to home header=====
  const backToTop = () =>{
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='repos' ref={reposRef}>
      {userData.repos && (
         <div className="repos-info-container">
         <h2>Repositories</h2>
         <div className="repos-info-sub-container">
           <ul>
             {userData.repos.map((repo) => (
               <li key={repo.id}>
                 <div className="empty-div-repos">
                   <div className="second-empty-div-repos"></div>
                   <div className="repos-info">
                     <div>
                       <h4>Repository name:</h4>
                       <span>
                         <a
                           href={userData.html_url}
                           target="_blank"
                           rel="noreferrer"
                         >
                           {repo.name}
                         </a>
                       </span>
                     </div>
                     <div>
                       <h4>Description:</h4>
                       <span>
                         {repo.description
                           ? repo.description
                           : " No description provided"}
                       </span>
                     </div>
                     <div>
                       <h4>Language:</h4>
                       <span>{repo.language}</span>
                     </div>
                   </div>
                 </div>
               </li>
             ))}
           </ul>
         </div>
       </div>
      )}
      {userData.repos.length < userData.public_repos? (
        <div className="more-info-container">
          <h4>More of {userData.login}'s repositories</h4>
          <button onClick={handleLoadNextPage} className="more-info-button">
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              bounce
              size="lg"
              className="arrow-icon" />
          </button>
          </div>
      ) : (
        null
      )}
      <button className="back-to-top-button" onClick={backToTop}>{<FontAwesomeIcon
              icon={faAngleDoubleUp}
              size="lg"
              className="arrow-up-icon" />}</button>
    </div>
  );
};
