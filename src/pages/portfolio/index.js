import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../data/site";
import { portfolioGroups } from "../../data/portfolio";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {portfolioGroups.map((group, i) => (
          <div key={i} className="po_group mb-5">
            <h2 className="mb-4">{group.title}</h2>

            {group.intro && (
              <p className="po_group_intro">
                {group.intro}
              </p>
            )}

            <div
              className={
                group.title === "Maps"
                  ? "po_items_ho po_items_masonry"
                  : "po_items_ho po_items_grid"
              }
            >
              {group.items.map((data, j) => (
                <div key={j} className="po_item">
                  <img src={data.img} alt={data.title} />
                  <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>

                    {data.link ? (
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view project
                      </a>
                    ) : (
                      <button
                        className="view-project-btn"
                        onClick={() => setSelectedItem(data)}
                      >
                        view project
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedItem && (
          <div className="portfolio-modal" onClick={() => setSelectedItem(null)}>
            <div
              className="portfolio-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="portfolio-modal-close"
                onClick={() => setSelectedItem(null)}
              >
                ×
              </button>

              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="portfolio-modal-image"
              />

              <div className="portfolio-modal-text">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;