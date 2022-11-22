import React,{useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import ReactSearchBox from "react-search-box";
import Data from "../../service/results";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const handle = () =>{
    return(
     <div>
      {console.log('ola')}
      <a href="todasReceitas"></a>
     </div>
    );
   
  }

  const [query, setQuery] = useState("")


  function submit(e){
    e.preventDefault()

    console.log('ola')

  }

  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Quais ingredientes temos ?
              </h3>
          </div>
          <div className="" >
          <Form onSubmit={submit}>
            <Input type="text" label="Subscribe" 
            labelHidden hasIcon="right"  
            placeholder="ex: arroz, queijo, tomate..." 
            value={query}
            onChange={e => setQuery(e.target.value)}>
              
              
              
            </Input>
            <Button variant="outline-secondary" type="submit" >Pesquisar</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;