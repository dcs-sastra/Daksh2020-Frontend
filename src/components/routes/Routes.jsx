import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Hackathon from '../hackathons/Hackathon';

import HackInfo from '../hackathons/hackInfo/HackInfo';

import Workshop from '../workshops/Workshop';
import WorkInfo from '../workshops/workInfo/WorkInfo';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/hackathon' component={Hackathon} />
            <Route path='/hackathon/:id' component={HackInfo} />
            <Route exact path='/workshop' component={Workshop} />
            <Route path='/workshop/:id' component={WorkInfo} />
        </Switch>
    )
}
