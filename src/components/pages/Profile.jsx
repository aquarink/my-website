import { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/own.css';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import validator from 'validator'
import Cv from "../includes/Cv";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailGuest: '',
            loading: 'false',
            pesanModals: '',
            modalPesanShow: false,
            modalLoadingShow: false,
            msg: '',
            formDiv: true,
            showCv: 'true',
            // showCv: 'false',
        };
    }

    componentDidMount() {
        document.title = "Profile Juri Pebrianto"
    }

    closeModals = () => {
        this.setState({ modalPesanShow: false })
    }

    submitEmail = (e) => {
        e.preventDefault();

        let emailnya = this.state.emailGuest;

        if (emailnya !== '') {
            this.setState({ loading: 'true', modalLoadingShow: true })
            if (validator.isEmail(emailnya)) {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        'email_guest': emailnya,
                    })
                };

                fetch('https://waktu.my.id/pebrisubmit', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if (data.code === 200) {
                            this.setState({ formDiv: false, pesanModals: data.msg, showCv: 'true' })
                        } else {
                            this.setState({ pesanModals: data.msg })
                        }
                    });

                this.setState({ loading: 'false', modalLoadingShow: false, modalPesanShow: true })
            } else {
                this.setState({ modalLoadingShow: false, modalPesanShow: true, pesanModals: 'Email not valid format' })
            }
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Modal show={this.state.modalLoadingShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Message
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            Loading
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.modalPesanShow}>

                        <Modal.Header closeButton>
                            <Modal.Title>
                                Message
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.state.pesanModals}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModals}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className={this.state.formDiv ? undefined : 'hiddenElm'}>
                    <Container >
                        <Row>
                            <Col xs={6} md={2}></Col>

                            <Col xs={6} md={8}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Enter your e-email and wait for approval. {this.state.loading}</Form.Label>
                                        <Form.Control required type="email" name="guestEmail" placeholder="Enter your email" value={this.state.emailGuest} onChange={e => this.setState({ emailGuest: e.target.value })} />
                                        <Form.Text className="text-muted">
                                            <b>First</b>, your email will be saved into the system, then I will check and I will give you permission or refuse,
                                            the status information will be sent to the email. <br />
                                            <b>Second</b>, the email that was previously sent can be used to view my profile or CV if the status is accepted or I allow it.
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="dark" type="submit" onClick={this.submitEmail}>
                                        Signin
                                    </Button>
                                </Form>
                            </Col>

                            <Col xs={6} md={2}></Col>
                        </Row>
                    </Container>
                </div>

                {/* <div className={this.state.formDiv ? 'hiddenElm' : undefined}> */}
                <Container >
                        <Row>
                            <Col xs={6} md={2}></Col>

                            <Col xs={6} md={8}>
                                <Cv showStatus={this.state.showCv} /> 
                            </Col>

                            <Col xs={6} md={2}></Col>
                        </Row>
                    </Container>
                {/* </div> */}
            </Fragment>
        );
    }
}

export default Profile;