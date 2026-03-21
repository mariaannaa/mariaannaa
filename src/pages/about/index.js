import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../data/site";
import { dataabout, worktimeline, toolbox, services } from "../../data/about";
import aboutPhoto from "../../assets/images/about.jpeg";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-2 mt-2 pt-md-2">
          <Col lg="8">
            <h1 className="display-4 mb-3">About me</h1>
            <hr className="t_border my-3 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp about_intro_row align-items-center">
          <Col lg="7">
            <h3 className="color_sec mb-2">{dataabout.title}</h3>
            <p>{dataabout.aboutme}</p>
          </Col>

          <Col lg="3" className="about_photo_col">
            <img src={aboutPhoto} alt="Maria" className="about_photo" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec mb-2">Education</h3>
          </Col>
          <Col lg="10">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row" className="multiline-cell">
                        {data.jobtitle}
                      </th>
                      <td className="multiline-cell">{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="10">
            <div className="toolbox-section">
              <h3 className="color_sec mb-2">Tools</h3>

              <div className="toolbox-grid">
                {toolbox.map((item, i) => (
                  <div key={i} className="toolbox-card">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>

                    <div className="toolbox-tags">
                      {item.tools.map((tool, j) => (
                        <span key={j} className="toolbox-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec mb-2">Experience</h3>
          </Col>
          <Col lg="10">
            {services.map((data, i) => {
              return (
                <div className="service_" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default About;