import React from "react";
import Card from "react-bootstrap/Card";
import PlayNow from "../components/PlayNow";

function AnagramHunt() {
    return(
        <div>
        <Card border="grey" className="col-100%" 
              style={{ margin: '5px', display: 'inline-block', width: '100%', height: '300px', maxHeight: '550px' }}>
        <Card.Body>
          <Card.Title>Anagram Hunt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      Do you like Scrabble? Words with Friends?<br />
                        Improve how fast you can reconize<br />
                       anagrams in a word with this neat little<br />
                                      Game!
                    </Card.Text>
        </Card.Body>
        </Card>   
        <PlayNow label="Play Now!"
          link="/start/anagramhunt" />
        </div>
    )
};

export default AnagramHunt;