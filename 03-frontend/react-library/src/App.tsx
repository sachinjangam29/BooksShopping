import React from 'react';
import {Navbar} from './layouts/NavbarAndFooters/Navbar';
import './App.css';
import {Footer} from "./layouts/NavbarAndFooters/Footer";
import {Homepage} from "./layouts/Homepage/Homepage";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch} from "react-router-dom";

export const App = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <div className='flex-grow-1'>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home'/>
                    </Route>
                    <Route path='/home'>
                        <Homepage/>
                    </Route>
                    <Route path='/search'>
                        <SearchBooksPage/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}