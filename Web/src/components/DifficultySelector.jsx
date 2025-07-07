
import { Link } from "react-router-dom";
import {ROUTES} from "../constants";

const DifficultySelector = ({difficulties }) => {

  return (
    <div className="list-group">
      {difficulties.map((difficulty) => (
        <div key={difficulty.id} className="col">
          <Link to={`${ROUTES.DIFFICULTIES}/${difficulty.id}`}>
            <button className="list-group-item list-group-item-action">{difficulty.name}</button>
          </Link>
        </div>
      ))}
    </div>
   
  );
};

export default DifficultySelector;