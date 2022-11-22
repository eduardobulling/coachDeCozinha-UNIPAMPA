import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

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



        <div className={tilesClasses}>






          <div style={{
            display: 'block',
            width: 700,
            padding: 30
          }}>
            <h4>Receita</h4>

            
            <Card>
    <Card.Img variant="top" src={require('../../assets/images/sanduichenatural.jpg')}  style={{maxWidth: '100px', alignItems:'center'}} />
    <Card.Body>
      <Card.Text>
        Nome
      </Card.Text>
      <Card.Text>
        Ingredientes
      </Card.Text>
      <Card.Text>
        Modo de preparo
      </Card.Text>
    </Card.Body>
  </Card>

            


          </div>






        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;