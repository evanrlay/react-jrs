import React, { Component } from "react";
import './Equipment.css';
import {CreateEquipment} from './CreateEquipment.jsx';
import {DisplayBoard} from '../Shared/DisplayBoard/DisplayBoard.jsx';
import {Equipment} from './Equipment.jsx';
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
 
export class EquipmentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: []
        };
    }

    componentDidMount() {
        this.getEquipment();
    }

    getEquipment() {
        axios.get("/api/equipment")
        .then(res => {
            this.setState({ equipment: res.data })
        });
    }

    getEquipmentForDisplay() {
        alert('clicked from equipment!');
    }


    render() {
        return (
        <React.Fragment>
            <Row className="align-items-center" style={{marginBottom: "50px"}}>
                <Col>
                    <CreateEquipment/>
                </Col>
                <Col>
                    <DisplayBoard itemType='Equipment' numberOfItems={this.state.equipment.length} getItems={this.getEquipmentForDisplay} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Equipment equipment={this.state.equipment}/>
            </Row>
        </React.Fragment>
        );
    }
}
