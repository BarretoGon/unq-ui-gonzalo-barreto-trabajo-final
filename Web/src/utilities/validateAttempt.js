export const lettersCorrect = (attempts) => attempts.length > 0 && attempts[attempts.length-1].result.every((letter) => letter.solution === 'correct');
    
export const isGameFinished = (attempts) => lettersCorrect(attempts) || (attempts.length === 6);