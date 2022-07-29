import React from 'react'
import { Card, CardImg, Row, Col } from 'react-bootstrap'
import Button from '../Button'

import './style.css'

function SingleCard(props) {
  return (
    <div>
      <Card className='single_card_container' >
        <CardImg className='single_card_image' src={props.data.image} />
        <Card.Body className='overlay'>
          <Card.Title className='single_card_title'>{props.data.title}</Card.Title>
          <Card.Text>{props.data.text}</Card.Text>
          <Row>
            <Col>
              <a target='_blank' rel='noreferrer' href={props.data.page}>
                <Button
                  text="Page"
                />
              </a>
            </Col>
            <Col>
              <a target='_blank' rel='noreferrer' href={props.data.repo}>
                <Button
                  text="GitHub"
                />
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleCard