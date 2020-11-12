import React, { Component } from "react";
import {DisplayBoard} from '../Shared/DisplayBoard/DisplayBoard.jsx';
import { Row, Col } from "react-bootstrap";
import { InsuranceCarriers } from "./InsuranceCarriers.jsx";
import axios from 'axios';
 
export class InsuranceCarriersDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceCarriers: []
        };
    }
    componentDidMount() {
        this.getInsuranceCarriers();
    }

    getInsuranceCarriers() {
        axios.get("/api/insurance-carriers")
        .then(res => {
            this.setState({ insuranceCarriers: res.data })
        });
    }

    getEquipmentForInuranceCarriers() {
        alert('clicked from Insurance Carriers!');
    }


    render() {
        return (
        <React.Fragment>
            <Row className="align-items-center" style={{marginBottom: "50px"}}>
                <Col></Col>
                <Col sm={6}>
                    <DisplayBoard itemType='Insurance Carriers' numberOfItems={this.state.insuranceCarriers.length} getItems={this.getEquipmentForInuranceCarriers} />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <InsuranceCarriers insuranceCarriers={this.state.insuranceCarriers}/>
            </Row>
        </React.Fragment>
        );
    }
}
