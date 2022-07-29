import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io"
import { SiPostman, SiMysql, SiPostgresql, SiJava, SiFigma, SiAdobeillustrator, SiAdobexd } from "react-icons/si"
import { } from 'react-icons/'

import './style.css'

function About() {
  return (
    <div id="about" >
      <Container className="about_container">
        <Row>
          <Col sm={12} md={6} lg={6}>
            {/* <span className='about_circle' /> */}
            <h1 className='about_h1'>About<br />Me</h1>
            <p className='about_p'>
              I am a student of Full Stack development, with a special
              focus in Front-end. I have also challeging myself to learn more
              about UI/UX to improve as a Developer.
              <br />I have a little dog and I am based in São
              Paulo, Brazil.</p>

          </Col>
          <Col className="about_col">
            <Row className="about_icons">
              <h4>Technology</h4>
              <table className="about_table">
                <tbody>
                  <tr>
                    <td>
                      <FaReact />
                    </td>
                    <IoLogoJavascript />
                    <td>
                      <FaHtml5 />
                    </td>
                    <td>
                      <FaCss3Alt />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SiJava />
                    </td>
                    <td>
                      <SiMysql />
                    </td>
                    <td>
                      <SiPostgresql />
                    </td>
                    <td>
                      <SiPostman />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <FaGithub />
                    </td>
                    <td>
                      <SiFigma />
                    </td>
                    <td>
                      <SiAdobexd />
                    </td>
                    <td>
                      <SiAdobeillustrator />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Row>
          </Col>
        </Row>
      </Container >
    </div >
  )
}

export default About
