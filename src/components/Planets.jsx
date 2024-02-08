
function Planets( { planets }) {
    
    return (
        <div className='planets-container'>
            <h2>List of Planets</h2>
            {planets.map((planet, index) => (
                <div key={index}>
                    <h3>{planet.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Planets;
