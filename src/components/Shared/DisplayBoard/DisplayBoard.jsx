import React, { Component } from "react";
import './DisplayBoard.css'
 
export class DisplayBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.getItems();
    }

    render() {
        return (
            <React.Fragment>
                <div className="display-board">
                    <h4>{this.props.itemType} Created</h4>
                    <div className="number">
                    {this.props.numberOfItems}
                    </div>
                    <div className="btn">
                        <button onClick={this.handleClick} type="button" className="btn btn-warning">Get all {this.props.itemType}</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}