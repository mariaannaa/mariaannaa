import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { meta } from "../../data/site";
import { blogPosts } from "../../data/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <HelmetProvider>
        <Container className="About-header blog-page">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Post not found | {meta.title}</title>
          </Helmet>

          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Post not found</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <Link to="/blog" className="blog-back-link">
                ← Back to blog
              </Link>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header blog-page blog-post-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {post.title} | {meta.title}
          </title>
          <meta
            name="description"
            content={post.excerpt || meta.description}
          />
        </Helmet>

        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="8">
            <Link to="/blog" className="blog-back-link">
              ← Back to blog
            </Link>
          </Col>
        </Row>

        <Row>
          <Col lg="8">
            <article className="blog-post">
              <p className="blog-post-date">{post.date}</p>
              <h1 className="blog-post-title">{post.title}</h1>

              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-post-image"
                />
              )}

              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default BlogPost;