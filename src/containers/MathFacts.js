import React from "react";
import Card from "react-bootstrap/Card";
import PlayNow from "../components/PlayNow";

function MathFacts() {
    return(
        <div>
        <Card border="grey" className="col-100%"
              style={{ margin: '5px', display: 'block', width: '100%', height: '300px', maxHeight: '550px' }}>
        <Card.Body>
          <Card.Title>Math Facts Practice</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      Improve your mental math skills with this<br />
                                  exciting game!
                    </Card.Text>
        </Card.Body>
        </Card>
        <PlayNow  label="Play Now!"
          link="/start/mathfacts" />
        </div>
    )
};

export default MathFacts;