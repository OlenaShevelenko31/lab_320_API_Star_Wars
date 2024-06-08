

function GetAllStarships({ ships }) {
  return (
    <div>
      <div className="container" >
        {ships.map((ship, index) => (
          <p className="box" key={index}>
            <h2>{ship.name}</h2>
          </p>
        ))}
      </div>
    </div>
  );
}

export default GetAllStarships;
