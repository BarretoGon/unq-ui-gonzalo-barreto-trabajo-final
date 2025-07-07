
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameSession } from "../../services/gameService";
import { checkWord } from "../../services/gameService";
import { toast, ToastContainer } from "react-toastify";
import "./Game.css";
import { lettersCorrect, isGameFinished } from "../../utilities/validateAttempt";
import {ROUTES} from "../../constants";
import { Link } from "react-router-dom";
import LetterGrid from "../../components/Game/letterGrid";
import GameResult from "../../components/Game/gameResult";


import Spinner from "../../components/spinner/Spinner";
const Game = () => {
  
  const { difficultyId } = useParams();
  
  const [loading, setLoading] = useState(true); 
    
  const [gameSession, setGameSession ] = useState({
   sessionId: '',
   difficulty: null,
   wordLenght: 0,
  });

    const [word, setWord] = useState('');
    const [result, setResult] = useState({
      list:[],

    });
    const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    getGameSession(difficultyId)
      .then((gameSession) => setGameSession(gameSession))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [difficultyId]);


   const handleSubmit = async (e) => {

     e.preventDefault();

     if (word.length !== gameSession.wordLenght) {
       toast.error(`La palabra debe tener ${gameSession.wordLenght} letras`);

    }else{
      const answerBody = {
        sessionId: gameSession.sessionId,
        word: word,
      };

      checkWord(answerBody).then((result) => {
        setResult(result);
        setAttempts((prevAttempts) => [...prevAttempts, { word, result }]);
      }).catch((error) => {
        toast.error(error);
      }).finally(() => {
        setWord('');
      });
      
    }

   
  };

      


   if (loading) {
        return <Spinner />;
     }


    return (
      <>
      <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
      <LetterGrid attempts={attempts}/>
     {
        
        (isGameFinished(attempts)) ? (
          <GameResult attempts={attempts}></GameResult>
        ) : (
            <form onSubmit={handleSubmit} >
              <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
              <button type="submit">Enviar</button>
            </form>
          )
     }

    </div>

  <ToastContainer />

    </>
      


    );
}

export default Game;