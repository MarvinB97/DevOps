import './PokemonCard.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";


function PokemonCard({ name, types, discoverer, id }) {
  const typeColors = {
    planta: "#1ff10469",
    agua: "#047ef169"
  };
  return (
    <Card style={{ width: '18rem' }} className="PokemonCard">
      
      <Card.Header className="PokemonCardHeader">
        <Card.Text className="PokemonCardHeaderDiscoverer">{discoverer}</Card.Text>
        <Card.Text className="PokemonCardHeaderId" >#00{id}</Card.Text>
      </Card.Header>
      <Card.Body className="PokemonCardBody">
        <Card.Title className="PokemonCardTitle">{name}</Card.Title>
        <Container>
          <Row>
            <Col className="PokemonCardCol">
              {types.map((type, i) => {
                return <Card.Text className="PokemonCardType" key={i} style={{backgroundColor: typeColors[type.toLowerCase()] || "#777"} }>{type}</Card.Text>
              })}
            </Col>
            <Col>
              <Card.Img className="PokemonCardImg" variant="top" src={`/src/assets/${name}.png`} />
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <div className="PokemonCardImgBackground"></div>
    </Card>
  )
}

export default PokemonCard
