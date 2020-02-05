import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from '../home/Home';
import Hackathon from '../hackathons/Hackathon';

import HackInfo from '../hackathons/hackInfo/HackInfo';
import Reverse from '../Reverse/Reverse';
import Reverseinfo from '../Reverse/Reverseinfo/Reverseinfo';


export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component= {Home}/>
            <Route exact path='/hackathon' component= {Hackathon}/>
            <Route path='/hackathon/:id' component={HackInfo} />
            <Route exact path='/reverse' component= {Reverse}/>
            <Route path='/reverse/:id' component={Reverseinfo} />
        </Switch>
    )
}