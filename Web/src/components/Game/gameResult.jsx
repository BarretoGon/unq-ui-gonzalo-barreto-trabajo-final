
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { lettersCorrect } from '../../utilities/validateAttempt';

const GameResult = ({ attempts }) => {
  return (
    
    <>
    
    {
      (lettersCorrect(attempts)) ? (
        <div>
            <h1>¡Ganaste!</h1>
            <Link to={`${ROUTES.HOME}`}>
              <button className="list-group-item list-group-item-action">Volver a jugar</button>
            </Link>
          </div>
      ) : (
        <div>
          <h1>¡Perdiste!</h1>
          <Link to={`${ROUTES.HOME}`}>
            <button className="list-group-item list-group-item-action">Volver a jugar</button>
          </Link>
        </div>
        ) 
      
    }
     </>
      
    
  );
};

export default GameResult;