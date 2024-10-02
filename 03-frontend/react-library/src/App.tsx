import React from 'react';
import {Navbar} from './layouts/NavbarAndFooters/Navbar';
import './App.css';
import {Footer} from "./layouts/NavbarAndFooters/Footer";
import {Homepage} from "./layouts/Homepage/Homepage";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch} from "react-router-dom";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path='/' exact>
                   <Redirect to ='/home' />
                </Route>
                <Route path='/home'>
                    <Homepage/>
                </Route>
                <Route path='/search'>
                    <SearchBooksPage/>
                </Route>
            </Switch>

            <Footer/>
        </div>
    );
}