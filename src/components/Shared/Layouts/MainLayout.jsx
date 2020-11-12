import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {EquipmentDashboard} from '../../Equipment/EquipmentDashboard.jsx'
import {InsuranceCarriersDashboard} from '../../InsuranceCarriers/InsuranceCarriersDashboard.jsx'
import { Container } from 'react-bootstrap'
import { Navigation } from '../Navigation/Navigation.jsx'
import { UsersDashboard } from "../../Users/UsersDashboard.jsx";
import { JurisdictionsDashboard } from "../../Jurisdictions/JurisdictionsDashboard.jsx";
 
export class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Switch>
            <Route path='/users'>
                <UsersDashboard />
            </Route>
            <Route path='/equipment'>
              <EquipmentDashboard />
            </Route>
            <Route path='/jurisdictions'>
              <JurisdictionsDashboard />
            </Route>
            <Route path='/insurance-carriers'>
              <InsuranceCarriersDashboard />
            </Route>
            <Route path='/'>
                <UsersDashboard />
            </Route>
          </Switch>
        </Container>
    </div>
    );
  }
}