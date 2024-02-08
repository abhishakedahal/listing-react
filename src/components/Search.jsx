import { useState, useEffect } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const keysToDisplay = ['name', 'birth_year', 'height', 'gender', 'skin_color', 'hair_color'];

    useEffect(() => {
        if (query) {
            fetch(`https://swapi.dev/api/people/?search=${query}`)
                .then(response => response.json())
                .then(data => {
                    setResults(data.results);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                });
        }
    }, [query]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setQuery(event.target.value);
        }
    }

    return (
        <div>
            <input
                type="text"
                onKeyDown={handleKeyPress}
                placeholder="Search..."
            />
            {results.map((result, index) => (
                <div key={index}>
                    {keysToDisplay.map((key) => (
                        <p key={key}>
                            {key}: {result[key]}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Search;
