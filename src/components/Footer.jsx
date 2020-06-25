import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib
        </a>{" "}
        usando <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          O projeto é open source, fique a vontade para fazer um fork e criar sua própria versão.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
