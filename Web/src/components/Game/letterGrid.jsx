
import "./letterGrid.css";
const LetterGrid = ({attempts }) => {

  return (
   <>
   
      {attempts.map((attempt, index) => (
            <div key={index} className="d-flex">
              {attempt.result.map((letter, index) => {
                const bgColor = letter.solution === 'absent'
                ? 'bg-danger'
                : letter.solution === 'correct'
                ? 'bg-success'
                : letter.solution === 'elsewhere'
                ? 'bg-warning'
                : 'bg-secondary'
              return(
                    <span key={index}
                      className={`${bgColor} letterGrid border border-black text-white text-uppercase fw-bold`}>
                      {letter.letter} 
                  </span>
              )
              })}
            </div>
    
    
          ))}

    </>
    
  );
};

export default LetterGrid;