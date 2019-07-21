import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Table, Col, Row } from 'reactstrap'

class EventBox extends Component {

    constructor(props) {
        super(props);
        this.props.mode = props.mode;
        this.state = props.state;
    }

    render() {

        switch (this.props.mode) {
            case 'create':
                return <this.renderViewMode />;
            case 'edit':
                return <this.renderEditMode/>;
            case 'view':
                return <this.renderViewMode/>;
            case 'delete':
                return <this.renderDeleteMode/>;
            default:
                throw new Error('Invalid render state.');
        }        
    };

    renderViewMode() {
        return <div className='col-lg-12'></div>;
    }

    renderCreateMode() {

    }

    renderEditMode() {

    }

    renderDeleteMode() {

    }
}


export default EventBox

