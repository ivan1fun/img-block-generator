import './App.scss';
import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import getTemplate from './getTemplate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      alt: '',
      imageUrl: ''
    };
    this.codeBlock = React.createRef();
    
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  copyToClipboard(e) {
    navigator.permissions
      .query({name: 'clipboard-write'})
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard.writeText(this.codeBlock.current?.value);
        }
      });
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (<Container>
      <Row>
        <Col className={'mt-5 mx-auto'}>
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={4}>
                    <Form className={'mb-3'}>
                      <Form.Group className={'mb-3'}>
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="url" value={this.state.link} name="link" onChange={this.handleChange} required placeholder="Enter link"/>
                      </Form.Group>
                      <Form.Group className={'mb-3'}>
                        <Form.Label>Image alt</Form.Label>
                        <Form.Control type="text" value={this.state.alt} name="alt" onChange={this.handleChange} required placeholder="Enter alt"/>
                      </Form.Group>
                      <Form.Group className={'mb-3'}>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="url" value={this.state.imageUrl} name="imageUrl" onChange={this.handleChange} required placeholder="Enter URL"/>
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col xs={8}>
                    <div className="w-100 mb-3">
                      <Form.Control as="textarea" ref={this.codeBlock} style={{height: '370px'}} value={getTemplate(this.state.link, this.state.link, this.state.imageUrl)}/>
                    </div>
                    <Button type="button" onClick={this.copyToClipboard}>Copy to clipboard</Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>);
  };
}
