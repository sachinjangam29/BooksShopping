import React from 'react';
import {Navbar} from './layouts/NavbarAndFooters/Navbar';
import './App.css';
import {Footer} from "./layouts/NavbarAndFooters/Footer";
import {Homepage} from "./layouts/Homepage/Homepage";

export const  App = () => {
  return (
      <div>
        <Navbar/>
        <Homepage/>
        <Footer/>
      </div>
  );
}