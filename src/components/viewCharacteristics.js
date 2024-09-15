import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewCharacteristics() {
    const [people, setPeople] = useState([]);
    const params = useParams();
    //const navigate = useNavigate();

    useEffect(() => {
        async function getPeople() {
            try {
                const res = await axios.get('http://localhost:3001/' + params.id);
                setPeople(res.data);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        }
        getPeople();
    }, [params.id]);

    return (
        <div className="col">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>{people.name}</h5>
                </div>
                <div className="card-body">
                    <p>{'Heght: ' + people.height}</p>
                    <p>{'Mass: ' + people.mass}</p>
                    <p>{'Hair color: ' + people.hair_color}</p>
                    <p>{'Skin color: ' + people.skin_color}</p>
                    <p>{'Eye color: ' + people.eye_color}</p>
                    <p>{'Birth year: ' + people.birth_year}</p>
                    <p>{'Gender: ' + people.gender}</p>
                </div>
            </div>
        </div>
    );
}
export default ViewCharacteristics;
