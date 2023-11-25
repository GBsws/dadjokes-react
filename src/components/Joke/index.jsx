import "./styly.css";
import { useState,useEffect } from "react";
export const Joke = ({
  userAvatar,
  userName,
  text,
  likes,
  dislikes
}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  useEffect(()=>{
    const fetchJoke=async ()=>{
    const response= await fetch(' https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json');
    const data = await response.json()
    }
    fetchJoke()
  },[])

  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src={userAvatar}
            />
            <p className="user-name">{userName}</p>
          </div>
          <p className="joke-text">
           {text}
          </p>
        </div>
        <div className="joke__likes">
          <button
            className="btn-like btn-like--up"
            onClick={() => setLikeCount(likeCount + 1)}
            id="btn-up"
          >{likes}</button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likeCount}
          </span>
          <button
            className="btn-like btn-like--down"
            onClick={() => setDislikeCount(dislikeCount + 1)}
            id="btn-down"
          >{dislikes}</button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikeCount}
          </span>
        </div>
      </div>
    </>
  );
};
