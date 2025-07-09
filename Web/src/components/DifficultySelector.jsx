
import { Link } from "react-router-dom";
import {ROUTES} from "../constants";

const DifficultySelector = ({difficulties }) => {

  return (
    <div className="container w-50 text-center">
    <h1 className="fw-bold">Selecciona una dificultad</h1>
    <div className="list-group">
      {difficulties.map((difficulty) => (
        <div key={difficulty.id} className="col">
          <Link to={`${ROUTES.DIFFICULTIES}/${difficulty.id}`}>
            <button className="list-group-item list-group-item-action fw-bolder border border-dark">{difficulty.name}</button>
          </Link>
        </div>
      ))}
    </div>
   </div>
  );
};

export default DifficultySelector;