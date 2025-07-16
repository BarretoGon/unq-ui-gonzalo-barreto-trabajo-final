import DifficultySelector from "../components/DifficultySelector";
import { useEffect, useState } from "react";
import { getDifficulties } from "../services/difficultService";
import Spinner from "../components/spinner/Spinner";
import { toast, ToastContainer } from "react-toastify";
const Home = () => {
    
  const [loading, setLoading] = useState(true); 
    
  const [difficulties, setDifficulties] = useState({
    list: [],
  });

 
  useEffect(() => {
    getDifficulties()
      .then((difficulties) => setDifficulties(difficulties))
      .catch((error) => toast.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);


     if (loading) {
        return <Spinner />;
     }


    return (
        <>
            <h1 className="m-5 text-uppercase text-center fw-bold text-success">Wordle</h1>
            <DifficultySelector difficulties={difficulties}></DifficultySelector>

            <ToastContainer />
        </>
    );
}

export default Home;