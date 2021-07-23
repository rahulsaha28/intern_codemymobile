import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CustomNavBar } from './Components/CustomNavBar/CustomNavBar';
import { ProductDetailPage } from './Pages/ProductDetailPage';
import { CardPage } from './Pages/CardPage';
import { SignupPage } from './Pages/SignupPage';
import { LoginPage } from './Pages/LoginPage';


export type ContextType = {
  products:ProductType[]|[],
  setProducts:Dispatch<SetStateAction<[] | ProductType[]>>,
  cards:CardType[]|[],
  setCards:Dispatch<SetStateAction<[]|CardType[]>>
}

export interface ProductType  {
  id:number,
  title:string,
  description:string,
  price:number,
  picture:string
}

export interface CardType extends ProductType {
  count:number
}

export  const ContextForProduct = createContext<ContextType>({
  products:[],
  setProducts:()=>{},
  cards:[],
  setCards:()=>{}
});





function App() {
  
  const [products, setProducts] = useState<ProductType[]|[]>([]);
  const [cards, setCards] = useState<CardType[]|[]>([]);
  return (
    <div>
      <ContextForProduct.Provider value={{ products, setProducts, cards, setCards }}>
      <Router>
        {/* navbar is here */}
        <CustomNavBar/>

        {/* switch  */}
        <Switch>
          {/* login page */}
          <Route path="/login">
            <LoginPage/>
          </Route>
          {/* signup page */}
          <Route path="/signup">
            <SignupPage/>
          </Route>
          {/* card page */}
          <Route path="/card">
            <CardPage/>
          </Route>
          {/* product detail page */}
          <Route path="/product/:id">
            <ProductDetailPage/>
          </Route>
          {/* home page */}
          <Route path="/">
              <HomePage/>
          </Route>
        </Switch>
      </Router>
      </ContextForProduct.Provider>
    </div>
  );
}

export default App;
