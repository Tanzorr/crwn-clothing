import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

const HasePage= ()=>(
    <div>Hase Page</div>
)

function App() {
  return (
    <div>
      <Route exact  path={`/`} component={HomePage}/>
      <Route  path={`/shop/hats`} component={HasePage}/>
    </div>
  );
}

export default App;
