import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ContainerHome from './pages/Home/container'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={ContainerHome}/>
        </Switch>
    )
}
