import './style.css';
//import {Joke} from '../../components/Joke'
import{useState} from 'react'

export const HomePage = () => {
  //const address = "http://localhost:4000/api/jokes";
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  
  return (
    <div className="container">
      <header>
        <h1>React webová aplikace</h1>
      </header>
     <main>
      <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke-text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={() => setLikeCount(likeCount + 1)}
            
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span  id="likes-up" className="likes-count likes-count--up">
            {likeCount}
          </span>
          <button
            onClick={() => setDislikeCount(dislikeCount + 1)}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span  id="likes-down" className="likes-count likes-count--down">
            {dislikeCount}
          </span>
        </div>
      </div>
      </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
      </div>
  );
};
