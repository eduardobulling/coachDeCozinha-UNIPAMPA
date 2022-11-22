import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import TodasReceitas from './views/TodasReceitas'
import Receitas from './views/Receita';
import CadastroReceita from './views/CadastroReceita'


const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/todasReceitas" component={TodasReceitas} layout={LayoutDefault} />
          <AppRoute exact path="/receita" component={Receitas} layout={LayoutDefault} />
          <AppRoute exact path="/cadastrarReceita" component={CadastroReceita} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;