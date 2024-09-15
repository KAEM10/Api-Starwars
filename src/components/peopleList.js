import React, { Component } from 'react'; // Importa React y Component desde la biblioteca 'react'
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom' para crear enlaces entre rutas
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap

export default class peopleList extends Component {

    state = {
        people: [],
        searchQuery: ''
    }

    componentDidMount() { // Método del ciclo de vida de React que se ejecuta después de que el componente se monta en el DOM
        this.getPeople(); // Llama a la función getNotes para obtener las notas
    }

    getPeople = async (search = '') => {
        try {
            const res = await axios.get(`http://localhost:3001/?search=${search}`);
            this.setState({ people: res.data });
        } catch (error) {
            console.error('Error fetching people:', error);
        }
    }

    handleSearchInputChange = (event) => {
        const searchQuery = event.target.value;
        this.setState({ searchQuery }, () => {
            this.getPeople(this.state.searchQuery);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Enciclopedia Star Wars</h3>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ej: Darth Vader"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchInputChange}/>
                    </div>
                    <div className="row"> {/* Crea una fila para mostrar las notas */}
                        {
                            this.state.people.map(person => ( // Mapea sobre el array de notas en el estado y renderiza cada nota como un componente de tarjeta
                                <div className="col-md-4 p-2" key={person.url}>
                                    <div className="card">
                                        <Link className="btn btn-secondary" to={'/characteristics/' + person.url.split('/')[5]}> {/* Encabezado de la tarjeta con un título y un botón de edición */}
                                            <h5>{person.name}</h5>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}