
import { Link } from "react-router-dom";
import {ROUTES} from "../constants";
import { getColor } from "../utilities/difultiesColor";

const DifficultySelector = ({difficulties }) => {

 

  return (
    <div className="container w-25 text-center">
    <h1 className="fw-bold text-warning">Selecciona una dificultad</h1>
    <div className="list-group mt-5">
      {difficulties.map((difficulty) => (
      <div key={difficulty.id} className="col">
        <Link to={`${ROUTES.DIFFICULTIES}/${difficulty.id}`} className="text-decoration-none">
          <button className={`list-group-item list-group-item-action fw-bolder border border-dark m-2 bg-${getColor(difficulty.id)} text-white`}>
            {difficulty.name}
          </button>
        </Link>
      </div>
    ))}
    </div>
   </div>
  );
};

export default DifficultySelector;