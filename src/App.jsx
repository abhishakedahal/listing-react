import './App.css'
import  { useState, useEffect } from 'react'
import Body from './components/Body'
import Search from './components/Search'

function App() {

        const [people, setPeople] = useState([]);
        const [peopleCount, setPeopleCount] = useState(0);
        const [planetsCount, setPlanetsCount] = useState(0);
        const [planets, setPlanets] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);

        const noOfPeoplePages = Math.ceil(peopleCount / 10);
        const noOfPlanetsPages = Math.ceil(planetsCount / 10);

        let noOfPages;
        if (noOfPeoplePages > noOfPlanetsPages) {
                noOfPages = noOfPeoplePages;
        } else {
                noOfPages = noOfPlanetsPages;
        }

        useEffect(() => {
                fetch("https://swapi.dev/api/people/?page=" + currentPage )
                        .then((response) => response.json())
                        .then((data) => {
                                setPeople(data.results);
                                setPeopleCount(data.count);
                        })
                        .catch((error) => console.log(error));

                        fetch("https://swapi.dev/api/planets/?page=" + currentPage)
                        .then((response) => response.json())
                        .then((data) => {
                                setPlanets(data.results);
                                setPlanetsCount(data.count);
                        })
                        .catch((error) => console.log(error));

                        //get count of people

        }, [ currentPage ]);

        return (
        <>
            <h1>People and Planets</h1>
            <Search />
            <br></br>
                <>
                    <div className="people-planet-container">
                        <Body people={ people } planets={ planets } />
                    </div>
                    <div className="pagination">
                        {[...Array(noOfPages)].map((_, i) => (
                                <button key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                        ))}
                    </div>
                </>

        </>
    )
}

export default App