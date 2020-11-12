import React, { Component } from "react";
import {DisplayBoard} from '../Shared/DisplayBoard/DisplayBoard.jsx';
import { Col, Row } from "react-bootstrap";
import { Jurisdictions } from "./Jurisdictions";
import axios from 'axios';
 
export class JurisdictionsDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jurisdictions: []
        };
    }

    componentDidMount() {
        this.getJurisdictions();
    }

    getJurisdictions() {
        axios.get("/api/jurisdictions")
        .then(res => {
            this.setState({ jurisdictions: res.data })
        });
    }


    getEquipmentForJurisdictions() {
        alert('clicked from Jurisdictions!');
    }

    render() {
        return (
        <React.Fragment>
            <Row>
                <Col></Col>
                <Col sm={6}>
                    <DisplayBoard itemType='Jurisdictions' numberOfItems={this.state.jurisdictions.length} getItems={this.getEquipmentForJurisdictions} />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Jurisdictions jurisdictions={this.state.jurisdictions}/>
            </Row>
        </React.Fragment>
        );
    }
}
