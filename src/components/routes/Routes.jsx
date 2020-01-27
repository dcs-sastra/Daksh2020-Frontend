import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from '../home/Home';
import Hackathon from '../hackathons/Hackathon';
import Idea from '../hackathons/Idea'

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component= {Home}/>
            <Route exact path='/hackathon' component= {Hackathon}/>
            <Route exact path='/idea' component = {Idea} />
        </Switch>
    )
}