
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameSession } from "../../services/gameService";
import { checkWord } from "../../services/gameService";
import { toast, ToastContainer } from "react-toastify";
import "./Game.css";
import { isGameFinished } from "../../utilities/validateAttempt";
import LetterGrid from "../../components/Game/letterGrid";
import GameResult from "../../components/Game/gameResult";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";


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
      .catch((error) => toast.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [difficultyId]);


   const handleSubmit = async (e) => {

     e.preventDefault();

     if (word.length !== gameSession.wordLenght) {
       toast.error(`The word must have ${gameSession.wordLenght} letters`);

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

      <div className="5">
        <Link to={`${ROUTES.HOME}`}>
          <button className="m-3 btn btn-secondary">Cambiar dificultad</button>
        </Link>
      </div>

      <div className="container w-50 text-center text-white">
        <h1 className="fw-bold">Dificultad: {gameSession.difficulty.name}</h1>
        <h2 className="fw-bold">Palabra de {gameSession.wordLenght} letras</h2>
      </div>

      <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
      <LetterGrid attempts={attempts}/>
     {
        
        (isGameFinished(attempts)) ? (
          <GameResult attempts={attempts}></GameResult>
        ) : (
            <form onSubmit={handleSubmit} className="d-flex mt-2">
              <input type="text" className="form-control" value={word} onChange={(e) => setWord(e.target.value.toLowerCase())}/>
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
          )
     }

    </div>

  <ToastContainer />

    </>
      


    );
}

export default Game;