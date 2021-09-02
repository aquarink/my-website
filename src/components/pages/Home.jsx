import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
// import { Container, Row } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/own.css';

// images
import centos from '../images/centos.png'
import codeIgniter from '../images/codeIgniter.png'
import expressjs from '../images/expressjs.png'
import firebase from '../images/firebase.png'
import flutter from '../images/flutter.png'
import git from '../images/git.png'
import github from '../images/github.png'
import gitlab from '../images/gitlab.png'
import laravel from '../images/laravel.png'
import linux from '../images/linux.png'
import mariadb from '../images/mariadb.png'
import mongodb from '../images/mongodb.png'
import mysql from '../images/mysql.png'
import nodejs from '../images/nodejs.png'
import php from '../images/php.png'
import proxmox from '../images/proxmox.png'
import reactJs from '../images/react-js.png'
import reactNative from '../images/react-native.png'
import redis from '../images/redis.png'
import springBoot from '../images/spring-boot.png'
import bootstrap from '../images/bootstrap.png'
import web from '../images/web.png'
import aws from '../images/aws.png'
import gcp from '../images/gcp.png'

class Home extends Component {
    componentDidMount() {
        document.title = "Hi.. Welcome to Pebri's Web"
    }

    render() {
        return (
            <main className="container">
                <div className="bg-light rounded">
                    <center><h1>I want to tell about me</h1></center>
                    <p className="pJst">Currently, I'm happy to learn Framework for creating mobile applications,
                        namely, <b>Flutter and ReactNative</b>, I'm new to ReactNative and for Flutter,
                        I've made approximately 4 applications assisted by <b>Firebase for Push Notifications</b>,
                        and I like to use <b>Spring Boot (Java Framework)</b> as the backend and this website is built using <b>ReactJS</b>.
                        <br />
                        <br />
                        I have experience with <b>PHP programming</b> language, <b>Codeigneter</b> Framework, <b>Bootstrap Css</b> for about 5 years,
                        I also have experience making 1 application using Java programming language with Springboot Framework,
                        1 application with <b>Nodejs with Express</b> Framework and have also used <b>Laravel</b>. In building a website, usually I need <b>HTML,
                            CSS and JavaScript,</b> I often also use jQuery and have also used Angular (version 1).
                        <br />
                        <br />
                        In making applications, usually a database is needed, usually I use <b>MySql or MariaDB</b>, I have also used <b>MongoDb and Redis</b>.
                        Software or tools in performing server and network needs, I use <b>Proxmox as virtual machine management</b> and in managing
                        the versions or margins of the codes that have been created as well as backups, I use <b>Git, either uploaded to Github or Gitlab</b>.
                        <br />
                        <br />
                        Most of the <b>Web applications and APIs</b> that I make, I deploy to a <b>VPS server</b> (made by Proxmox) using the <b>Centos operating system</b>,
                        I am familiar with versions 6 and 7. I've never used <b>Amazon Web Service (AWS) or Google Cloud</b> because I mostly deploy to VPS (Centos),
                        but I've taken an online study about AWS, I know little about <b>EC2 and CloudFront</b>.
                    </p>
                    <hr />
                    <Container>
                        <Row>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={flutter} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={reactNative} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={firebase} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={springBoot} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={php} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={codeIgniter} thumbnail />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={bootstrap} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={nodejs} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={expressjs} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={laravel} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={web} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={mysql} thumbnail />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={mariadb} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={mongodb} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={redis} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={proxmox} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={git} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={github} thumbnail />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={gitlab} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={centos} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={reactJs} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={linux} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={aws} thumbnail />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image style={{ width: 200 }} src={gcp} thumbnail />
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <br />
                    </Container>
                </div>
            </main>
        );
    }
}

export default Home;