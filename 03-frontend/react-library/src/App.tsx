import React from 'react';
import {Navbar} from './layouts/NavbarAndFooters/Navbar';
import './App.css';
import {Footer} from "./layouts/NavbarAndFooters/Footer";
import {Homepage} from "./layouts/Homepage/Homepage";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";

export const  App = () => {
  return (
      <div>
        <Navbar/>
       {/* <Homepage/>*/}
          <SearchBooksPage/>
        <Footer/>
      </div>
  );
}