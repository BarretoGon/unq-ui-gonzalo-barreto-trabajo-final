
const DifficultySelector = ({difficulties }) => {
  console.log(difficulties);
  return (
    <div className="list-group">
      {difficulties.map((difficulty) => (
        <div key={difficulty.id} className="col">
          <button className="list-group-item list-group-item-action">{difficulty.name}</button>
        </div>
      ))}
    </div>
   
  );
};

export default DifficultySelector;