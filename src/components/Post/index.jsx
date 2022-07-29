import React from 'react'
import { Card, CardImg, Container, Row, Col } from 'react-bootstrap'
import Button from '../Button'

import './style.css'

function Post() {
  return (
    <div id="posts" className='post_content'>
      <Container className='post_container'>
        <Row>
          <Col sm={12} md={6} lg={6}> <h1 className='post_h1'>New<br />In Post</h1></Col>
          <Col>
            <CardImg className='card_post_image' src='https://media-exp1.licdn.com/dms/image/C4D22AQGYxcCDtydPJQ/feedshare-shrink_1280/0/1657199918611?e=1661990400&v=beta&t=0A5u8pbQgqP0rzCtChHNGHfrAFO9hYESKqVim4JZjQU' />
            <Card.Body sm={12} md={6} lg={6} className='card_post_text'>
              <Card.Title>Arrow function</Card.Title>
              <Card.Text>Arrow function expression, is a short way to write a JavaScript function expression</Card.Text>
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/posts/karinaosuka_javascript-arrowfunction-frontend-activity-6950800255453933569-RqqN?utm_source=linkedin_share&utm_medium=member_desktop_web">
                <div className='card_post_btn'>
                  <Button text="view all" />
                </div>
              </a>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Post
