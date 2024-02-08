
function People( { people } ) {
    
    return (
        <div className='people-container'>
            <h2>List of People</h2>
            {people.map((person, index) => (
                <div key={index}>
                    <h3>{person.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default People;
