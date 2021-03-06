import React, { Component } from 'react';

import { list } from '../../services/movement';
import './style.scss';
import { Card, Button } from 'react-bootstrap';
import Search from '../../components/SearchBox';

class MovementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: [],
      search: ''
    };
    this.searchMovement = this.searchMovement.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  searchMovement(word) {
    this.setState({
      search: word
    });
  }

  fetchData() {
    list()
      .then(movements => {
        this.setState({
          movements
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.search);
    return (
      <div>
        <Search search={this.searchMovement} />
        <h2>List of movements:</h2>
        <div className="movement__list">
          {this.state.movements.map(movement => {
            if (movement.name.toLowerCase().includes(this.state.search.toLowerCase())) {
              return (
                <div className="movement__card">
                  <div className="card text-center">
                    <Card style={{ maxHeight: '18em', width: '18em' }} key={movement._id}>
                      <Card.Img
                        variant="top"
                        src={movement.picture}
                        style={{ maxHeight: '12em', objectFit: 'fill' }}
                      />
                      <Card.Body>
                        <Card.Title text="primary">{movement.name}</Card.Title>

                        <Button variant="dark" border="dark" href={`movement/${movement._id}`}>
                          See more
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            }

            /* <Link to={`movement/${movement._id}`} key={movement._id}>
              <p>{movement.name}</p>
            </Link>*/
          })}
        </div>
      </div>
    );
  }
}

export default MovementList;
