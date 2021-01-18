import React, {Component} from 'react';
import PersonShow from './Person/PersonShow';
import PersonIndex from './Person/PersonIndex';
import RentalObjectIndex from './RentalObject/RentalObjectIndex';
import RentalObjShow from './RentalObject/RentalObjShow';
import ContractShow from './Contract/ContractShow';
import ContractIndex from "./Contract/ContractIndex";
import {
    Switch,
    Route,
} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path="/person" component={PersonIndex} />
                    <Route path="/person/:handle" component={PersonShow} />
                    <Route exact path="/rental-object" component={RentalObjectIndex} />
                    <Route path="/rental-object/:handle" component={RentalObjShow} />
                    <Route exact path="/contract" component={ContractIndex} />
                    <Route path="/contract/:handle" component={ContractShow} />
                </Switch>
            </main>
        );
    }
}

Main.propTypes = {};

export default Main;
