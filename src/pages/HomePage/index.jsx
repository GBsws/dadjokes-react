import './style.css';
import {Joke} from '../../components/Joke'
import {useState} from 'react'

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);
  return (
    <main>
      <div className="container">
      {jokes.map((joke)=>(
      <Joke key={joke.id} userName={joke.userName} userAvatar={joke.userAvatar} text={joke.text} likes={joke.likes} dislikes={joke.dislikes} />
      ))}
      </div>
      </main>
      )
      }
