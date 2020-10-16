import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './css//Home.css';
import UpLoadFiles from "./drag-and-drop-file/UpLoadFiles"

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <UpLoadFiles/>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 4, offset: 1 }}><Jumbotron/></Col>
                    <Col md={{ span: 4, offset: 2 }}><Jumbotron/></Col>
                </Row>
                
            </Container>
        )
    }
}
