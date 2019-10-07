import React from 'react';
import User from './views/User';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sections: [
        {
          setup: "Tutoriales de ejercicios",
          punchline: ""
        },
        {
          setup: "Horarios de coaches",
          punchline: "Carlos Roberto Gomez y Angy Rodriguez"
        },
        {
          setup: "Perfil de usuario",
          punchline: "Datos personales"
        },
        {
          setup: "Rutina y horario de ejercicio",
          punchline: "Rutina personal y horarios"
        }
      ]
    }
  }



  render() {

    let jokeCards = this.state.sections.map(sections_data => {
      return (
        <Col className="p-3" sm="4">
            <User sections_data={sections_data} />
        </Col>
      )
    })

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">GymTec+</h1>
          <p className="lead">Bienvenido a GymTec. Consulta coaches, horarios y ejercicios. </p>
          <hr className="my-2" />
          <p> Preparando tu rutina diaria.</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
            {jokeCards}
          </Row>
        </Container>
      </div>
    );
  }
  
};