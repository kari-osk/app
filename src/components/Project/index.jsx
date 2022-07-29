import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProjectData } from '../../data/projectData'
import SingleCard from '../SingleCard'

import './style.css'

function Project() {
  return (
    <div id="project" className='project_content'>
      <Container className='project_container'>
        <h1 className='project_h1'>Project</h1>
        <Row>
          {ProjectData.map(data => (
            <Col sm={12} md={6} lg={3} xl={3} key={data.id}>
              <SingleCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div >
  )
}

export default Project

