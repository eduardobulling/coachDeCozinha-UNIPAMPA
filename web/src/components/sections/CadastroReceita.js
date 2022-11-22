import React,{useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
import { set } from 'lodash';

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


  const [nomeReceita,setNomeReceita]=useState()
  const [nomeCriador, setNomeCriador]=useState()
  const [email,setEmail]=useState()
  const [ingredientes, setIngredientes]=useState()
  const [modoPreparo, setModoPreparo]=useState()
  const [foto, setFoto]=useState()

  const[resposta, setResposta]=useState()


  const { result, uploader } = useDisplayImage(); 

  

  function useDisplayImage() {    

    const [result, setResult] = useState("");

    
    function uploader(e) {

      const imageFile = e.target.files[0];

      const reader = new FileReader();


      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
        
      });

      reader.readAsDataURL(imageFile);


    }

    return { result, uploader };

    
  }


  async function submit(e){
    e.preventDefault()

    const data ={
    nomeReceita:nomeReceita,
		nomeCriador:nomeCriador,
		emailCriador:email,
    ingredientes: ingredientes,
		modoPreparo:modoPreparo,
		foto: result,
    }


    try {

      const response = await api.post('cadastraReceita', data);

    alert(`Receita Cadastrada id:${response.data.id}`);

    setNomeCriador('')
    setNomeReceita('')
    setEmail('')
    setIngredientes('')
    setModoPreparo('')
    setFoto('')
      
    } catch (error) {
      alert(`Não foi possivel Cadastrar`);
      
    }
    
    
  }

 
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">

      
        
          <div className={tilesClasses}>

            


            

          <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Formulario de cadastro de receita</h4>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Informe seu Nome:</Form.Label>
          <Form.Control type="text" 
          value={nomeCriador}
        onChange={e => setNomeCriador(e.target.value)}/>                         
        </Form.Group>
        <Form.Group>
          <Form.Label>Informe seu Email:</Form.Label>
          <Form.Control type="email" 
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>                        
                 
        </Form.Group>

        <Form.Group>
          <Form.Label>Informe o Nome da Receita:</Form.Label>
          <Form.Control type="text" 
          value={nomeReceita}
        onChange={e => setNomeReceita(e.target.value)}/>


</Form.Group>

        <Form.Group>
          <Form.Label>Informe os Ingredientes:</Form.Label>
          <Form.Control type="text" 
                        value={ingredientes}
                        onChange={e => setIngredientes(e.target.value)}/>
                
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Modo de Preparo</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={10}
        value={modoPreparo}
        onChange={e => setModoPreparo(e.target.value)}/>
 
        
        

      </Form.Group>

        <Form.Group>
        <Form.Label htmlFor="formFileSm">Selecione a foto do Passageiro</Form.Label>
                <Form.Control type="file" size="sm" id="formFileSm" onChange={(e) => {
                 uploader(e);
        }}/>
        <div/>
        <div/>

        

{result && <img  src={result} alt="" style={{ height: '200px', width: '200px' }}/>}
              
                 
        </Form.Group>
        <h4></h4>
        
        <Button variant="outline-secondary" type="submit" >
           Cadastrar
        </Button>
      </Form>
    </div>
       
            

            

         
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;