import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../data/site";
import { blogPosts } from "../../data/blog";

const Blog = () => {
  return (
    <HelmetProvider>
      <Container className="About-header blog-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Blog</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              {post.image && (
                <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-image"
                  />
                </Link>
              )}

              <div className="blog-card-content">
                <p className="blog-card-date">{post.date}</p>

                <h2 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="blog-card-excerpt">{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  Read post
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Blog;