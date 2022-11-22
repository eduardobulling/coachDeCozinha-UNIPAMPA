import React,{useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';


import api from '../../service/api';




const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );



  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );


  

  const [incidents, setIncidents] = useState([]);


  console.log(incidents);

  useEffect(() => {
    api.get('receitasAceitas').then(response => {
      setIncidents(response.data);
    });


  }, [incidents]);


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">


        <h4>Menu de Receitas</h4>


        <div className={tilesClasses}>

        {incidents.map(incident => (
          <div className="tiles-item " data-reveal-delay="200">
            <Card style={{ width: '18rem' }}>
            <img  src={incident.foto} alt="" style={{ height: '200px', width: '200px', alignItems:'center' }}/>
              <Card.Body>
                <Card.Title>{incident.nomeReceita}</Card.Title>
                <Card.Text>
                Por: {incident.nomeCriador}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>avaliação * * *</ListGroupItem>

              </ListGroup>
              <Card.Body>
                <Card.Link href="receita">Veja Mais</Card.Link>

              </Card.Body>
            </Card>
          </div>
        ))}


        </div>
      </div>

    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;